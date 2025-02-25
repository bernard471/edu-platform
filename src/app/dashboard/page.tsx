'use client';

import { useState } from 'react';
import Sidebar from "@/components/DashboardSidebar";
import Header from "@/components/DashboardHeader";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { CoursesPurchasedCard } from "@/components/stats/CoursesPurchasedCard";
import { LabsCompletedCard } from "@/components/stats/LabsCompletedCard";
import { CoursesCompletedCard } from "@/components/stats/CoursesCompleted";
import { CertificatesCard } from "@/components/stats/CertificatesCard";
import RecentActivities from '@/components/RecentActivities';
import ProgressChart from '@/components/ProgressChart';
import UpcomingDeadlines from '@/components/UpcomingDeadlines';
import { useSession } from "next-auth/react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const { data: session } = useSession();
  const [notifications] = useState(3);

  return (
    <>
      <div className="min-h-screen bg-gray-200 flex">
        <div className="lg:fixed lg:top-[65px] lg:left-0 lg:bottom-0 lg:w-60 lg:bg-white shadow-lg lg:z-10">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <div className="fixed top-0 left-0 right-0 z-10">
            <Header notifications={notifications} />
          </div>
          <div className="px-8 py-4 lg:flex items-center justify-between mb-4 mt-16 lg:ml-60">
            <div className='mb-4'>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session?.user?.name}!</h1>
              <p className="text-gray-600">Track your learning progress</p>
            </div>
          </div>

          <div className="px-8 lg:ml-60">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <CoursesPurchasedCard />
              <CoursesCompletedCard />
              <LabsCompletedCard />
              <CertificatesCard />
            </div>
          </div>

          <div className='px-8 lg:ml-60'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ProgressChart />
              </div>
              <RecentActivities />
            </div>
          </div>

          <div className="px-8 lg:ml-60 mb-6 mt-8">
            <UpcomingDeadlines />
          </div>
        </div>
      </div>
    </>
  );
}
