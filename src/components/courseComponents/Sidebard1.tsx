import React, { useState } from 'react';


interface SidebarProps {
  currentChapter: number;
  setCurrentChapter: (chapter: number) => void;
}

const courseCategories = [
  {
    id: "cyber-fundamentals-beginner",
    title: "Beginner",
    chapters: [
      {
        title: 'MODULE 1: Introduction to Cybersecurity ',
        duration: '2 weeks'
      },
      {
        title: 'Module 2: Ethical Hacking & Penetration Testing',
        duration: '2 weeks'
      },

    ]
  },
  {
    id: "network-security",
    title: "Intermediate",
    chapters: [
      {
        title: 'Module 3: Digital Forensics & Incident Response',
        duration: '2 weeks'
      },
      {
        title: 'Module 4: Cloud Security & DevSecOps',
        duration: '2 weeks'
      },

      
    ]
  },
  {
    id: "exploitation-techniques",
    title: "Advanced",
    chapters: [
      {
        title: 'Module 5: Advanced Cybersecurity Topics',
        duration: '2 weeks'
      },
      {
        title: 'Module 6: Career Development in Cybersecurity',
        duration: '2 weeks'
      },
    ]
  }
];

const Sidebar = ({ currentChapter, setCurrentChapter }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const handleChapterChange = (categoryIndex: number, chapterIndex: number) => {
    const previousChaptersCount = courseCategories
      .slice(0, categoryIndex)
      .reduce((count, category) => count + category.chapters.length, 0);
    
    const absoluteIndex = previousChaptersCount + chapterIndex;
    setCurrentChapter(absoluteIndex); // This updates the parent state
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-500 text-white"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 h-screen"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40
        transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        w-80 bg-white border-r border-gray-200 p-6
        overflow-y-auto h-screen lg:h-auto
      `}>

        <nav className="mt-12 lg:mt-0">
      {courseCategories.map((category, categoryIndex) => (
        <div key={category.id} className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 px-4">{category.title}</h2>
          {category.chapters.map((chapter, chapterIndex) => {
            const absoluteIndex = courseCategories
              .slice(0, categoryIndex)
              .reduce((count, cat) => count + cat.chapters.length, 0) + chapterIndex;
            
            return (
              <button
                key={chapterIndex}
                onClick={() => handleChapterChange(categoryIndex, chapterIndex)}
                className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
                  currentChapter === absoluteIndex
                    ? 'bg-blue-100 text-green-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-gray-600 font-bold">{chapter.title}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">{chapter.duration}</p>
              </button>
            );
          })}
        </div>
      ))}
    </nav>
      </div>
    </>
  );
}


export default Sidebar;