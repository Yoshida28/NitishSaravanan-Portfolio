import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { aboutMe } from '../../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a
              href={aboutMe.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href={aboutMe.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          
            <a
              href={`mailto:${aboutMe.email}`}
              className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>
          </div>
          <div className="text-center">
            <p className="text-slate-400 text-sm">Made  by Nitish Saravanan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;