import React from 'react';
import { BookOpen } from 'lucide-react';

interface SidebarProps {
  currentChapter: number;
  setCurrentChapter: (chapter: number) => void;
}

const chapters = [
  {
    title: 'Understanding Cybersecurity Basics',
    description: 'Core concepts and terminology in cybersecurity',
    duration: '1 hour'
  },
  {
    title: 'Common Security Threats',
    description: 'Overview of malware, phishing, and social engineering',
    duration: '2 hours'
  },
  {
    title: 'Basic Security Practices',
    description: 'Essential security measures for personal and professional use',
    duration: '3 hours'
  },
  {
    title: 'Advanced Security Concepts',
    description: 'Advanced topics like cryptography and network security',
    duration: '4 hours'
  },
  {
    title: 'Ethical Hacking and Penetration Testing',
    description: 'Introduction to ethical hacking and penetration testing',
    duration: '5 hours'
    },
  {
    title: 'Conclusion',
    description: 'Conclusion and key takeaways',
    duration: '6 hours'
  },
  {
    title: 'References',
    description: 'List of references and further reading',
    duration: '7 hours'
  },
  {
    title: 'Disclaimer',
    description: 'Important information about the course content',
    duration: '8 hours'
  }
];

function Sidebar({ currentChapter, setCurrentChapter }: SidebarProps) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 p-6 mt-20">

      <nav>
        {chapters.map((chapter, index) => (
          <button
            key={index}
            onClick={() => setCurrentChapter(index)}
            className={`w-full text-left p-4 rounded-lg mb-2 transition-colors ${
              currentChapter === index
                ? 'bg-green-100 text-green-700'
                : 'hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <BookOpen className='text-emerald-400' size={16} />
              <h3 className="text-gray-600 font-bold">{chapter.title}</h3>
            </div>
            <p className="text-sm text-gray-500 ml-6 mt-1">{chapter.duration}</p>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;