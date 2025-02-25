"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import LabGrid from './LabGrid';
import LabFilters from './LabFilters';
import LabSort from './LabSort';
import LabDetails from './LabDetails';
import { filterLabs } from '../../utils/labFilters';
import { sortLabs } from '../../utils/labSorting';
import { Lab, LabDifficulty, SortOption } from '../../types/lab';
import { labs } from '../../data/labs';
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer/Footer';
import Image1 from "@/images/sch8.jpeg";
import Image from "next/image";
import { motion } from 'framer-motion';



const LabsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulties, setSelectedDifficulties] = useState<LabDifficulty[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('points');
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);

  const filteredLabs = filterLabs(labs, searchQuery, selectedDifficulties);
  const sortedLabs = sortLabs(filteredLabs, sortOption);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto ">
      <section className="relative px-4 py-28 mb-10 mx-auto bg-slate-900 max-w-full">
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src={Image1}
      alt="Hero background"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gray-900/80"></div>
  </div>
  <div className="relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white max-w-3xl mx-auto"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-blue-200 to-purple-200 mb-6">
        Practical Labs
      </h1>
      <p className="text-xl mt-4 leading-relaxed">
        Master cybersecurity through hands-on experience. 
        Put your skills to the test with real-world scenarios and earn recognition.
      </p>
    </motion.div>
  </div>
</section>


        <div className="flex flex-col mb-8 p-8 md:flex-row gap-8">
          <LabFilters
            selectedDifficulties={selectedDifficulties}
            onDifficultyChange={setSelectedDifficulties}
          />

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search labs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-black border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <LabSort
                  sortOption={sortOption}
                  onSortChange={setSortOption}
                />
              </div>
            </div>

            <LabGrid 
              labs={sortedLabs}
              onLabClick={setSelectedLab}
            />
          </div>
        </div>

       
      </div>

      {selectedLab && (
        <LabDetails
          lab={selectedLab}
          onClose={() => setSelectedLab(null)}
        />
      )}
       <Footer />
    </div>
  );
};
export default LabsPage;