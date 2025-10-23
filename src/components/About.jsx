import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award, CheckCircle, Trophy } from 'lucide-react';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.fade-in');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-900/20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className=" bg-gradient-to-r from-teal-400 to-blue-500 mr-4 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">About Me</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-400 ml-4 rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 leading-relaxed">
              I'm a passionate <span className="text-teal-400 font-medium">Full Stack MERN Developer</span> with expertise in building secure, innovative, and user-friendly applications. 
              Leveraging MERN stack technologies and Generative AI, I create solutions that drive organizational success and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        
        {/* Experience and Education Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Experience Card */}
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-1 rounded-2xl shadow-xl h-full">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                    <Briefcase className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                </div>
                
                <div className="mb-6 pb-4 border-b border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white mb-1">Web Developer Intern & Freelancer</h4>
                  <div className="flex items-center">
                    <span className="text-teal-400 text-sm font-medium">Jan 2025 – Mar 2025</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">Academic & Freelance</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></div>
                    </div>
                    <div>
                      <h5 className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">MERN Stack Development</h5>
                      <p className="text-gray-400 text-sm">Built 3+ academic projects using Agile methodologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></div>
                    </div>
                    <div>
                      <h5 className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">Client Projects</h5>
                      <p className="text-gray-400 text-sm">Developed 5+ client websites with deployment experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></div>
                    </div>
                    <div>
                      <h5 className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">UI/UX Enhancement</h5>
                      <p className="text-gray-400 text-sm">Improved user interfaces with responsive design implementations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Card */}
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-1 rounded-2xl shadow-xl h-full">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-700/50">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                    <GraduationCap className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Academic Background</h3>
                </div>
                
                <div className="mb-6 pb-4 border-b border-gray-700/50">
                  <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Computer Applications</h4>
                  <div className="flex items-center">
                    <span className="text-teal-400 text-sm font-medium">Kuvempu University</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">Graduated June 2025</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">CGPA</span>
                    <span className="text-2xl font-bold text-white">9.13</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" style={{ width: '91.3%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between group">
                    <span className="text-gray-400 group-hover:text-teal-300 transition-colors">Pre-University (CEBA)</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">MES SSM PU College</span>
                  </div>
                  <div className="flex justify-between group">
                    <span className="text-gray-400 group-hover:text-teal-300 transition-colors">Secondary Education</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">Lake View Cambridge School</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications & Achievements */}
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-1 rounded-2xl shadow-xl">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-blue-500/20 flex items-center justify-center mr-4">
                  <Award className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications & Achievements</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                      <CheckCircle className="w-4 h-4 text-teal-400" />
                    </div>
                    Certifications
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Software Engineering Job Simulation (J.P. Morgan Chase & Co)</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Web Development Course (Unified Mentor)</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Business Leadership (Simplilearn)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                      <Trophy className="w-4 h-4 text-teal-400" />
                    </div>
                    Achievements
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Developed 6+ academic projects</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">Created 10+ personal projects</span>
                    </li>
                    <li className="flex items-start group">
                      <span className="text-teal-400 mr-2 group-hover:text-teal-300 transition-colors">•</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors">CGPA of 9.13 in BCA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}