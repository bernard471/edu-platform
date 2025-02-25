"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/NavBar";
import Image1 from "@/images/dkcyber.jpg";
import Image2 from '@/images/sch8.jpeg';
import Image3 from '@/images/frimpz.jpg';
import Image from "next/image";
const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
              <Navbar />
      {/* Hero Section */}
{/* Hero Section */}
<section className="relative px-4 py-32 mx-auto bg-slate-900 max-w-full">
  <div className="absolute inset-0 overflow-hidden">
    <Image 
      src={Image2}
      alt="Hero background"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-gray-900/80"></div>
  </div>
  <div className="relative z-10">
    <motion.h1
      className="text-5xl md:text-7xl font-bold text-blue-200 to-purple-200 mb-6 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Empowering Digital Learning
    </motion.h1>
    <motion.p
      className="text-xl mt-4 leading-relaxed text-white text-center max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      Leading the future of cybersecurity education through innovation & hands-on experience.
    </motion.p>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="px-6 py-16 bg-gray-100 rounded-xl mx-4 md:mx-auto max-w-full">
        <div className="grid md:grid-cols-1 gap-12 text-center ">
            <div className="mb-8 md:mb-0 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-gray-700 text-lg">
              Founded in 2024, C1DC eduatform is on a mission to revolutionize cybersecurity education.
            </p>
          </div>
          <div className="mb-8 md:mb-0 justify-center max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 text-center ">
          {[
            {
              title: "Our Mission",
              text: "We're dedicated to making cybersecurity education accessible, engaging, and effective. Our platform bridges the gap between theoretical knowledge and practical skills, preparing the next generation of cybersecurity professionals."
            },
            {
              title: "Our Vision",
              text: "To create a world where quality cybersecurity education is available to everyone, fostering a safer digital future through knowledge and skill development."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-4">{item.title}</h2>
              <p className="text-gray-700 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>
        </div>
        </div>
      </section>

{/* Stats Section */}
<section className="px-6 py-24 bg-white">
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 }
    }}
    className="max-w-7xl mx-auto"
  >
    <h2 className="text-4xl md:text-6xl font-bold text-center text-blue-900 mb-16">Our Impact in Numbers</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { 
          value: "10K+", 
          label: "Active Students",
          icon: "👨‍🎓",
          description: "Learners actively pursuing cybersecurity excellence"
        },
        { 
          value: "20+", 
          label: "Interactive Courses",
          icon: "🎯",
          description: "Comprehensive courses with hands-on labs"
        },
        { 
          value: "95%", 
          label: "Success Rate",
          icon: "🏆",
          description: "Of our students achieve their certification goals"
        }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
        >
          <div className="flex justify-between">
          <div className="text-4xl mb-4">{stat.icon}</div>
          <h3 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {stat.value}
          </h3>
          </div>
          <p className="text-xl font-semibold text-blue-900 mt-2">{stat.label}</p>
          <p className="text-gray-600 mt-2">{stat.description}</p>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto"></div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* Team Section */}
      <section className="px-6 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
{[
  { name: "Mr. Foster Dogbe", role: "CEO", image: Image1 },
  { name: "Mr. David Gyedu", role: "Director/Facilitator", image: Image1 },
  { name: "Mr. Frimpong Prince", role: "Facilitator", image: Image3 }
].map((member, index) => (
  <motion.div
    key={index}
    className="text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-indigo-600">
      <Image
        src={member.image}
        alt={member.name}
        className="object-cover w-full h-full"
      />
    </div>
    <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
    <p className="text-gray-600">{member.role}</p>
  </motion.div>
))}

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
