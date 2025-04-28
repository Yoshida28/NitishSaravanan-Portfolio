import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  className = '',
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 scroll-mt-20 ${className}`}
      data-animate="true"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 inline-block relative after:content-[''] after:absolute after:w-3/5 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0 pb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;