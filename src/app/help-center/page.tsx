'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/NavBar';
import Image1 from '@/images/sch8.jpeg';
import Image from 'next/image';

// Type definitions
type CategoryId = 'technical' | 'course' | 'billing' | 'all';

interface FAQ {
  question: string;
  answer: string;
}

type FAQs = Record<Exclude<CategoryId, 'all'>, FAQ[]>;

interface SupportCategory {
  id: CategoryId;
  title: string;
  icon: string;
  description: string;
}


export default function HelpCenter() {
  // State management
  const [activeCategory, setActiveCategory] = useState<CategoryId>('technical');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // FAQ data
  const faqs: FAQs = {
    technical: [
        {
          question: "How do I reset my password?",
          answer: "Go to login page, click 'Forgot Password', enter your email, and follow the reset instructions sent to your inbox."
        },
        {
          question: "What browsers are supported?",
          answer: "We support the latest versions of Chrome, Firefox, Safari, and Edge. For optimal performance, we recommend using Chrome."
        },
        {
          question: "How can I fix video playback issues?",
          answer: "First check your internet connection, clear browser cache, and ensure you're using a supported browser. If issues persist, try lowering video quality in settings."
        }
      ],
      course: [
        {
          question: "How do I track my progress?",
          answer: "Your dashboard shows your course progress, completed modules, and earned certificates. You can also download progress reports."
        },
        {
          question: "Can I download course materials?",
          answer: "Yes, most course materials are available for download. Look for the download icon next to lectures and resources."
        },
        {
          question: "What happens if I fail an assessment?",
          answer: "You can retake assessments up to three times. Each attempt will have slightly different questions to ensure learning."
        }
      ],
      billing: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers for corporate accounts."
        },
        {
          question: "How do I cancel my subscription?",
          answer: "Go to Account Settings > Subscriptions > Cancel Subscription. You'll retain access until the end of your billing period."
        },
        {
          question: "Are there any refunds available?",
          answer: "We offer a 30-day money-back guarantee for all courses if you're not satisfied with your purchase."
        }
      ]

  };

  // Support categories data
  const supportCategories: SupportCategory[] = [
    {
      id: 'technical',
      title: "Technical Support",
      icon: "🔧",
      description: "Get help with platform access, course materials, and technical issues"
    },
    {
      id: 'course',
      title: "Course Support",
      icon: "📚",
      description: "Questions about course content, assignments, and assessments"
    },
    {
      id: 'billing',
      title: "Account & Billing",
      icon: "💳",
      description: "Manage your account settings, subscriptions, and payments"
    }
  ];

  // Helper functions
  const getAllFaqs = (): FAQ[] => {
    return Object.values(faqs).flat();
  };

  const getFilteredFaqs = (): FAQ[] => {
    const query = searchQuery.toLowerCase();
    const faqsToSearch = activeCategory === 'all' ? getAllFaqs() : faqs[activeCategory as Exclude<CategoryId, 'all'>];
    
    return searchQuery
      ? faqsToSearch.filter(faq => 
          faq.question.toLowerCase().includes(query) || 
          faq.answer.toLowerCase().includes(query)
        )
      : faqsToSearch;
  };

  const handleCategoryClick = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Reset search when changing categories
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-4 py-32 mx-auto bg-slate-900 max-w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src={Image1}
            alt="Hero background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10">
          <motion.h1 
            className="mb-8 text-4xl mt-4 font-bold text-center text-white md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How Can We Help You?
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center p-2 bg-gray-100 rounded-lg border border-gray-200">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-4 py-3 bg-transparent text-gray-900 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                className="px-6 py-3 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                onClick={() => handleCategoryClick('all')}
              >
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Support Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className={`p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer
                  ${activeCategory === category.id ? 'border-l-4 border-indigo-600' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {searchQuery ? 'Search Results' : 'Frequently Asked Questions'}
          </h2>
          <motion.div 
            className="grid gap-6 max-w-4xl mx-auto"
            layout
          >
            <AnimatePresence>
              {getFilteredFaqs().map((faq, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  className="p-6 bg-white rounded-lg shadow border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  layout
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
