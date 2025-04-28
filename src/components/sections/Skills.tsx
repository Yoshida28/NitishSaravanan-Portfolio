import React from 'react';
import Section from '../ui/Section';
import { skills } from '../../data';
import { Card, CardContent } from '../ui/Card';

const Skills: React.FC = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile Development',
    design: 'Design & Engineering',
    other: 'Other Skills',
  };

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A collection of technologies and tools I work with"
      className="bg-slate-50 dark:bg-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <Card key={category} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="bg-blue-600 dark:bg-blue-700 py-3 px-6">
              <h3 className="text-white font-semibold">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;