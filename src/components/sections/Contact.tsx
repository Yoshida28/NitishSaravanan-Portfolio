import React from 'react';
import Section from '../ui/Section';
import { Mail, Phone, MapPin } from 'lucide-react';
import { aboutMe } from '../../data';

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Let's discuss your project or opportunity"
      className="bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white text-center">Get in Touch</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-center max-w-2xl mx-auto">
            I'm currently open to freelance opportunities and collaborations. 
            If you have any questions or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                <Mail className="text-blue-600 dark:text-blue-400 w-8 h-8" />
              </div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Email</h4>
              <a 
                href={`mailto:${aboutMe.email}`} 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                {aboutMe.email}
              </a>
            </div>
            
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                <Phone className="text-blue-600 dark:text-blue-400 w-8 h-8" />
              </div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Phone</h4>
              <a 
                href={`tel:${aboutMe.phone}`} 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {aboutMe.phone}
              </a>
            </div>
            
            <div className="group bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                <MapPin className="text-blue-600 dark:text-blue-400 w-8 h-8" />
              </div>
              <h4 className="font-medium text-slate-900 dark:text-white mb-2">Location</h4>
              <p className="text-slate-600 dark:text-slate-400">
                {aboutMe.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;