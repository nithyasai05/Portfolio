import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

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
        'Improved application performance by 40% through optimization and caching strategiesBuilt 12+ projects in 3 months, including an E-Commerce site, Movie Search App, and Task Manager.',
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
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mt-1 sm:mt-0">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {exp.company}
                    </span>
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
