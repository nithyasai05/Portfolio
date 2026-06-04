import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Joining The Dots',
      role: 'Intern [ Full Stack Developer ]',
      period: '2024 - 2025',
      location: 'Remote',
      description: [
        'Completed a 1-year Boot camp: 3 months focused on Python and DSA, followed by 7 months on frontend development.',
        'Gained hands-on experience with modern frameworks and tools used in frontend development.',
        'Improved application performance by 40% through optimization and caching strategies, while building 12+ projects in 3 months including an e-commerce site, movie search app, and task manager.',
        'Led a team of 20 members, mentoring them in JavaScript, React.js, DSA, and Python.'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: 2,
      company: 'Resolution Minds Software Solutions PVT LTD',
      role: 'Intern [ Frontend Developer ]',
      period: '2020 - 2022',
      location: 'Remote',
      description: [
        'Developed responsive websites and web applications for various clients',
        'Worked closely with designers to implement pixel-perfect UI/UX designs',
        'Optimized websites for performance and SEO best practices',
        'Maintained and updated existing client websites'
      ],
      technologies: ['React', 'Express', 'MongoDB', 'Socket.io', 'Heroku']
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-transparent transition-colors duration-300">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">Experience</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-sky-200 dark:bg-sky-900 md:left-1/2 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-10 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-sky-600 shadow-lg dark:border-slate-950 md:left-1/2"></div>

              <div
                className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-10 lg:pr-14' : 'md:pl-10 lg:pl-14'
                }`}
              >
                <Reveal className="glass-card rounded-[1.75rem] p-5 sm:p-7 transition-shadow duration-300" delay={index * 100}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mt-1 sm:mt-0 text-sm sm:text-base">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3 text-gray-600 dark:text-gray-300 leading-7 text-sm sm:text-base">
                        <span className="mt-2 h-2 w-2 rounded-full bg-sky-500 shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="pill-tag px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
