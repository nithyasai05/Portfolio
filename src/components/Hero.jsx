import React, { useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, X, Download, Sparkles, MapPin } from "lucide-react";
import Reveal from './Reveal';

const Hero = () => {
  // State to manage the profile picture download pop-up
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/Grandhi_Nithyasai_Resume.pdf";
    link.download = "Grandhi_Nithyasai_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle profile picture download
  const downloadProfilePic = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/latest.jpg";
    link.download = "Grandhi_Nithyasai_Profile.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloadModal(false); // Close modal after download
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 bg-transparent px-0 transition-colors duration-300"
    >
      <div className="section-shell mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl box-border items-start px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 lg:items-center lg:px-8 lg:pb-4 mobile-tight">
        <div className="hero-grid hero-stage w-full gap-6 sm:gap-8 lg:gap-10">
          <Reveal className="order-2 mx-auto w-full max-w-2xl text-center lg:order-1 lg:mx-0 lg:max-w-none lg:text-left" variant="left">
            <h1 className="section-title text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Building responsive interfaces with
              <span className="block bg-gradient-to-r from-blue-600 via-sky-500 to-teal-500 bg-clip-text text-transparent">
                clarity, motion, and polish.
              </span>
            </h1>

            <p className="section-copy mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-8 lg:mx-0">
              I'm Grandhi Nithyasai, an aspiring Full Stack Developer dedicated to transforming ideas into efficient, user-focused, and impactful digital experiences.              
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 sm:w-auto sm:px-7"
              >
                Get In Touch
              </button>

              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-lg shadow-slate-200/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:shadow-black/20 dark:hover:bg-slate-900 sm:w-auto sm:px-7"
              >
                View My Work
              </button>

              <button
                onClick={downloadResume}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 sm:w-auto sm:px-7"
              >
                Download Resume
              </button>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-4 lg:justify-start">
              <a
                href="https://github.com/nithyasai05"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-3 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/nithyasai05/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-3 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
              >
                <Linkedin size={22} />
              </a>

              <a
                href="mailto:nithyasai5a@gmail.com"
                className="glass-card rounded-2xl p-3 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
              >
                <Mail size={22} />
              </a>
              <div className="glass-card flex w-full max-w-[15rem] items-center justify-center gap-3 rounded-2xl px-3 py-2 text-left sm:w-auto sm:max-w-none sm:justify-start sm:py-1">
                <MapPin className="text-sky-500" size={18} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Based In</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToAbout}
              className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-300 sm:mt-8 lg:justify-start"
            >
              Explore portfolio
              <ArrowDown size={18} className="animate-bounce" />
            </button>
          </Reveal>

          <Reveal className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:mx-0 lg:max-w-xl lg:justify-self-end" variant="right" delay={140}>
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 sm:p-8">
              <div className="hero-orbit"></div>
              <div className="hero-orbit hero-orbit--inner"></div>
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-sky-500/20 via-blue-500/10 to-teal-400/20" />
              <div className="relative flex flex-col items-center text-center">
                <span className="section-kicker mb-5 sm:mb-6">
                  <Sparkles size={14} />
                  Welcome to My Portfolio
                </span>
                <div className="relative group cursor-pointer" onClick={() => setShowDownloadModal(true)}>
                  <img
                    src="/Portfolio/latest.jpg"
                    alt="Profile"
                    className="animate-float-gentle h-36 w-36 rounded-[2rem] object-cover border-4 border-white/70 shadow-2xl shadow-sky-500/20 transition-transform duration-300 group-hover:scale-[1.03] sm:h-48 sm:w-48 dark:border-slate-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-[2rem] bg-slate-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Download className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <p className="text-base font-bold uppercase tracking-[0.18em] text-sky-600 dark:text-sky-300 sm:text-xl sm:tracking-[0.2em]">
                    Frontend and UI Developer
                  </p>
                  <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white sm:mt-3 sm:text-xl">
                    Designing crisp, usable interfaces.
                  </p>
                </div>

                <div className="mt-5 grid w-full grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                  <div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-900/70">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Projects</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-900/70">
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Responsive</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- POP-UP MODAL --- */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-gray-100 dark:border-gray-700 transform scale-100 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Download Profile Picture?
              </h3>
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Would you like to download the high-resolution profile image?
            </p>
            
            <div className="flex space-x-3 justify-end">
              <button
                onClick={() => setShowDownloadModal(false)}
                className="px-4 py-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={downloadProfilePic}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md hover:shadow-blue-500/25 transition-all"
              >
                Yes, Download
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;