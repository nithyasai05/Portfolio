import React from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300 pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up flex flex-col items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQH3ooEgp9owog/profile-displayphoto-shrink_800_800/B4EZPyfKRTGcAc-/0/1734940076705?e=1762387200&v=beta&t=aA7jd5MZbv1VaGyuOwdnok1KVl2zO6x1IfPQ54mm1gc" // make sure this image exists in your public folder
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg border-indigo-600 border-4"
          />

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Grandhi Nithyasai
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Front End Developer passionate about creating beautiful, functional
            web experiences that make a difference in people's lives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-blue-600 text-blue-600 dark:text-white dark:border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-white hover:text-white dark:hover:text-blue-700 transition-all duration-200"
            >
              View My Work
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/nithyasai05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nithyasai05/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:nithyasai5a@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
