import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Reveal from './Reveal';

const Projects = () => {
  const projects = [
      {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "A modern personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and experience with a responsive design and smooth animations.",
      image:
        "/Portfolio/portfolio.jpg",
      technologies: ["React", "Tailwind CSS", "HTML", "Java Script"],
      liveUrl: "https://nithyasai05.github.io/Portfolio/",
      githubUrl: "https://github.com/nithyasai05/Portfolio",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Based Tourist Safety Monitoring System ",
      description:
        "Built a full stack application using React.js, Node.js, and MySQL integrating geo-fencing, real-time GPS tracking, and AI-based anomaly detection.",
      image:
        "/Portfolio/travel.jpg",
      technologies: ["React", "HTML", "Java Script", "Node.js", "MySQL", "AI"],
      liveUrl: "https://fluffy-kitten-82457d.netlify.app/",
      githubUrl: "https://github.com/nithyasai05/Smart-Safety-Tourism-App",
      featured: true,
    },
    {
      id: 3,
      title: "Simple Quiz App",
      description:
        "A fully functional simple quiz application with multiple pages, engaging questions, and progress tracking. it features a modern design and smooth user interactions for an enjoyable quiz experience.",
      image:
        "/Portfolio/simple-quiz.jpg",
      technologies: ["HTML", "CSS", "Java Script"],
      liveUrl: "https://nithyasai05.github.io/simple-quiz/",
      githubUrl: "https://github.com/nithyasai05/simple-quiz/",
      featured: true,
    },
    {
      id: 4,
      title: "2048 Game",
      description:
        "A classic 2048 game built with HTML, CSS and JavaScript. It includes features like tile merging, scoring, and responsive design, allowing players to enjoy the game on the desktop",
      image: "/Portfolio/2048-game.jpg",
      technologies: ["HTML", "CSS", "Java Script"],
      liveUrl: "https://nithyasai05.github.io/2048---Game/",
      githubUrl: "https://github.com/nithyasai05/2048---Game",
      featured: true,
    },
    {
      id: 5,
      title: "To-Do App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "/Portfolio/to-do.jpg",
      technologies: ["HTML", "CSS", "Java Script", "Local Storage"],
      liveUrl: "https://nithyasai05.github.io/To-Do-TaskManager/",
      githubUrl: "https://github.com/nithyasai05/To-Do-TaskManager",
      featured: true,
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
      image:
        "/Portfolio/weather-dashboard.jpg",
      technologies: ["HTML", "CSS", "Java Script", "Weather API", "Geolocation"],
      liveUrl: "https://nithyasai05.github.io/Weather-Forecast/",
      githubUrl: "https://github.com/nithyasai05/Weather-Forecast",
      featured: true,
    },
    {
      id: 7,
      title: "Movie Search App",
      description:
        "Built a dynamic movie search app with React, TypeScript, and Tailwind CSS, integrating the OMDB API for real-time movie details. Features include instant search, pagination, infinite scroll, and a responsive, modern UI with robust error handling.",
      image:
        "/Portfolio/movie-search.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML", "Movie API"],
      liveUrl: "https://moviez-ns.netlify.app/",
      githubUrl: "https://github.com/nithyasai05/Movie-Search-App/",
      featured: false,
    },
    {
      id: 8,
      title: "Expense Finance Tracker",
      description:
        "A modern group expense tracker built with JavaScript, HTML, and CSS, featuring a dynamic split calculator, intuitive UI, and persistent storage using Local Storage.",
      image:
        "/Portfolio/expense-finance-tracker.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML", "Movie API"],
      liveUrl: "https://nithyasai05.github.io/Expense-Finance-Tracker/",
      githubUrl: "https://github.com/nithyasai05/Expense-Finance-Tracker",
      featured: false,
    },
    {
      id: 9,
      title: "Pocket Calendar",
      description:
        "A responsive pocket calendar website built with HTML and CSS, allowing users to navigate months and view the current date with a clean, interactive UI.",
      image:
        "/Portfolio/pocket-calendar.jpg",
      technologies: ["HTML", "CSS", "Java Script", "Local Storage"],
      liveUrl: "https://nithyasai05.github.io/calendar/",
      githubUrl: "https://github.com/nithyasai05/calendar",
      featured: false,
    },
    {
      id: 10,
      title: "Tic Tac Toe",
      description:
        "A classic two-player strategy game where players take turns marking Xs and Os to align three in a row.",
      image:
        "/Portfolio/tic-tac-toe.jpg",
      technologies: ["HTML", "CSS", "Java Script", "Flask (Python)"],
      liveUrl: "https://nithyasai05.github.io/Tic-Tac-Toe-py/",
      githubUrl: "https://github.com/nithyasai05/Tic-Tac-Toe-py",
      featured: false,
    }

  ];

  const ProjectCard = ({ project, delay = 0 }) => (
    <Reveal as="article" className="glass-card group flex h-full flex-col overflow-hidden rounded-[1.8rem] transition-all duration-300 hover:-translate-y-2" delay={delay} variant="scale">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"></div>
        <div className="absolute inset-x-4 bottom-4 flex justify-end opacity-0 translate-y-3 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="flex gap-2 rounded-2xl bg-slate-950/55 px-3 py-2 backdrop-blur-md">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/90 p-2 text-slate-800 transition-colors hover:bg-white"
              aria-label={`Open ${project.title} live`}
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/90 p-2 text-slate-800 transition-colors hover:bg-white"
              aria-label={`Open ${project.title} source`}
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-5 leading-7 text-sm sm:text-base flex-1">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="pill-tag px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </Reveal>
  );

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-transparent transition-colors duration-300">
      <div className="section-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="text-center mb-16">
          <span className="section-kicker mb-4">Projects</span>
          <h2 className="section-title text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="section-copy text-base sm:text-xl max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 90} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <Reveal className="text-center mb-12" delay={60}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects
              </h3>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 90} />
              ))}
            </div>
          </>
        )}

        <Reveal className="text-center mt-12" delay={100}>
          <a
            href="https://github.com/nithyasai05/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl border border-slate-200 bg-white/80 px-6 py-3 font-semibold text-slate-700 shadow-lg shadow-slate-200/30 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:shadow-black/20 dark:hover:bg-slate-900"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
