'use client';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './Navbar';
import SectionDivider from './SectionDivider';
import Footer from './Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <SectionDivider 
        variant="primary"
        className="mt-8"
      />
      
      <About />
      
      <SectionDivider 
        variant="secondary"
        className="my-4"
      />
      
      <Skills />
      
      <SectionDivider 
        variant="primary"
        className="my-4"
      />
      
      <Projects />
      
      <SectionDivider 
        variant="secondary"
        className="my-4"
      />
      
      <Contact />
      
      <SectionDivider 
        variant="primary"
        className="py-6"
      />
      
      <Footer />
    </main>
  );
} 