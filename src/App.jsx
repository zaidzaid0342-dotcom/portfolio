import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black font-sans">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      {/* <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Mohammed Zaid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="mailto:zaidzaid0342@gmail.com" className="text-gray-400 hover:text-teal-400">
                <i data-lucide="mail" className="w-5 h-5"></i>
              </a>
              <a href="https://linkedin.com/in/mohammedzaid" target="_blank" className="text-gray-400 hover:text-teal-400">
                <i data-lucide="linkedin" className="w-5 h-5"></i>
              </a>
              <a href="#" target="_blank" className="text-gray-400 hover:text-teal-400">
                <i data-lucide="github" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}