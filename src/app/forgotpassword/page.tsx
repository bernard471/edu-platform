'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/users/forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Password reset link sent to your email')
        router.push('/login')
      } else {
        toast.error(data.error || 'Something went wrong')
      }
    } catch (error) {
      toast.error('Failed to send reset link')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  // Redirect if already logged in
  if (session) {
    router.push('/dashboard')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="space-y-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-10 h-10 text-cyan-500" />
            <h1 className="text-2xl text-blue-600 font-bold mt-2">DK Cyber</h1>
          </div>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8 space-y-6 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 
                         text-white px-3 py-2 placeholder-gray-400 shadow-sm focus:border-teal-500 
                         focus:outline-none focus:ring-1 focus:ring-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg 
                       font-semibold transition-colors flex items-center text-white justify-center gap-2"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          <div className="text-center">
            <Link href="/login" className="text-sm text-blue-400 hover:text-blue-300 transition duration-200">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
