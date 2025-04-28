import React from 'react';
import Section from '../ui/Section';
import { certifications } from '../../data';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications and achievements"
      className="bg-slate-50 dark:bg-slate-800"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 ml-6 pl-8 py-2">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="mb-10 relative"
              data-animate="true"
            >
              <div className="absolute -left-14 mt-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 text-white">
                <Award size={18} />
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between flex-wrap">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30">
                    {cert.date}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Issued by {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certifications;