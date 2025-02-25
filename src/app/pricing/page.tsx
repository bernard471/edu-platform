"use client"

import { Shield, Check, Star } from 'lucide-react';
import Navbar from '@/components/NavBar';
import Footer from '@/components/footer/Footer';
import { useRouter } from 'next/navigation';


const pricingPlans = [
  {
    name: "Basic",
    price: " $400",
    description: "Perfect for getting started",
    features: [
      "Comprehensive Cyber-Security Online Course",
      "Community forum access",
      "Basic learning path",
      "Email support",
      "Course completion certificates"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: " $200",
    period: "/month",
    description: "Best for serious learners",
    features: [
      "All Basic features",
      "Advanced cybersecurity courses",
      "Live practice labs",
      "1-on-1 mentoring sessions",
      "Priority email & chat support",
      "Course completion certificates"
    ],
    buttonText: "Start Pro Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: " $299",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "All Pro features",
      "Custom learning paths",
      "Team progress tracking",
      "API access",
      "Dedicated account manager",
      "Custom certificates",
      "24/7 phone support"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 pt-20 relative">
        <div className='fixed top-0 left-0 w-full z-50 absolute'>
        <Navbar />
        </div>
      <div className="max-w-7xl mx-auto mt-12 mb-[450px]">
        {/* Header */}
        <div className="text-center mb-12">
          
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-gray-400">Invest in your cybersecurity career with our flexible plans</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative bg-gray-800 rounded-2xl shadow-xl overflow-hidden
                ${plan.popular ? 'ring-2 ring-cyan-500 scale-105 transform' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-cyan-500 text-white px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-cyan-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
  onClick={() => router.push(`/checkout/${plan.name.toLowerCase()}`)}
  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors
    ${plan.popular 
      ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
      : 'bg-gray-700 text-white hover:bg-gray-600'
    }`}
>
  {plan.buttonText}
</button>

              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">All Plans Include</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Star className="h-8 w-8 text-cyan-500" />,
                title: "Quality Content",
                description: "Expert-led courses with practical examples"
              },
              {
                icon: <Shield className="h-8 w-8 text-cyan-500" />,
                title: "Hands-on Labs",
                description: "Practice in real-world environments"
              },
              {
                icon: <Check className="h-8 w-8 text-cyan-500" />,
                title: "Certification",
                description: "Industry-recognized certificates"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800 rounded-xl">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 w-full z-50 absolute'>
      <Footer />
      </div>
    </div>
  );
}
