import React from 'react';
import Link from 'next/link';
import { labs } from '@/data/labs';
import { Terminal, Book, X } from 'lucide-react';

interface SidebarProps {
    currentLabId: number;
    onClose: () => void;
  }

  const Sidebar = ({ currentLabId, onClose }: SidebarProps) => {
    return (
       <aside className="w-74 h-full bg-slate-800 p-4 border-r border-slate-700">
       <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-bold text-white mb-2">Cyber Labs</h1>
          <p className="text-sm text-slate-400">Interactive Learning Platform</p>
        </div>
        <button 
          onClick={onClose}
          className="lg:hidden p-2 hover:bg-slate-700 rounded-lg"
        >
          <X className="w-6 h-6 text-slate-300" />
        </button>
        </div>

      <nav className="space-y-6 overflow-y-auto h-[calc(100vh-120px)]">
        <div>
          <h2 className="text-sm font-semibold text-slate-400 mb-3">BASICS</h2>
          {labs.slice(0, 5).map((lab) => (
            <Link 
              key={lab.id}
              href={`/dashboard/labs/${lab.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1
                ${lab.id === currentLabId 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-700'}`}
            >
              <Terminal className="w-4 h-4" />
              <span>{lab.title}</span>
            </Link>
          ))}
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-400 mb-3">ADVANCED</h2>
          {labs.slice(5).map((lab) => (
            <Link 
              key={lab.id}
              href={`/dashboard/labs/${lab.id}`}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1
                ${lab.id === currentLabId 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-slate-300 hover:bg-slate-700'}`}
            >
              <Book className="w-4 h-4" />
              <span>{lab.title}</span>
            </Link>
          ))}
        </div>
        <Link href="/dashboard">
        <button className="mt-6 w-full bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-600 transition-colors">
          Back to Dashboard
        </button>
      </Link>
      </nav>

    </aside>
  );
};

export default Sidebar;
