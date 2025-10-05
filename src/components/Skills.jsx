import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'CSS', level: 80, category: 'frontend' },
    { name: 'JavaScript', level: 75, category: 'frontend' },
    { name: 'React', level: 75, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'SQL', level: 60, category: 'backend' },
    { name: 'Node.js', level: 30, category: 'backend' },
    { name: 'MongoDB', level: 50, category: 'backend' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Netlify', level: 75, category: 'tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, delay }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-100 font-semibold">
          {skill.name}
        </span>
        <span className="text-gray-600 dark:text-gray-300 text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ease-out ${
            skill.category === 'frontend'
              ? 'bg-gradient-to-r from-blue-500 to-blue-600'
              : skill.category === 'backend'
              ? 'bg-gradient-to-r from-teal-500 to-teal-600'
              : 'bg-gradient-to-r from-purple-500 to-purple-600'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );

  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const toolSkills = skills.filter((skill) => skill.category === 'tools');

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-teal-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend
              </h3>
            </div>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100 + 400} />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools
              </h3>
            </div>
            {toolSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index * 100 + 800} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
