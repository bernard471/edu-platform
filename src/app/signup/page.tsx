"use client"

import React, { useState } from 'react'
import { Shield, Lock, Mail, User, ArrowRight, TriangleAlert } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { FcGoogle } from "react-icons/fc"


export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: "",  // Changed from username to name
    email: "",
    password: "",
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,  // Changed from form.username to form.name
          email: form.email,
          password: form.password
        }),
      });

      const data = await res.json()

      if (res.ok) {
        toast.success("Account created successfully!")
        router.push('/login')
      } else {
        setError(data.message)
      }
    } catch (error) {
      setError("Something went wrong. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleProvider = (provider: "github" | "google") => {
    signIn(provider, { callbackUrl: "/dashboard" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-md mx-auto px-6 pt-10 pb-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-12 h-12 text-cyan-500" />
            <Link href="/" className="text-2xl font-bold text-cyan-500 hover:text-cyan-400 transition-colors">
              DK Cyber
            </Link>
          </div>
          <h1 className="text-3xl font-bold mt-4">Join DK Cyber</h1>
          <p className="text-gray-400 mt-2">
            Start your cybersecurity learning journey
          </p>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
          {error && (
            <div className="bg-red-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-500 mb-6">
              <TriangleAlert className="h-4 w-4" />
              <p>{error}</p>
            </div>
          )}

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleProvider("google")}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg transition-colors"
            >
              <FcGoogle className="w-5 h-5" />
              Google
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800/50 text-gray-400">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <div className="relative">
                <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={form.name}  // Changed from form.username to form.name
                  onChange={(e) => setForm({ ...form, name: e.target.value })}  // Changed username to name
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-10 focus:outline-none focus:border-cyan-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-10 focus:outline-none focus:border-cyan-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-10 focus:outline-none focus:border-cyan-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {loading ? "Creating Account..." : "Create Account"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-cyan-400 hover:text-cyan-300 text-sm">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
