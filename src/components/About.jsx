import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into digital reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              As a passionate and enthusiastic web developer, I focus on building modern, 
              responsive applications using the latest technologies. With a strong foundation in front-end development, 
              I’m dedicated to writing clean, maintainable code and crafting seamless user experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              As a fresher, I’m constantly learning and exploring new tools, frameworks, and best practices. 
              In my free time, I enjoy working on personal projects, participating in hackathons, and staying updated with industry trends. 
              I'm excited to collaborate with dynamic teams and grow through real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full font-medium">
                Problem Solver
              </span>
              <span className="bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-100 px-4 py-2 rounded-full font-medium">
                Team Player
              </span>
              <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 px-4 py-2 rounded-full font-medium">
                Lifelong Learner
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Code className="text-blue-600 dark:text-blue-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Clean Code</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I write maintainable, scalable code following best practices and industry standards.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Palette className="text-teal-600 dark:text-teal-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Design Focused</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I care deeply about user experience and creating interfaces that are both beautiful and functional.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Rocket className="text-purple-600 dark:text-purple-300 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I optimize applications for speed and efficiency, ensuring the best possible user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
