"use client"
import React, { useState } from 'react';
import { Clock, BookOpen, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import Sidebar from '@/components/Sidebard';
import CourseContent from '@/components/CourseContent';
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer/Footer';
import { TerminalContextProvider } from 'react-terminal';

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  return (
     <TerminalContextProvider>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex ">
      <Sidebar currentChapter={currentChapter} setCurrentChapter={setCurrentChapter}/>
      
      
      <main className="flex mt-16 p-8">
      
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button 
              className="px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg flex items-center gap-2"
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            >
              <ChevronLeft size={20} /> Previous
            </button>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700"
              onClick={() => setCurrentChapter(Math.min(2, currentChapter + 1))}
            >
              Next <ChevronRight size={20} />
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Cybersecurity</h1>
            <p className="text-gray-600 mb-6">
              Learn the fundamentals of cybersecurity, including basic concepts, terminology, and best practices
              for protecting digital assets.
            </p>
            
            <div className="flex gap-6 mb-8">
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
          </div>

          <CourseContent currentChapter={currentChapter} />
        </div>
      </main>
      
    </div>
    <Footer/>
    </div>
    </TerminalContextProvider>
  );
}

export default App;