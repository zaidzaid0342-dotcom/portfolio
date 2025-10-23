import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'layout-grid',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: 'server',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'RESTful APIs', level: 85 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: 'settings',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'JWT Authentication', level: 80 },
        { name: 'Generative AI', level: 75 },
        { name: 'Agile Methodologies', level: 80 }
      ]
    }
  ];

  const otherSkills = [
    'Responsive Design', 'UI/UX Optimization', 'Database Schema Design', 
    'Payment Integration', 'Real-time Features', 'Deployment'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center mb-12">
          <div className=" bg-teal-400 mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-indigo-900/30 p-8 rounded-xl border border-indigo-700/50">
              <div className="flex items-center mb-6">
                <i data-lucide={category.icon} className="w-6 h-6 text-teal-400 mr-3"></i>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-teal-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-indigo-800/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-gray-800 to-indigo-900/30 p-8 rounded-xl border border-indigo-700/50">
          <div className="flex items-center mb-6">
            <i data-lucide="zap" className="w-6 h-6 text-teal-400 mr-3"></i>
            <h3 className="text-xl font-semibold text-white">Additional Expertise</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-indigo-800/50 text-indigo-300 rounded-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}