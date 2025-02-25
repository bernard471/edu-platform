"use client"

import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import CourseCatalog from "./courses/CourseCatalog";
import FeaturedLabs from "@/components/home/FeaturedLabs";
import Footer from "@/components/footer/Footer";
import { TerminalContextProvider } from "react-terminal";
import {SessionProvider} from "next-auth/react"

export default function Home() {
  return (
    <main>
      <SessionProvider>
      <TerminalContextProvider>
        <Navbar />
        <Hero />
        <FeaturedCourses />
        <CourseCatalog />
        <FeaturedLabs />
        <Footer />
      </TerminalContextProvider>
      </SessionProvider>
    </main>
  );
}
