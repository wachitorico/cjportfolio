// app/page.tsx or pages/index.tsx
import Navbar from './navbar'
import './globals.css';
import Home from './home';
import AboutMe from './aboutme';
import Education from './education';
import Skills from './skills';
import Experience from './experience';
import Contact from './contact';
import Footer from './footer';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Cris Jhon B. Cantos - Portfolio",
  },
  icons: {
    icon: '/favicon.ico', // Path to your favicon in the public directory
  }
};

export default function () {
  return (
    <main className="min-h-screen bg-[#FEF8E5]">
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}