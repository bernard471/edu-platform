"use client"
import React, { useEffect,useState } from 'react';
import { Clock, BookOpen, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import Sidebar from '@/components/courseComponents/Sidebard';
import CourseContent from '@/components/courseComponents/CourseContent';
import Header from '@/components/courseComponents/CourseStudyHeader';
import Footer from '@/components/footer/Footer';
import { TerminalContextProvider } from 'react-terminal';
import { useSearchParams } from 'next/navigation';
import { courseCategories } from '@/components/coursedata/chapters';
import Link from 'next/link';
import { toast } from 'react-hot-toast';



function App() {
  const searchParams = useSearchParams();
  const category = searchParams ? searchParams.get('category') : null;

  const [isCompletionEnabled, setIsCompletionEnabled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [studyStartTime] = useState<Date>(new Date());

  useEffect(() => {
    const saveStudyTime = () => {
      const endTime = new Date();
      const studyDuration = (endTime.getTime() - studyStartTime.getTime()) / (1000 * 60);
  
      fetch('/api/users/study-time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId: category,
          duration: studyDuration,
          date: new Date().toISOString()
        })
      });
    };
  
    // Cleanup function that runs when component unmounts
    return () => {
      saveStudyTime();
    };
  }, [category, studyStartTime]);

  useEffect(() => {
    const fetchCompletionStatus = async () => {
      try {
        const response = await fetch(`/api/courses/status`);
        const data = await response.json();
        const completed = data.completedCourses.find(
          (course: { courseId: string }) => course.courseId === category
        );
        setIsCompleted(!!completed);
      } catch (error) {
        console.error('Error checking course status:', error);
      }
    };
  
    if (category) fetchCompletionStatus();
  }, [category]);

  useEffect(() => {
    const startDate = new Date();
    const twoMinutesFromStart = new Date(startDate.getTime() + 2 * 60 * 1000);


    const interval = setInterval(() => {
      setIsCompletionEnabled(new Date() >= twoMinutesFromStart);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCourseCompletion = async () => {
    try {
      const response = await fetch("/api/courses/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId: category }),
      });
      
      if (response.ok) {
        setIsCompleted(true);
        toast.success('Course completed! Your certificate will be issued in 2 minutes.', {
          duration: 5000,
          position: 'top-center',
          icon: '🎓'
        });
      }
    } catch (error) {
      console.error("Error completing course:", error);
      toast.error('Failed to complete the course. Please try again.');
    }
  };
  
  const [currentChapter, setCurrentChapter] = useState(() => {
    // Find the category index
    const categoryIndex = courseCategories.findIndex(cat => cat.id === category);
    if (categoryIndex === -1) return 0;
    
    // Calculate total chapters before this category
    return courseCategories
      .slice(0, categoryIndex)
      .reduce((count, cat) => count + cat.chapters.length, 0);
  });
  
  return (
    <TerminalContextProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-col lg:flex-row relative">
        
        <Sidebar 
            currentChapter={currentChapter} 
            setCurrentChapter={setCurrentChapter}
          />
          
          <main className="flex-1 p-4 lg:p-8 w-full">
            <div className="max-w-4xl mx-auto">
              

              <div className="bg-white rounded-xl shadow-sm p-4 lg:p-8 mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Comprehensive Cyber-Security Online Course</h1>
                <p className="text-gray-600 mb-6">
                  Learn the fundamentals of cybersecurity, including basic concepts, terminology, and best practices
                  for protecting digital assets.
                </p>
                
                <div className="flex flex-wrap gap-4 lg:gap-6 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={20} />
                    <span>6 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen size={20} />
                    <span>3 Chapters</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={20} />
                    <span>Certificate</span>
                  </div>
                </div>
                <Link href="/dashboard/schedule-meeting">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700">
                  Schedule a meeting with an instructor
                </button>
              </Link>

              </div>

              <div className="flex justify-between items-center mb-8">
                <button 
                  className="px-4 py-2 text-blue-600 hover:bg-blue-100 rounded-lg flex items-center gap-2"
                  onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                >
                  <ChevronLeft size={20} /> Previous
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700"
                  onClick={() => setCurrentChapter(Math.min(11, currentChapter + 1))}
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>

              <CourseContent currentChapter={currentChapter} />
              <div className="mt-8 text-center">
              <button
                  className={`px-6 py-3 rounded-lg ${
                    isCompletionEnabled
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-300 cursor-not-allowed text-gray-500"
                  }`}
                  disabled={!isCompletionEnabled || isCompleted}
                  onClick={handleCourseCompletion}
                >
                  {isCompleted
                    ? "Course Completed!"
                    : isCompletionEnabled
                    ? "Complete Course"
                    : "Complete Course (Available after 2 minutes)"}
                </button>

              </div>
            </div>
          </main>
        </div>
        <Footer/>
      </div>
    </TerminalContextProvider>
  );
}
export default App;
