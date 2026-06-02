import React from "react";
import { Monitor, Server, Wrench, Code2 } from "lucide-react";

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
    <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full mr-3 mb-3 text-sm">
      {children}
    </span>
  );

  return (
    <section
      id="skills"
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

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frontend
              </h3>
            </div>
            <div>
              {frontendSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-teal-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Backend
              </h3>
            </div>
            <div>
              {backendSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-purple-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tools
              </h3>
            </div>
            <div>
              {toolSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg dark:shadow-md ">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-red-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Programming Languages
              </h3>
            </div>
            <div>
              {programmingSkills.map((skill) => (
                <Badge key={skill.name}>{skill.name}</Badge>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
