import React, { useState } from 'react';
import { BookOpen, Target, Link as LinkIcon } from 'lucide-react';

interface LabInfoProps {
  objectives: string[];
  instructions: string[];
  resources: { title: string; url: string; }[];
}

const LabInfo = ({ objectives, instructions, resources }: LabInfoProps) => {
  const [activeTab, setActiveTab] = useState('objectives');

  return (
    <div className="bg-slate-800 rounded-lg p-6">
      <div className="flex md:gap-4 mb-6">
        <button
          onClick={() => setActiveTab('objectives')}
          className={`md:px-4 px-2 py-2 rounded-lg ${
            activeTab === 'objectives' 
              ? 'bg-indigo-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
        >
          Objectives
        </button>
        <button
          onClick={() => setActiveTab('instructions')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'instructions' 
              ? 'bg-indigo-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab('resources')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'resources' 
              ? 'bg-indigo-600 text-white' 
              : 'text-slate-300 hover:bg-slate-700'
          }`}
        >
          Resources
        </button>
      </div>

      <div className="text-slate-300">
        {activeTab === 'objectives' && (
          <ul className="space-y-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <Target className="w-5 h-5 text-indigo-400 mt-1" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        )}

        {activeTab === 'instructions' && (
          <ol className="space-y-3 list-decimal list-inside">
            {instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400 mt-1" />
                <span>{instruction}</span>
              </li>
            ))}
          </ol>
        )}

        {activeTab === 'resources' && (
          <ul className="space-y-3">
            {resources.map((resource, index) => (
              <li key={index} className="flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-indigo-400" />
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-indigo-400 hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LabInfo;
