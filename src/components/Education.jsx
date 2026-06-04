import React from 'react';
import { Award, Calendar, MapPin, Download } from 'lucide-react';
import Reveal from './Reveal';

const Education = () => {
  const educationItems = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Sri Venkateswara College of Engineering (SVCE, JNTUA)',
      period: '2024 - 2026',
      location: 'Tirupathi, Andhra Pradesh',
      summary: 'Built a strong foundation in software engineering, data structures, algorithms, and modern web development.',
      highlights: ['Data Structures', 'Web Development', 'Database Systems', 'Software Engineering'],
      certificateUrl: '/Portfolio/certificates/mca_doc.pdf',
    },
    {
      id: 2,
      degree: 'Bachelor of Science [B.Sc] in Computer Science',
      institution: 'Sanjay Gandhi Government Degree College (SGGDC, SVU)',
      period: '2021 - 2024',
      location: 'Piler, Andhra Pradesh',
      summary: 'Focused on computer science, and analytical problem solving.',
      highlights: ['Mathematics', 'Statistics', 'Computer Science', 'Communication Skills'],
      certificateUrl: '/Portfolio/certificates/bsc_degree.pdf',
    },
    {
      id: 3,
      degree: 'Intermediate (MPC)',
      institution: 'Si Medha JR College (BIEAP)',
      period: '2019 - 2021',
      location: 'Piler, Andhra Pradesh',
      summary: 'Focused on Mathematics, Problem solving.',
      highlights: ['Mathematics', 'Physics', 'Chemistry', 'Basic Computer Skills'],
      certificateUrl: '/Portfolio/certificates/intermediate_marks.pdf',
    },
    {
      id: 4,
      degree: 'Higher Secondary School',
      institution: 'Zilla Parishad High School (ZPHS, SSC)',
      period: '2017 - 2019',
      location: 'Piler, Andhra Pradesh',
      summary: 'Focused on foundational subjects and overall development.',
      highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
      certificateUrl: '/Portfolio/certificates/ssc_marks.pdf',
    },
  ];

  // Download: Triggers a file download with a descriptive filename
  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="education" className="py-16 sm:py-20 bg-transparent transition-colors duration-300">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">Education</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Journey
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            The academic background that shaped my technical foundation and learning mindset.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {educationItems.map((item, index) => (
            <Reveal
              as="article"
              key={item.id}
              className="glass-card flex flex-col justify-between rounded-[1.8rem] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
              delay={index * 90}
              variant="scale"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {item.institution}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 shrink-0">
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="pill-tag px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                <button
                  onClick={() => handleDownload(item.certificateUrl, item.degree)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-2xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700 group"
                >
                  <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                  Download
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;