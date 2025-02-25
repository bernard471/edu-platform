"use client";

import React, { useState, useEffect } from 'react';
import { Video, Icon } from 'lucide-react';
import { courseCategories } from '../coursedata/chapters1';


interface CourseContentProps {
  currentChapter: number;
}


function CourseContent1({ currentChapter }: CourseContentProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    setCurrentSection(0);
  }, [currentChapter]);

  const findCurrentChapter = () => {
    let chapterCount = 0;
    for (const category of courseCategories) {
      for (const chapter of category.chapters) {
        if (chapterCount === currentChapter) {
          return chapter;
        }
        chapterCount++;
      }
    }
    return courseCategories[0].chapters[0]; // Default fallback
  };

  const currentChapterData = findCurrentChapter();

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };
  
  const handleNextSection = () => {
    if (currentSection < currentChapterData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  
  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="text-green-600" size={24} iconNode={[]} />
        <h2 className="text-2xl text-gray-600 font-bold">{currentChapterData.title}</h2>
      </div>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Video size={20} />
          {showVideo ? 'Hide Video' : 'View Video'}
        </button>
        

      </div>

      {showVideo && (
        <div className="mb-6 rounded-lg overflow-hidden">
          <iframe
            src={currentChapterData.videoUrl}
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>
      )}



        <div className="mb-6">
                
                
                <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-semibold mb-3">
                  {currentChapterData.sections[currentSection]?.title || 'Section Title'}
                </h3>
                <div dangerouslySetInnerHTML={{ 
                  __html: currentChapterData.sections[currentSection]?.content || '' 
                }} />
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                    onClick={handlePreviousSection}
                    disabled={currentSection === 0}
                    className="px-4 text-black py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Section {currentSection + 1} of {currentChapterData.sections.length}
                </span>
                <button
                    onClick={handleNextSection}
                    disabled={currentSection === currentChapterData.sections.length - 1}
                    className="px-4 text-black py-2 bg-gray-200 rounded-lg disabled:opacity-50"
                >
                    Next
                </button>
                </div>
            </div>
        
            <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: currentChapterData.content }}
            />
    </div>
  );
}

export default CourseContent1;