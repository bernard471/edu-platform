"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CourseGrid from './CourseGrid';
import CourseFilters from './CourseFilters';
import CourseSort from './CourseSort';
import CourseDetails from './CourseDetails';
import { filterCourses } from '../../utils/courseFilters';
import { sortCourses } from '../../utils/courseSorting';
import { Course, CourseLevel, CourseTopic, CourseDuration, SortOption } from '../../types/course';
import { courses } from '../../data/courses';
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer/Footer';
import Image1 from "@/images/sch8.jpeg";
import Image from "next/image";

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<CourseLevel[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<CourseTopic[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<CourseDuration[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('popular');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const filteredCourses = filterCourses(
    courses,
    searchQuery,
    selectedLevels,
    selectedTopics,
    selectedDurations
  );
  
  const sortedCourses = sortCourses(filteredCourses, sortOption);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative px-4 py-28 mx-auto bg-slate-900 max-w-full">
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src={Image1}
      alt="Hero background"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gray-900/60"></div>
  </div>
  <div className="relative z-10">
    <div className="text-center mb-4 ">
      <h1 className="text-4xl md:text-6xl font-bold font-serif text-white">Cybersecurity Courses</h1>
      <p className="mt-8 text-white max-w-2xl mx-auto md:text-2xl">
        Explore our comprehensive collection of cybersecurity courses,
        from foundational concepts to advanced techniques.
      </p>
    </div>
  </div>
</section>

      
      <div className="max-w-9xl mx-auto px-6 py-12">

        <div className=" flex flex-col md:flex-row gap-8">
          <div className="hidden md:block h-full">
        <CourseFilters
            selectedLevels={selectedLevels}
            selectedTopics={selectedTopics}
            selectedDurations={selectedDurations}
            onLevelChange={setSelectedLevels}
            onTopicChange={setSelectedTopics}
            onDurationChange={setSelectedDurations}
          />
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <CourseSort
                  sortOption={sortOption}
                  onSortChange={setSortOption}
                />
              </div>
            </div>

            <CourseGrid 
              courses={sortedCourses}
              onCourseClick={setSelectedCourse}
            />
          </div>
        </div>
      </div>

      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default CoursesPage;