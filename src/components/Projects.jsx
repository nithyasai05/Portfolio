import React from "react";
import { ExternalLink, Github } from "lucide-react";

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

  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-md overflow-hidden hover:shadow-2xl dark:hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 flex space-x-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-gray-700 p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors"
            >
              <ExternalLink size={16} className="text-gray-700 dark:text-white" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 dark:bg-gray-700 p-2 rounded-full hover:bg-white dark:hover:bg-gray-600 transition-colors"
            >
              <Github size={16} className="text-gray-700 dark:text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                More Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/nithyasai05/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
