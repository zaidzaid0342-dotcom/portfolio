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
    <section
      id="about"
      className="py-24 md:py-32 relative bg-gradient-to-br from-gray-950 via-indigo-950/50 to-teal-900/20 overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center mb-7">
            <span className="bg-gradient-to-tr from-teal-400 to-blue-400 rounded-full mr-3 shadow-lg"></span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter drop-shadow-lg">About Me</h2>
            <span className=" bg-gradient-to-tr from-blue-400 to-teal-400 rounded-full ml-3 shadow-lg"></span>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              I'm a passionate <span className="text-teal-400 font-semibold">Full Stack MERN Developer</span> with expertise in building secure, innovative, and user-friendly applications.
              <br className="hidden md:block" />
              Using MERN technologies and Generative AI, I create high-impact digital solutions that drive organizational success and deliver premium user experiences.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Experience Card */}
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 rounded-2xl shadow-2xl h-full">
              <div className="bg-gray-950/80 backdrop-blur-lg rounded-2xl p-8 h-full border border-gray-800/50">
                <div className="flex items-center mb-8">
                  <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/30 to-blue-500/30 flex items-center justify-center mr-5 shadow-lg">
                    <Briefcase className="w-8 h-8 text-teal-300" />
                  </span>
                  <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
                </div>
                <div className="mb-7 pb-5 border-b border-gray-800/60">
                  <h4 className="text-xl font-semibold text-white mb-1">Web Developer Intern & Freelancer</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-sm font-medium">Jan 2025 – Mar 2025</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">Academic Internship</span>
                  </div>
                </div>
                <ul className="space-y-6">
                  <li className="flex gap-3 items-start group">
                    <span className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></span>
                    <div>
                      <span className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">MERN Stack Development</span>
                      <p className="text-gray-400 text-sm">Built 3+ academic projects using Agile methodologies</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start group">
                    <span className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></span>
                    <div>
                      <span className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">Client Projects</span>
                      <p className="text-gray-400 text-sm">Developed 5+ client websites with deployment experience</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start group">
                    <span className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-teal-400 group-hover:bg-teal-300 transition-colors"></span>
                    <div>
                      <span className="text-gray-200 font-medium group-hover:text-teal-300 transition-colors">UI/UX Enhancement</span>
                      <p className="text-gray-400 text-sm">Improved user interfaces with responsive design implementations</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Education Card */}
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 rounded-2xl shadow-2xl h-full">
              <div className="bg-gray-950/80 backdrop-blur-lg rounded-2xl p-8 h-full border border-gray-800/50">
                <div className="flex items-center mb-8">
                  <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/30 to-blue-500/30 flex items-center justify-center mr-5 shadow-lg">
                    <GraduationCap className="w-8 h-8 text-teal-300" />
                  </span>
                  <h3 className="text-2xl font-bold text-white">Academic Background</h3>
                </div>
                <div className="mb-8 pb-5 border-b border-gray-800/70">
                  <h4 className="text-xl font-semibold text-white mb-1">Bachelor of Computer Applications</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-teal-400 text-sm font-medium">Kuvempu University</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">Graduated June 2025</span>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">CGPA</span>
                    <span className="text-2xl font-bold text-white">9.13</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                      style={{ width: '91.3%' }}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-teal-300 transition-colors">Pre-University (CEBA)</span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">MES SSM PU College</span>
                  </div>
                  <div className="flex justify-between items-center group">
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
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 rounded-2xl shadow-2xl">
            <div className="bg-gray-950/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-800/50 flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <div className="flex items-center mb-8">
                  <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/30 to-blue-500/30 flex items-center justify-center mr-5 shadow-lg">
                    <Award className="w-8 h-8 text-teal-300" />
                  </span>
                  <h3 className="text-2xl font-bold text-white">Certifications & Achievements</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Certifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                      </span>
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
                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <span className="w-7 h-7 rounded-full bg-teal-500/20 flex items-center justify-center mr-2">
                        <Trophy className="w-4 h-4 text-teal-400" />
                      </span>
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
      </div>
    </section>
  );
}
