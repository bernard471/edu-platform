"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/NavBar';
import Image1 from '@/images/sch8.jpeg';
import Image from 'next/image';

export default function AboutUs() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
{/* Hero Section */}
<section className="relative px-4 py-32 mx-auto bg-slate-900 max-w-full">
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src={Image1}
      alt="Hero background"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gray-900/80"></div>
  </div>
  <div className="relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white max-w-3xl mx-auto"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-blue-200 to-purple-200 mb-6">
        Let&apos;s Build Together
      </h1>
      <p className="text-xl mt-4 leading-relaxed">
        We&apos;re more than just a company - we&apos;re your digital Learning partner. 
        Let&apos;s create something extraordinary together.
      </p>
    </motion.div>
  </div>
</section>


      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              {
                title: "Innovation First",
                description: "Pushing boundaries and embracing new technologies to solve complex challenges.",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering exceptional results.",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Global Impact",
                description: "Making a difference through technology, one project at a time.",
                color: "from-pink-500 to-pink-600"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative p-8 rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-gray-200 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="text-blue-600" />, text: "hello@company.com" },
                  { icon: <Phone className="text-blue-600" />, text: "+1 (555) 123-4567" },
                  { icon: <MapPin className="text-blue-600" />, text: "123 Innovation Drive, Tech City" },
                  { icon: <Clock className="text-blue-600" />, text: "Mon-Fri: 9:00 AM - 6:00 PM" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    {item.icon}
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-0 focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}