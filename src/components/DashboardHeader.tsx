"use client"

import { FiBell, FiUser, FiMenu, FiLogOut } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { useSession, signOut } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image"

export default function Header({ notifications = 3 }) {
  const router = useRouter()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        profileImage: session.user.image || '',
      })
    }
  }, [session])

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push('/')
  }

  return (
    <header className="bg-white shadow-sm px-4 md:px-8 py-4">
      <div className="flex justify-between items-center">
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu size={24} />
        </button>

        <Link href="/" className="flex items-center pl-16 space-x-2 cursor-pointer">
          <Shield className="w-8 h-8 text-cyan-500" />
          <span className="text-xl text-cyan-900 font-bold">DK Cyber</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <input
            type="search"
            placeholder="Search..."
            className="w-64 px-4 py-2 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <FiBell size={24} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <div className="flex items-center space-x-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'Profile'}
                  width={40}
                  height={40}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <FiUser size={20} />
              )}
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-500 font-medium">{session?.user?.name}</p>
            </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
                <FiLogOut className="mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex md:hidden items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 relative">
            <FiBell size={24} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <FiUser size={20} />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="mt-4 px-2">
            <p className="text-sm font-medium">{userData.username}</p>
          </div>
        </div>
      )}
    </header>
  )
}
