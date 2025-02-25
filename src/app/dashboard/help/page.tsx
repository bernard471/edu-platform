"use client"

import DashboardHeader from '@/components/DashboardHeader';
import DashboardSidebar from '@/components/DashboardSidebar';
import { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiMessageCircle, FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I get started with the cybersecurity courses?",
        a: `<strong>Explore Available Courses</strong><br/>
• Navigate to the Courses section to see all available cybersecurity topics.<br/>
• Courses range from beginner to advanced, covering ethical hacking, penetration testing, social engineering, and more.<br/><br/>

<strong>Enroll in a Course</strong><br/>
• Click on a course that interests you and hit the "Enroll" button.<br/>
• Some courses are free, while others may require payment.<br/><br/>

<strong>Start Learning</strong><br/>
• Each course includes interactive lessons, quizzes, and hands-on labs.<br/>
• Follow the structured modules at your own pace.<br/><br/>

<strong>Practice in the Terminal</strong><br/>
• Use our built-in terminal to practice real cybersecurity commands and techniques.<br/>
• No need to install extra software—just open the terminal and start learning.<br/><br/>

<strong>Join the Community</strong><br/>
• Engage with other students in the discussion forums.<br/>
• Ask questions, share insights, and participate in challenges.<br/><br/>

<strong>Earn Certifications</strong><br/>
• After completing a course, take the final assessment to earn a certificate.<br/>
• Certificates can be added to your resume or LinkedIn profile.`
      },
      {
        q: "What prerequisites do I need?",
        a: "Basic computer knowledge and understanding of networks is recommended. Each course clearly lists specific prerequisites in its description."
      }
    ]
  },
  {
    category: "Course Access",
    questions: [
      {
        q: "How long do I have access to a course?",
        a: "Once enrolled, you have lifetime access to the course materials, including future updates and improvements."
      },
      {
        q: "Can I download course materials for offline viewing?",
        a: "No, Members can can visit cyber1defense front desk or email us on info@cyber1defense.com for offline access to all the purchased courses."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "What should I do if I encounter technical issues?",
        a: "First, try refreshing the page , Logout if possible and login again. If the issue persists, contact our 24/7 technical support team through the support portal."
      },
      {
        q: "How can I report a bug or suggest a feature?",
        a: "Use our feedback form in the support section or email our development team directly at dev@eduplatform.com"
      }
    ]
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>("Getting Started");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-200">
        <div className="fixed top-0 left-0 right-0 z-10">
        <DashboardHeader />
        </div>
        <div className="lg:fixed lg:top-[65px] lg:left-0 lg:bottom-0 lg:w-60 lg:bg-white shadow-lg lg:z-10">
            <DashboardSidebar />
        </div>
      <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-100 hover:bg-gray-100"
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
              >
                <h2 className="text-xl font-semibold text-gray-900">{category.category}</h2>
                {openCategory === category.category ? <FiChevronUp className='text-blue-600' /> : <FiChevronDown className='text-blue-600'/>}
              </button>
              
              {openCategory === category.category && (
                <div className="px-6 py-4 space-y-4">
                  {category.questions.map((item) => (
                    <div key={item.q} className="border-b border-gray-100 last:border-0 pb-4">
                      <button
                        className="w-full text-left flex items-center justify-between text-gray-700 hover:text-gray-900"
                        onClick={() => setOpenQuestion(openQuestion === item.q ? null : item.q)}
                      >
                        <span className="font-medium">{item.q}</span>
                        {openQuestion === item.q ? <FiChevronUp className='text-blue-600'/> : <FiChevronDown className='text-blue-600'/>}
                      </button>
                      {openQuestion === item.q && (
                        <p className="mt-2 text-gray-600 pl-4" dangerouslySetInnerHTML={{ __html: item.a }}></p>
                      )}

                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Still need help?</h2>
          <div className="grid md:grid-cols-3 gap-6">
          <Link href="/schedule-meeting">
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer">
              <FiMessageCircle size={24} className="text-blue-500" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
          </Link>
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-100">
              <FiMail size={24} className="text-blue-500" />
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-sm text-gray-600">info@cyber1defense.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-100">
              <FiPhone size={24} className="text-blue-500" />
              <div>
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-sm text-gray-600">+233 (243) 457-358</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
