"use client"

import { signIn } from "next-auth/react"
import Image from 'next/image'
import googlesvg from "../../public/google.svg"
import { useToast } from "@/hooks/use-toast"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const GooglesigninButton = () => {   
    const { toast } = useToast()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleGoogleSignIn = async () => {
        try {
            setIsLoading(true)
            const result = await signIn("google", {
                callbackUrl: "/dashboard",
                redirect: false
            })

            if (result?.error) {
                throw new Error(result.error)
            }

            if (result?.ok) {
                toast({
                    title: "Login successful",
                    description: "Welcome to your dashboard!",
                    className: "bg-cyan-600 border border-zinc-800 text-zinc-100",
                    duration: 5000,
                })
                router.push('/dashboard')
            }
        } catch (error) {
            toast({
                title: "Failed to login",
                description: "Unable to sign in with Google",
                variant: "destructive", 
                className: "bg-cyan-600 border font-serif border-zinc-800 text-zinc-100",
                duration: 3000,
            })
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 p-3 mb-4 rounded-lg border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <Image src={googlesvg.src} alt="Google" width={20} height={20} />
                {isLoading ? 'Signing in...' : 'Continue with Google'}
            </button>
        </div>
    )
}
