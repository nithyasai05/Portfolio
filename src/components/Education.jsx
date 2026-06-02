import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sri Venkateswara College of Engineering (SVCE, JNTUA)',
      period: '2024 - 2026',
      location: 'Tirupathi, Andhra Pradesh',
      summary:
        'Built a strong foundation in software engineering, data structures, algorithms, and modern web development.',
      highlights: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering'],
    },
    {
      id: 2,
      degree: 'Bachelor of Science [B.Sc] in Computer Science',
      institution: 'Sanjay Gandhi Government Degree College (SGGDC, SVU)',
      period: '2021 - 2024',
      location: 'Piler, Andhra Pradesh',
      summary:
        'Focused on computer science, and analytical problem solving.',
      highlights: ['Mathematics', 'Statistics', 'Computer Science', 'Communication Skills'],
    },
    {
      id: 3,
      degree: 'Intermediate (MPC)',
      institution: 'Si Medha JR College (BIEAP)',
      period: '2019 - 2021',
      location: 'Piler, Andhra Pradesh',
      summary:
        'Focused on Mathematics, Problem solving.',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Basic Computer Skills'],
    },
    {
      id: 4,
      degree: 'Higher Secondary School',
      institution: 'Zilla Parishad High School (ZPHS, SSC)',
      period: '2017 - 2019',
      location: 'Piler, Andhra Pradesh',
      summary:
        'Focused on foundational subjects and overall development.',
      highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The academic background that shaped my technical foundation and learning mindset.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationItems.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {item.institution}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                  <Award size={22} />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {item.summary}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;