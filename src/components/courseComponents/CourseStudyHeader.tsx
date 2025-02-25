"use client";

import { FiBell, FiUser, FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Header({ notifications = 3 }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm px-2 sm:px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu size={24} />
          </button>
          <button 
          onClick={() => router.push('/dashboard')}
          className="hidden md:block text-sm sm:text-base px-2 sm:px-4 py-2 text-blue-600 hover:bg-blue-50 bg-blue-100 rounded-lg transition-colors whitespace-nowrap"
        >
          Back to dashboard
        </button>

        </div>

        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Shield className="w-8 h-8 text-cyan-500" />
          <span className="text-xl font-bold">DK Cyber</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <input
            type="search"
            placeholder="Search..."
            className="w-48 lg:w-64 px-4 py-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <FiBell size={24} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden">
              {session?.user?.image ? (
                <Image 
                  src={session.user.image}
                  alt={session.user.name || 'Profile'}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <FiUser size={20} />
              )}
            </div>
            <div className="hidden lg:block">
              <p className="text-sm text-gray-500 font-medium">{session?.user?.name || 'Guest'}</p>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
        </div>

        <div className="flex md:hidden items-center space-x-2 sm:space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <FiBell size={24} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white overflow-hidden">
            {session?.user?.image ? (
              <Image 
                src={session.user.image}
                alt={session.user.name || 'Profile'}
                width={40}
                height={40}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FiUser size={18} />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 px-2">Course Study</h2>
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="px-2">
            <p className="text-sm font-medium">{session?.user?.name || 'Guest'}</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
      )}
    </header>
  );
}
