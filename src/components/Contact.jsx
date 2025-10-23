import React from 'react';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className=" bg-teal-400 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-indigo-900/20 rounded-xl border border-indigo-700/30 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4 group-hover:bg-teal-900/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:zaidzaid0342@gmail.com" className="text-teal-300 hover:text-teal-200 transition-colors">
                    zaidzaid0342@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-indigo-900/20 rounded-xl border border-indigo-700/30 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4 group-hover:bg-teal-900/30 transition-colors duration-300">
                  <Linkedin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/mohammed-zaid-089552379/" target="_blank" rel="noreferrer" className="text-teal-300 hover:text-teal-200 transition-colors">
                    mohammed-zaid
                  </a>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-indigo-900/20 rounded-xl border border-indigo-700/30 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4 group-hover:bg-teal-900/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mobile</p>
                  <p className="text-white">+91 7483052937</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-indigo-900/20 rounded-xl border border-indigo-700/30 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="bg-indigo-900/50 p-3 rounded-lg mr-4 group-hover:bg-teal-900/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Chikkmagalur, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-gradient-to-br from-gray-800 to-indigo-900/30 rounded-xl border border-indigo-700/50 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-teal-900/20 p-2 rounded-lg mr-3">
                  <Send className="w-5 h-5 text-teal-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Availability</h4>
              </div>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that you want to get started or think you need my help with something, 
                then get in touch.
              </p>
              <div className="flex items-center mt-6">
                <div className="h-px bg-indigo-700 flex-grow"></div>
                <span className="px-4 text-xs text-teal-400 font-medium">RESPONSE TIME: 24 HOURS</span>
                <div className="h-px bg-indigo-700 flex-grow"></div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-gray-800 to-indigo-900/30 rounded-xl border border-indigo-700/50 shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
              <p className="text-gray-300 mb-4">
                Feel free to reach out for collaborations or just a friendly hello. 
                I'm always open to discussing new projects and opportunities.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:zaidzaid0342@gmail.com" className="px-4 py-2 bg-teal-500/10 text-teal-300 rounded-lg border border-teal-500/30 hover:bg-teal-500/20 transition-colors text-sm font-medium">
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/mohammed-zaid-089552379/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-500/10 text-indigo-300 rounded-lg border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors text-sm font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-indigo-800/30 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mohammed Zaid. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}