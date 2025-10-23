import React, { useEffect, useRef } from 'react';
import ezeetrip from "../assets/projects/Screenshot (189).png"
import cafe from "../assets/projects/Screenshot (191).png"
import estate from "../assets/projects/Screenshot (192).png"
import wellness from "../assets/projects/Screenshot (194).png"

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    // Make sure the ref is set
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements with the animate-on-scroll class
    const elements = projectsRef.current.querySelectorAll('.animate-on-scroll');
    
    // Observe each element
    elements.forEach(el => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const projectList = [
    {
      title: 'Ezee Trip - Tourist Packages Booking',
      desc: 'Full-stack platform for browsing and booking travel, resorts, and packages. Admin dashboard with role-based access.',
      link: 'https://ezeetrip.vercel.app/',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      image: ezeetrip
    },
    {
      title: 'Cafe Management System',
      desc: 'Menu management, order tracking, inventory control and loyalty programs. Admin analytics and JWT auth.',
      link: '#',
      tech: ['React.js', 'Express.js', 'MongoDB'],
      image: cafe
    },
    {
      title: 'EstateEase – Real Estate Platform',
      desc: 'Property listing and real-time chat system with optimized MongoDB schemas and search filters.',
      link: '#',
      tech: ['React.js', 'Node.js', 'Socket.io'],
      image: estate
    },
    {
      title: 'Mental Health Wellness Website',
      desc: 'Doctor/patient dashboards, appointment scheduling, secure messaging, blogs and engagement features.',
      link: '#',
      tech: ['MERN', 'JWT'],
      image: wellness
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className=" bg-gradient-to-r from-teal-400 to-blue-500 mr-4 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          
          <p className="text-gray-300 text-lg max-w-3xl">
            Highlights of full-stack applications developed, showcasing robust CRUD operations, secure authentication, and optimized database schemas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900/80 p-1 rounded-2xl shadow-xl h-full">
                <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                    
                    {/* Project Link Overlay */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"
                    >
                      <div className="px-4 py-2 bg-teal-500 text-gray-900 font-medium rounded-lg flex items-center">
                        <i data-lucide="external-link" className="w-4 h-4 mr-2"></i>
                        View Project
                      </div>
                    </a>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-bold text-xl text-white group-hover:text-teal-300 transition-colors">
                        {project.title}
                      </h3>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-colors p-1"
                      >
                        <i data-lucide="external-link" className="w-5 h-5"></i>
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-5 flex-grow">{project.desc}</p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1.5 bg-gradient-to-r from-indigo-900/50 to-gray-800/50 text-indigo-300 rounded-full text-sm font-medium border border-indigo-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* View Project Button */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors group/link"
                    >
                      <span>View Project</span>
                      <i data-lucide="arrow-right" className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-xl text-teal-300 hover:text-white transition-all duration-300 hover:border-teal-400/50 hover:bg-teal-500/10 font-medium group"
          >
            <span>View All Projects</span>
            <i data-lucide="github" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}