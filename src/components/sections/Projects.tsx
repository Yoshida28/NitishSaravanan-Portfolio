import React, { useState } from 'react';
import Section from '../ui/Section';
import { projects } from '../../data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { ExternalLink, Star } from 'lucide-react';
import Button from '../ui/Button';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  // Get unique technologies across all projects
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A selection of projects I've worked on"
      className="bg-white dark:bg-slate-900"
    >
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <Button
          variant={filter === null ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {allTechnologies.map(tech => (
          <Button
            key={tech}
            variant={filter === tech ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card 
            key={project.id} 
            className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardHeader className="pb-0">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.featured && (
                  <span className="inline-flex items-center bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 text-xs px-2.5 py-0.5 rounded-full">
                    <Star size={12} className="mr-1" /> Featured
                  </span>
                )}
              </div>
              <CardDescription className="mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 flex-grow">
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
            {project.link && (
              <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline inline-flex items-center"
                >
                  View Project <ExternalLink size={14} className="ml-1" />
                </a>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;