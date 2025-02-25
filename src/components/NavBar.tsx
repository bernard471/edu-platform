'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Shield, User, X } from 'lucide-react';
import Link from 'next/link';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: 'courses', label: 'Courses', path: '/courses' },
    { id: 'labs', label: 'Labs', path: '/labs' },
    { id: 'about-us', label: 'About Us', path: '/about-us' },
    { id: 'help-center', label: 'Help Center', path: '/help-center' },
    { id: 'contact-us', label: 'Contact Us', path: '/contact-us' },
  ];

 

  return (
    <nav className="bg-slate-900 text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <Shield className="w-8 h-8 text-cyan-500" />
            <span className="text-xl font-bold">DK Cyber</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <Link
              key={item.id}
              href={item.path}
              className={`transition-colors ${
                pathname === item.path 
                  ? 'text-cyan-400 font-medium' 
                  : 'hover:text-cyan-400'
              }`}
            >
              {item.label}
            </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
          <Link
              href="/signup"
              className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg ${
                pathname === '/signup'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-700'
              } transition-colors`}
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map(item => (
                <Link
                key={item.id}
                href={item.path}
                className={`block w-full text-left py-2 transition-colors ${
                  pathname === item.path 
                    ? 'text-cyan-400 font-medium' 
                    : 'hover:text-cyan-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/signup"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg w-full ${
                pathname === '/signup'
                  ? 'bg-cyan-700 text-white'
                  : 'bg-cyan-600 hover:bg-cyan-700'
              } transition-colors`}
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;