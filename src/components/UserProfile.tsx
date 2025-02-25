"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FiCamera, FiUser } from 'react-icons/fi';

export default function UserProfile() {
const [activeTab, setActiveTab] = useState('personal-information');

  const [profileImage, setProfileImage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const userData = {
    username: 'DK Cyber',
    email: 'dkcyber@gmail.com',
    role: 'Student'
  };

  const handlePasswordChange = () => {
    // Add your password update logic here
    console.log('Updating password:', passwords);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                  {profileImage ? (
                    <Image 
                      src={profileImage} 
                      alt="Profile" 
                      layout="fill" 
                      objectFit="cover"
                      className="w-32 h-32 rounded-full"
                    />
                  ) : (
                    <FiUser size={64} />
                  )}
                </div>
                <button
                  className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <FiCamera className="h-4 w-4" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-bold">{userData.username}</h2>
                <p className="text-gray-600">{userData.email}</p>
                <p className="text-gray-600">{userData.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b">
            <nav className="flex">
              {['Personal Information', 'Security'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 ${
                    activeTab === tab.toLowerCase().replace(' ', '-')
                      ? 'border-b-2 border-blue-500 text-blue-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'personal-information' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full h-8 p-4 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="DK"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full h-8 p-4 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Cyber"
                    />
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Save Changes
                </button>
              </div>
            )}

            {/* Add Security and Notifications tab content similarly */}
            {activeTab === 'security' && (
            <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Security Settings</h3>
                
                <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                    type="password"
                    className="mt-1 block w-full h-8 p-4 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={passwords.currentPassword}
                    onChange={(e) => setPasswords({...passwords, currentPassword: e.target.value})}
                />
                </div>

                <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                    type="password"
                    className="mt-1 block w-full h-8 p-4 bg-gray-300 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={passwords.newPassword}
                    onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
                />
                </div>

                <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                    type="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={passwords.confirmPassword}
                    onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
                />
                </div>

                <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handlePasswordChange}
                >
                Update Password
                </button>
            </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
}
