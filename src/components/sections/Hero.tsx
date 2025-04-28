import React from 'react';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import { aboutMe } from '../../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 dark:from-slate-900 dark:via-indigo-950 dark:to-blue-950 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute w-[800px] h-[800px] bg-blue-200/30 dark:bg-blue-800/20 rounded-full opacity-20 -top-[400px] -right-[400px] blur-3xl animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full opacity-20 top-[20%] -left-[300px] blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-[500px] h-[500px] bg-violet-200/30 dark:bg-violet-800/20 rounded-full opacity-20 -bottom-[200px] right-[10%] blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400">
                NS
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 text-transparent bg-clip-text">
            {aboutMe.name}
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-6 text-slate-700 dark:text-slate-300">
            {aboutMe.title}
          </p>
          <p className="text-xl mb-8 leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about building innovative, scalable, and user-centric digital experiences. 
            I transform ambitious ideas into polished products that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;