'use client';

import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

export function UserCoursesStats() {
  const { data: session } = useSession();
  const [userStats, setUserStats] = useState({
    coursesPurchased: 0,
    completedChapters: 0,
    totalHoursSpent: 0,
    certificatesEarned: 0
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      if (session?.user?.email) {
        const response = await fetch('/api/users/course-purchase', {
          headers: {
            'email': session.user.email
          }
        });
        const data = await response.json();
        if (data.success) {
          setUserStats({
            coursesPurchased: data.courses.length,
            completedChapters: data.courses.reduce((acc: number, course: { chaptersProgress: { completed: boolean }[] }) => 
              acc + course.chaptersProgress.filter((chapter) => chapter.completed).length, 0),
            totalHoursSpent: data.courses.reduce((acc: number, course: { chaptersProgress: { timeSpent: number }[] }) => 
              acc + course.chaptersProgress.reduce((time: number, chapter: { timeSpent: number }) => time + chapter.timeSpent, 0), 0),
            certificatesEarned: data.courses.filter((course: { certificateIssued: boolean }) => course.certificateIssued).length          });
        }
      }
    };

    fetchUserStats();
  }, [session]);

  return userStats;
}
