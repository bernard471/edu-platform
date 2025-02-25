import Image from 'next/image';
import { useState } from 'react';

interface CourseCardProps {
  id: string;
  thumbnail: string;
  title: string;
  instructor: string;
  instructorEmail?: string;
  instructorContact?: string;
  duration: string;
  chapters: number;
  progress: number;
  description?: string;
  onClick: (id: string) => void;
}

export default function RecommendedCourseCard({
  id,
  thumbnail,
  title,
  instructor,
  instructorEmail,
  instructorContact,
  duration,
  chapters,
  description = "Course description goes here",
  onClick
}: CourseCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="cursor-pointer" onClick={() => onClick(id)}>
        <Image   
          src={thumbnail} 
          alt={title}
          width={400}
          height={200}
          className="w-full h-[200px] object-cover" // This ensures consistent height
        />
          <div className="p-4">
            <h3 className="font-semibold text-gray-600 text-lg mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">Instructor: {instructor}</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>{duration}</span>
              <span>{chapters} Chapters</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 pb-4">
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(true);
            }}
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{title}</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Course Details</h4>
              <p className="text-gray-600">{description}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Instructor Information</h4>
              <div className="text-gray-600">
                <p>Name: {instructor}</p>
                <p>Email: {instructorEmail}</p>
                <p>Contact: {instructorContact}</p>
              </div>
            </div>
            
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
