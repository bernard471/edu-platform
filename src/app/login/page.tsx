"use client"

import { Shield, Lock, Mail, ArrowRight, TriangleAlert } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { toast } from 'sonner'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    })

    if (result?.ok) {
      toast.success("Welcome back!")
      router.push('/dashboard')
    } else {
      setError("Invalid email or password")
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
          <h1 className="text-3xl font-bold mt-4">Welcome Back</h1>
          <p className="text-gray-400 mt-2">
            Access your cybersecurity learning journey
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
            <button
              onClick={() => handleProvider("github")}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
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
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-10 focus:outline-none focus:border-cyan-500"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Remember me
                </label>
              </div>

              <Link 
                href="/forgotpassword"
                className="text-sm text-cyan-400 hover:text-teal-300 transition duration-200"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {loading ? "Signing in..." : "Sign In"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 text-sm">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
