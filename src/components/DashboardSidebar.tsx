'use client';

import { FiHome, FiBook, FiHelpCircle, FiMenu } from 'react-icons/fi';
import { Terminal } from "lucide-react"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024); // Changed from 768 to 1024
      if (window.innerWidth < 1024) { // Changed from 768 to 1024
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: <FiHome size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FiBook size={20} />, label: 'My Courses', path: '/dashboard/MyCourses' },
    { icon: <FiHelpCircle size={20} />, label: 'Help Center', path: '/dashboard/help' },
  ];

  return (
    <>
      {isTabletOrMobile && !sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-white text-gray-600 rounded-lg shadow-lg"
        >
          <FiMenu size={24} />
        </button>
      )}
      
      <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          ${isTabletOrMobile ? 'fixed inset-0' : 'relative h-screen'}
          bg-white shadow-lg transition-all duration-300 flex flex-col
          z-40
          lg:translate-x-0 lg:w-64 lg:h-screen
          ${sidebarOpen && isTabletOrMobile ? 'w-64 h-full' : 'w-20'}
        `}>
        <div className="p-4 flex items-center justify-between">
          {(sidebarOpen || !isTabletOrMobile) && <h1 className="lg:hidden text-xl font-bold text-blue-600">EduPlatform</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="xl:hidden p-2 rounded-lg hover:bg-gray-50 focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
        </div>

        <nav className="mt-2 flex-1">
          {menuItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`
                flex items-center p-4 
                ${pathname === item.path ? 'bg-blue-100 text-blue-600' : 'text-gray-600'} 
                hover:bg-blue-50 hover:text-blue-600 cursor-pointer
              `}
            >
              {item.icon}
              {(sidebarOpen || !isTabletOrMobile) && <span className="ml-4">{item.label}</span>}
            </Link>
          ))}
          <div className="flex items-center p-4 justify-center">
            <Link href="/dashboard/labs/1">
              <button className="px-8 justify-center bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 focus:outline-none inline-flex items-center">
                <Terminal size={24} />
                {(sidebarOpen || !isTabletOrMobile) && <span className="ml-4">Go to Labs</span>}
              </button>
            </Link>
          </div>
        </nav>
      </div>
      
      {isTabletOrMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
