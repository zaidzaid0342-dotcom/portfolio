import React, { useState, useEffect, useRef } from 'react';
import ezeetrip from "../assets/projects/Screenshot (189).png"
import cafe from "../assets/projects/Screenshot (191).png"
import estate from "../assets/projects/Screenshot (192).png"
import wellness from "../assets/projects/Screenshot (194).png"
import hospital from "../assets/projects/Screenshot (197).png"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Simple visibility animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectList.length - 1 ? 0 : prevIndex + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectList.length - 1 : prevIndex - 1));
  };

  const projectList = [
    {
      title: 'Ezee Trip - Tourist Packages Booking',
      desc: 'Full-stack platform for browsing and booking travel, resorts, and packages. Features include user authentication, dynamic package browsing, secure booking system, and admin dashboard with role-based access control.',
      features: [
        'User authentication with JWT and role-based access',
        'Dynamic package browsing with advanced filters',
        'Secure booking system with payment integration',
        'Admin dashboard for managing packages and bookings',
        'Responsive design optimized for all devices'
      ],
      link: 'https://ezeetrip.vercel.app/',
      github: 'https://github.com/zaidzaid0342-dotcom/ezeetrip',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Tailwind CSS'],
      image: ezeetrip,
      status: 'Live'
    },
    {
      title: 'Hospital Appointment Software',
      desc: 'Complete hospital appointment booking system with admin dashboard, doctor/patient portals, real-time status updates, and secure authentication. Streamlines the entire appointment lifecycle.',
      features: [
        'Patient registration and profile management',
        'Doctor scheduling and availability management',
        'Real-time appointment booking with instant confirmation',
        'Admin dashboard with analytics and reporting',
        'Secure authentication and data encryption',
        'Email notifications for appointments'
      ],
      link: 'https://hospital-4tj4.vercel.app',
      github: 'https://github.com/zaidzaid0342-dotcom/hospital',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'Express.js'],
      image: hospital,
      status: 'Live'
    },
    {
      title: 'Cafe Management System',
      desc: 'Comprehensive cafe management solution featuring menu management, order tracking, inventory control, and customer loyalty programs. Includes admin analytics dashboard.',
      features: [
        'Digital menu management with categories and pricing',
        'Real-time order tracking from placement to delivery',
        'Inventory management with low-stock alerts',
        'Customer loyalty program with points system',
        'Admin analytics dashboard with sales reports',
        'Staff management and role-based permissions'
      ],
      link: '#',
      github: 'https://github.com/zaidzaid0342-dotcom',
      tech: ['React.js', 'Express.js', 'MongoDB', 'JWT', 'Node.js', 'Chart.js'],
      image: cafe,
      status: 'Completed'
    },
    {
      title: 'EstateEase – Real Estate Platform',
      desc: 'Property listing and real-time chat system with optimized MongoDB schemas and advanced search filters. Connects buyers and sellers with seamless communication.',
      features: [
        'Advanced property search with multiple filters',
        'Real-time chat between buyers and sellers using Socket.io',
        'Property listing management with image uploads',
        'User authentication and profile management',
        'Optimized database queries for fast search results',
        'Favorite properties and saved searches'
      ],
      link: '#',
      github: 'https://github.com/zaidzaid0342-dotcom',
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express.js', 'Cloudinary'],
      image: estate,
      status: 'In Development'
    },
    {
      title: 'Mental Health Wellness Website',
      desc: 'Platform connecting patients with mental health professionals. Features include doctor/patient dashboards, appointment scheduling, secure messaging, and community engagement through blogs.',
      features: [
        'Separate dashboards for doctors and patients',
        'Appointment scheduling with calendar integration',
        'Secure end-to-end encrypted messaging',
        'Mental health blog with community engagement',
        'Resource library with wellness articles',
        'Anonymous support groups and forums'
      ],
      link: '#',
      github: 'https://github.com/zaidzaid0342-dotcom',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Socket.io'],
      image: wellness,
      status: 'Completed'
    }
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-teal-400 to-blue-500  mr-4 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl">
            Highlights of full-stack applications developed, showcasing robust CRUD operations, secure authentication, and optimized database schemas.
          </p>
        </div>
        
        {/* Project Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projectList.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                  onClick={() => openModal(project)}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-1 rounded-2xl shadow-xl h-full cursor-pointer hover:shadow-teal-500/20 transition-all duration-300">
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden h-64">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                        
                        {/* Status Badge */}
                        {project.status === 'Live' && (
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
                              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                              Live
                            </span>
                          </div>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50">
                          <div className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg shadow-xl transform scale-90 hover:scale-100 transition-transform duration-300">
                            View Details
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-bold text-xl text-white hover:text-teal-300 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {projectList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className={`mt-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <a 
            href="https://github.com/zaidzaid0342-dotcom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-xl text-teal-300 hover:text-white transition-all duration-300 hover:border-teal-400/50 hover:bg-teal-500/10 font-medium group"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/90 hover:bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all backdrop-blur-sm border border-gray-700 hover:border-gray-600 group z-10"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Status Badge in Modal */}
              {selectedProject.status && (
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm text-xs font-semibold rounded-full shadow-lg ${
                    selectedProject.status === 'Live' 
                      ? 'bg-green-500/90 text-white' 
                      : selectedProject.status === 'In Development'
                      ? 'bg-yellow-500/90 text-white'
                      : 'bg-blue-500/90 text-white'
                  }`}>
                    {selectedProject.status === 'Live' && (
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    )}
                    {selectedProject.status}
                  </span>
                </div>
              )}

              {/* Project Title in Modal */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Project Description */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Project Overview
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start bg-gray-800/50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 text-indigo-300 text-sm rounded-md border border-indigo-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700/50">
                {selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </a>
                )}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2 border border-gray-600/50 hover:border-gray-500/50"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      `}</style>
    </section>
  );
}