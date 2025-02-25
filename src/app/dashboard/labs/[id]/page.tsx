"use client";

import React, { useState, useEffect } from 'react';
import type { Lab } from '@/types/lab';
import { labs } from '@/data/labs';
import { useParams } from 'next/navigation';
import { TerminalPlayground } from '@/lib/terminal/Terminal';
import { TerminalContextProvider } from 'react-terminal';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import LabInfo from '@/components/LabInfo';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';


const LabPage = () => {
  const { data: session } = useSession();
  const params = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [lab, setLab] = useState<Lab | null>(null);
  const [loading, setLoading] = useState(true);
  const [showTerminal, setShowTerminal] = useState(false);
  const [labStatus, setLabStatus] = useState('not_started');
  const [canComplete, setCanComplete] = useState(false);

// Add these functions
const startLab = async () => {
  if (!session?.user?.email) {
    toast.error('Please sign in to start the lab');
    return;
  }

  try {
    if (params?.id) {
      await axios.post('/api/labs/start', { 
        labId: params.id,
        email: session.user.email 
      });
      setShowTerminal(true);
      setLabStatus('in_progress');
      toast.success('Lab started successfully');
      setTimeout(() => setCanComplete(true), 2 * 60 * 1000);
    }
  } catch (error) {
    toast.error('Failed to start lab');
    console.error('Error starting lab:', error);
  }
};
const completeLab = async () => {
  if (!session?.user?.email) {
    toast.error('Please sign in to complete the lab');
    return;
  }

  try {
    if (params?.id && lab) {
      await axios.post('/api/labs/complete', { 
        labId: params.id,
        labTitle: lab.title,
        email: session.user.email
      });
      setLabStatus('completed');
      setShowTerminal(false);
      toast.success('Lab completed successfully');
      window.dispatchEvent(new Event('labCompleted'));
    }
  } catch (error) {
    toast.error('Failed to complete lab');
    console.error('Error completing lab:', error);
  }
};
useEffect(() => {
  if (!session) {
    return;
  }

  const labId = params?.id;
  const currentLab = labs.find(lab => lab.id === Number(labId));
  
  if (currentLab) {
    setLab(currentLab);
  }
  setLoading(false);
}, [params, session]);

if (!session) {
  return <div className="h-screen bg-slate-900 p-4 text-white">Please sign in to access labs</div>;
}

if (loading || !lab) {
  return <div className="h-screen bg-slate-900 p-4 text-white">Loading...</div>;
}

  return (
    <TerminalContextProvider>
    <div className="flex h-screen bg-slate-900">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        z-30 lg:z-0
      `}>
        <Sidebar currentLabId={lab.id} onClose={() => setIsSidebarOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <Header 
           
          labTitle={lab.title}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        
        {/* Rest of your content */}
        
        <main className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Lab Information Card */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">{lab.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {lab.tools?.map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-slate-300">{lab.description}</p>
            </div>

            {/* Lab Instructions Container */}
            <LabInfo 
              objectives={lab.objectives}
              instructions={lab.instructions}
              resources={lab.resources}
            />

            {/* Terminal Section */}
            <div className="bg-slate-800 h-[430px] rounded-lg p-4">
  <h4 className="text-lg font-semibold text-white mb-4">Lab Terminal</h4>
  
  <div className="flex gap-4 mb-4">
            <button
              onClick={startLab}
              disabled={labStatus !== 'not_started'}
              className={`px-4 py-2 rounded ${
                labStatus === 'not_started' 
                  ? 'bg-green-600 hover:bg-green-700' 
                  : 'bg-gray-600'
              } text-white`}
            >
              Start Lab
            </button>
    
            <button
              onClick={completeLab}
              disabled={!canComplete || labStatus === 'completed'}
              className={`px-4 py-2 rounded ${
                canComplete && labStatus !== 'completed'
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-600'
              } text-white`}
            >
              Complete Lab
            </button>
          </div>

            {showTerminal && (
              <div className="h-[300px]">
                <TerminalPlayground />
              </div>
            )}
          </div>
          </div>
        </main>
      </div>
    </div>
    </TerminalContextProvider>
  );
};

export default LabPage;
