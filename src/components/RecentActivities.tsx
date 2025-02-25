'use client';

import { useEffect, useState, useCallback } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSession } from 'next-auth/react';


interface Activity {
  type: 'purchase' | 'completion' | 'lab';
  title: string;
  timestamp: Date;
  courseId?: string;
  courseTitle?: string;
}

export default function RecentActivities() {
  const { data: session } = useSession();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = useCallback(async () => {
    if (!session?.user?.email) return;
    try {
      const [purchaseRes, completionRes, labRes] = await Promise.all([
        fetch('/api/users/course-purchase'),
        fetch('/api/users/course-completions'),
        fetch('/api/users/lab-completions'),
      ]);

      if (!purchaseRes.ok || !completionRes.ok || !labRes.ok) {
        throw new Error('Failed to fetch activities');
      }

      const [purchases, completions, labs] = await Promise.all([
        purchaseRes.json(),
        completionRes.json(),
        labRes.json(),
      ]);

      const allActivities = [
        ...(purchases?.courseDetails || [])
          .map((p: { courseId: string; purchaseDate: string }) => ({
            type: 'purchase' as const,
            title: `Purchased ${p.courseId}`,
            timestamp: new Date(p.purchaseDate),
            courseId: p.courseId,
          }))
          .filter((activity: Activity) => activity.timestamp && !isNaN(activity.timestamp.getTime())),
        ...(completions?.completedCourses || [])
          .map((c: { courseId: string; courseTitle: string; completionDate: string }) => ({
            type: 'completion' as const,
            title: `Completed ${c.courseTitle || c.courseId}`,
            timestamp: new Date(c.completionDate),
            courseId: c.courseId,
          }))
          .filter((activity: Activity) => activity.timestamp && !isNaN(activity.timestamp.getTime())),
        ...(labs?.labCompletions || [])
          .map((l: { labTitle: string; completionDate: string }) => ({
            type: 'lab' as const,
            title: `Completed Lab: ${l.labTitle}`,
            timestamp: new Date(l.completionDate),
          }))
          .filter((activity: Activity) => activity.timestamp && !isNaN(activity.timestamp.getTime())),
      ].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

      setActivities(allActivities);
    } catch (error) {
      console.error('Fetch error:', error);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }, [session?.user?.email]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  useEffect(() => {
    const handleUpdate = () => fetchActivities();
    window.addEventListener('courseCompleted', handleUpdate);
    window.addEventListener('labCompleted', handleUpdate);
    window.addEventListener('coursePurchased', handleUpdate);

    return () => {
      window.removeEventListener('courseCompleted', handleUpdate);
      window.removeEventListener('labCompleted', handleUpdate);
      window.removeEventListener('coursePurchased', handleUpdate);
    };
  }, [fetchActivities]);


  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'purchase':
        return '💳';
      case 'completion':
        return '🎓';
      case 'lab':
        return '🔬';
      default:
        return '📝';
    }
  };

  if (!session) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl text-gray-500 font-semibold mb-4">Recent Activities</h2>
        <div className="text-center text-gray-400">Please sign in to view activities</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl text-gray-500 font-semibold mb-4">Recent Activities</h2>
        <div className="text-center text-gray-400">Loading activities...</div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl text-gray-500 font-semibold mb-2">Recent Activities</h2>
      <div className="space-y-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {activities.length > 0 ? (
          activities.slice(0, 5).map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span className="text-2xl">{getActivityIcon(activity.type)}</span>
              <div>
                <p className="font-medium text-gray-500">{activity.title}</p>
                <p className="text-sm text-gray-400">
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No recent activities</p>
        )}
      </div>
    </div>
);
}
