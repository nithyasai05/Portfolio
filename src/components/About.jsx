import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-transparent transition-colors duration-300">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">About</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into digital reality
          </p>
        </Reveal>

        <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <Reveal className="glass-card rounded-[2rem] p-6 sm:p-8 lg:p-10" variant="left">
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-8 sm:text-lg">
              As a passionate and enthusiastic web developer, I focus on building modern, 
              responsive applications using the latest technologies. With a strong foundation in front-end development, 
              I’m dedicated to writing clean, maintainable code and crafting seamless user experiences.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-8 leading-8 sm:text-lg">
              As a fresher, I’m constantly learning and exploring new tools, frameworks, and best practices. 
              In my free time, I enjoy working on personal projects, participating in hackathons, and staying updated with industry trends. 
              I'm excited to collaborate with dynamic teams and grow through real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-full font-medium text-sky-900 dark:text-sky-100 border border-sky-200/70 dark:border-sky-400/20 bg-gradient-to-r from-sky-100 via-blue-100 to-cyan-100 dark:from-sky-950/70 dark:via-blue-900/40 dark:to-cyan-950/70">
                Problem Solver
              </span>
              <span className="px-4 py-2 rounded-full font-medium text-emerald-900 dark:text-emerald-100 border border-emerald-200/70 dark:border-emerald-400/20 bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-950/70 dark:via-teal-900/40 dark:to-cyan-950/70">
                Team Player
              </span>
              <span className="px-4 py-2 rounded-full font-medium text-fuchsia-900 dark:text-fuchsia-100 border border-fuchsia-200/70 dark:border-fuchsia-400/20 bg-gradient-to-r from-fuchsia-100 via-violet-100 to-rose-100 dark:from-fuchsia-950/70 dark:via-violet-900/40 dark:to-rose-950/70">
                Lifelong Learner
              </span>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-6">
            <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-7" delay={80} variant="right">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 dark:text-blue-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Clean Code</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I write maintainable, scalable code following best practices and industry standards.
              </p>
            </Reveal>

            <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-7" delay={140} variant="right">
              <div className="flex items-center mb-4">
                <Palette className="text-teal-600 dark:text-teal-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Design Focused</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I care deeply about user experience and creating interfaces that are both beautiful and functional.
              </p>
            </Reveal>

            <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-7" delay={200} variant="right">
              <div className="flex items-center mb-4">
                <Rocket className="text-purple-600 dark:text-purple-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I optimize applications for speed and efficiency, ensuring the best possible user experience.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
