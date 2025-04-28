import React from 'react';
import Section from '../ui/Section';
import { aboutMe } from '../../data';
import { Award, Coffee, Code, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      className="bg-white dark:bg-slate-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            {aboutMe.description}
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">Current Roles</h3>
            <ul className="space-y-3">
              {aboutMe.roles.map((role, index) => (
                <li key={index} className="flex items-start">
                  <Briefcase className="text-blue-600 dark:text-blue-400 mt-1 mr-3" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">What Drives Me</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Elegant Code</h4>
                  <p className="text-slate-600 dark:text-slate-400">I'm passionate about writing clean, efficient, and maintainable code.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                  <Award className="text-orange-600 dark:text-orange-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Quality Solutions</h4>
                  <p className="text-slate-600 dark:text-slate-400">I strive to deliver high-quality products that exceed expectations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                  <Coffee className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">Curiosity</h4>
                  <p className="text-slate-600 dark:text-slate-400">I'm driven by curiosity and a constant desire to learn and improve.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;