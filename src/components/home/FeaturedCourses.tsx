"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import CourseCard from '../../app/courses/CourseCard';
import { courses } from '@/data/courses';
import { useRouter } from 'next/navigation';

const FeaturedCourses: React.FC = () => {
    const router = useRouter();
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-2 text-gray-600">Start your cybersecurity journey with our expert-crafted courses</p>
          </div>
          <button 
            onClick={() => router.push('/courses')}
            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors"
            >
            View All Courses <ArrowRight className="w-4 h-4" />
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;