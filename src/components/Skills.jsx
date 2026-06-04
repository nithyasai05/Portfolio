import React from "react";
import { Monitor, Server, Wrench, Code2 } from "lucide-react";
import Reveal from './Reveal';

const Skills = () => {
  const skills = [
    { name: "HTML", category: "frontend" },
    { name: "CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "SQL", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "Git", category: "tools" },
    { name: "Github", category: "tools" },
    { name: "Aiven", category: "tools" },
    { name: "Vite", category: "tools" },
    { name: "Netlify", category: "tools" },
    { name: "Python", category: "programming" },
    { name: "C Programming", category: "programming" },
    { name: "Java Script", category: "programming" },
  ];

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolSkills = skills.filter((s) => s.category === "tools");
  const programmingSkills = skills.filter((s) => s.category === "programming");
  

  const Badge = ({ children }) => (
    <span className="pill-tag inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium">
      {children}
    </span>
  );

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-transparent transition-colors duration-300"
    >
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">Stack</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">

          <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-8" delay={30}>
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-8" delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-teal-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-8" delay={170}>
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-purple-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass-card rounded-[1.75rem] p-6 sm:p-8" delay={240}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Programming Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;
