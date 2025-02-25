"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { FiCamera, FiUser } from 'react-icons/fi'
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSidebar from '@/components/DashboardSidebar'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

export default function UserProfile() {
  const router = useRouter()
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState('personal-information')
  const [profileImage, setProfileImage] = useState<string | null>(session?.user?.image || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    profileImage: "",
  })

  useEffect(() => {
    if (session?.user) {
      setUserData({
        username: session.user.name || '',
        email: session.user.email || '',
        profileImage: session.user.image || ''
      })
      if (session.user.image) {
        setProfileImage(session.user.image)
      }
    }
  }, [session])


  const handlePasswordChange = async () => {
    if (!session?.user?.email) return

    if (!passwords.currentPassword || !passwords.newPassword || !passwords.confirmPassword) {
      toast.error("All password fields are required")
      return
    }
  
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords don't match")
      return
    }
  
    try {
      const response = await fetch("/api/users/change-password", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: passwords.currentPassword,
          newPassword: passwords.newPassword
        })
      })

      if (!response.ok) throw new Error('Failed to update password')

      toast.success("Password updated successfully")
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      })
    } catch (error) {
      toast.error("Failed to update password")
      console.error('Error updating password:', error)
    }
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !session?.user?.email) return
  
    const formData = new FormData()
    formData.append('profileImage', file)
  
    try {
      const response = await fetch('/api/users/upload-profile-image', {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: {
          'Accept': 'application/json'
        }
      })
  
      const data = await response.json()
  
      if (data.imageUrl) {
        setProfileImage(data.imageUrl)
        

  
        // Update UI components that use the profile image
        window.dispatchEvent(new Event('profileImageUpdated'))
        
        toast.success('Profile image updated successfully', {
          duration: 3000,
          position: 'top-center'
        })
      }
    } catch (error) {
      toast.error('Unable to upload image. Please try again.', {
        duration: 3000,
        position: 'top-center'
      })
      console.error('Error uploading image:', error)
    }
  }

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/login')
    toast.success('Logged out successfully')
  }




  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className="fixed top-0 left-0 right-0 z-10">
        <DashboardHeader />
        </div>
        <div className="lg:fixed lg:top-[65px] lg:left-0 lg:bottom-0 lg:w-60 lg:bg-white shadow-lg lg:z-10">
            <DashboardSidebar />
        </div>
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
              <h2 className="text-2xl font-semibold">{userData.username}</h2>
              <p className="text-gray-600">{userData.email}</p>
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
                      placeholder={userData.username}
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
                <div className="flex md:justify-between ">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Save Changes
                </button>
                <Button onClick={handleSignOut}
                className="flex bg-teal-500 hover:bg-teal-600">
                <LogOut className="h-5 w-5 mr-3 text-white-500" />
                  Logout
                </Button>
                </div>
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
    </div>
  );
}
