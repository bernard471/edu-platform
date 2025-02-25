'use client';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function UpcomingDeadlines() {
  const [deadlines, setDeadlines] = useState<{ course: string; deadline: string; progress: number }[]>([]);
  
  const fetchDeadlines = useCallback(async () => {
    try {
      const res = await axios.get('/api/users/course-purchase');
      const userDeadlines = res.data.courseDetails
        .filter((deadline: { status: string }) => deadline.status !== 'completed')
        .map((deadline: { courseId: string; dueDate: string; progress: number }) => ({
          course: deadline.courseId,
          deadline: calculateTimeLeft(deadline.dueDate),
          progress: deadline.progress
        }));
      setDeadlines(userDeadlines);
    } catch (error) {
      console.error('Error fetching deadlines:', error);
      setDeadlines([]);
    }
  }, []);
  
  useEffect(() => {
    fetchDeadlines();
  }, [fetchDeadlines]);

  const calculateTimeLeft = (dueDate: string) => {
    const now = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return '1 day left';
    if (diffDays === 2) return '2 days left';
    if (diffDays < 7) return `${diffDays} days left`;
    if (diffDays === 7) return '1 week left';
    if (diffDays === 14) return '2 weeks left';
    if (diffDays === 21) return '3 weeks left';
    if (diffDays === 30) return '1 month left';
    
    return `${diffDays} days left`;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl text-gray-500 font-semibold mb-4">Upcoming Deadlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deadlines.length > 0 ? (
          deadlines.map((deadline, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="text-gray-600 font-medium">{deadline.course}</h3>
              <p className="text-sm text-gray-400">{deadline.deadline}</p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${deadline.progress}%` }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-3 text-center">No upcoming deadlines</p>
        )}
      </div>
    </div>
  );
}
