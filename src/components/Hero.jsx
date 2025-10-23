// import React from 'react';
// import placeholder from '../assets/placeholder.svg';
// import place from "../assets/placeholder.jpeg"
// import zaid from "../assets/zaid.jpeg"
// import profile from "../assets/pic.jpeg"

// // Reusable Icon Component (to replace data-lucide placeholders)
// const Icon = ({ path, className = "w-5 h-5 mr-2" }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
//   </svg>
// );

// export default function Hero() {
//   return (
//     // Updated Section: Added background patterns/effects for a premium tech feel
//     <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gray-950 relative overflow-hidden">
      
//       {/* Abstract Background Grid/Pattern for Industrial Feel */}
//       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
//         <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
//               <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-700" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
//         {/* Text Content - Left Side */}
//         <div className="space-y-6 lg:space-y-8">
//           <p className="text-lg text-teal-400 font-semibold tracking-widest uppercase">
//             Hello, I'm
//           </p>
          
//           <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
//             Mohammed <span className="text-teal-400 block sm:inline">Zaid</span>
//           </h1>
          
//           {/* Dynamic Role Text with a slight offset */}
//           <h2 className="text-3xl sm:text-4xl text-gray-400 font-extralight pt-2 border-l-4 border-teal-500/50 pl-4">
//             <span className="font-medium text-white">Full Stack MERN Developer</span> | Generative AI Enthusiast
//           </h2>
          
//           <p className="text-gray-400 max-w-xl text-lg leading-relaxed pt-4">
//             I specialize in crafting **secure, innovative, and high-performance applications** using the **MERN stack**. My focus is leveraging emerging technologies like **Generative AI** to build scalable and efficient solutions that deliver tangible business value.
//           </p>
          
//           {/* CTA Buttons with high contrast and hover effects */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
            
//             {/* Primary Button: High Contrast, Lifted Shadow */}
//             <a href="#projects" className="px-8 py-3 bg-teal-500 text-gray-900 font-bold text-lg rounded-full shadow-lg shadow-teal-500/40 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-400 flex items-center justify-center">
//               <Icon path="M9.75 17L9 20l-1 1h8l-1-1l-.75-3m-6.5-6.5A6.75 6.75 0 0118.75 12a6.75 6.75 0 01-13.5 0z" className="w-6 h-6 mr-2 text-gray-900" />
//               View Projects
//             </a>
            
//             {/* Secondary Button: Clean Outline */}
//             <a href="#contact" className="px-8 py-3 border border-gray-600/70 rounded-full text-teal-300 font-medium text-lg hover:border-teal-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
//               <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" className="w-6 h-6 mr-2 text-teal-300" />
//               Get In Touch
//             </a>
//           </div>
//         </div>
        
//         {/* Image Display - Right Side (Focus on geometric and layered display) */}
//         <div className="flex justify-center lg:justify-end order-first lg:order-last">
//           <div className="relative w-60 h-60 md:w-96 md:h-96">
            
//             {/* Blurry glow effect */}
//             <div className="absolute inset-4 bg-gradient-to-br from-teal-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
            
//             {/* Geometric ring/border effect */}
//             <div className="absolute inset-0 border-6 border-teal-500/30 rounded-full animate-spin-slow"></div>

//             {/* Placeholder Image */}
//             <img 
//               src={profile} 
//               alt="Mohammed Zaid - Full Stack Developer" 
//               // Using object-contain for placeholder, but object-cover for a real photo
//               className="relative w-full h-full rounded-full object-cover shadow-2xl shadow-gray-900 ring-4 ring-gray-800/80 transition duration-500" 
//             />
//           </div>
//         </div>
        
//       </div>
//     </section>
//   )
// }

// Simple CSS for the custom animation, typically in a CSS file or using a style tag/utility setup
/*
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 120s linear infinite;
}
*/


import React from 'react';
import placeholder from '../assets/placeholder.svg';
import place from "../assets/placeholder.jpeg"
import zaid from "../assets/zaid.jpeg"
import profile from "../assets/pic.jpeg"

// Reusable Icon Component (to replace data-lucide placeholders)
const Icon = ({ path, className = "w-5 h-5 mr-2" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

export default function Hero() {
  return (
    // Updated Section: Added background patterns/effects for a premium tech feel
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-gray-950 to-indigo-950 relative overflow-hidden">
      
      {/* Abstract Background Grid/Pattern for Industrial Feel */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-gray-700" />
        </svg>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Content - Centered */}
        <div className="text-center space-y-8 lg:space-y-12">
          <div className="flex items-center justify-center">
            <div className="h-1 w-12 bg-gradient-to-r from-teal-400 to-blue-500 mr-4 rounded-full"></div>
            <p className="text-lg text-teal-400 font-semibold tracking-widest uppercase">
              Hello, I'm
            </p>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-teal-400 ml-4 rounded-full"></div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
            Mohammed <span className="text-teal-400 block sm:inline">Zaid</span>
          </h1>
          
          {/* Dynamic Role Text with a slight offset */}
          <h2 className="text-3xl sm:text-4xl text-gray-400 font-extralight pt-2 border-l-4 border-teal-500/50 pl-4 inline-block">
            <span className="font-medium text-white">Full Stack MERN Developer</span> | Generative AI Enthusiast
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed pt-4">
            I specialize in crafting **secure, innovative, and high-performance applications** using the **MERN stack**. My focus is leveraging emerging technologies like **Generative AI** to build scalable and efficient solutions that deliver tangible business value.
          </p>
          
          {/* CTA Buttons with high contrast and hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            
            {/* Primary Button: High Contrast, Lifted Shadow */}
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-gray-900 font-bold text-lg rounded-full shadow-lg shadow-teal-500/40 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-teal-500/60 flex items-center justify-center">
              <Icon path="M9.75 17L9 20l-1 1h8l-1-1l-.75-3m-6.5-6.5A6.75 6.75 0 0118.75 12a6.75 6.75 0 01-13.5 0z" className="w-6 h-6 mr-2 text-gray-900" />
              View Projects
            </a>
            
            {/* Secondary Button: Clean Outline */}
            <a href="#contact" className="px-8 py-3 border border-gray-600/70 rounded-full text-teal-300 font-medium text-lg hover:border-teal-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center">
              <Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4" className="w-6 h-6 mr-2 text-teal-300" />
              Get In Touch
            </a>
          </div>
        </div>
        
      </div>
    </section>
  )
}

// Simple CSS for the custom animation, typically in a CSS file or using a style tag/utility setup
/*
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.05); opacity: 0.5; }
}
.animate-pulse-slow {
  animation: pulse-slow 6s infinite ease-in-out;
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 120s linear infinite;
}
*/