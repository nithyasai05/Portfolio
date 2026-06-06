import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");

    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      setDarkMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  }, []);

  // Theme switch
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Active Section Detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const headerHeight = 80; // approx fixed header height in px
      const scrollMid = window.scrollY + headerHeight + 100;

      let current = "home";
      sections.forEach((section) => {
        if (section.offsetTop <= scrollMid) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 dark:bg-slate-950/20 backdrop-blur-2xl border-b border-white/20 dark:border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="inline-flex items-center gap-3"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white font-extrabold shadow-lg">
              NS
            </span>

            <span className="hidden sm:block text-left">
              <span className="block text-xs uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
                Portfolio
              </span>

              <span className="block text-lg font-bold text-slate-900 dark:text-white">
                Grandhi Nithyasai
              </span>
            </span>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/20 bg-white/10 dark:bg-slate-900/20 backdrop-blur-2xl px-3 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.5)] scale-105"
                    : "text-slate-700 hover:text-sky-600 hover:bg-white/20 dark:text-slate-200 dark:hover:text-sky-300 dark:hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2.5 rounded-full bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/20 transition-all"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-2xl border border-white/20 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mb-4 rounded-3xl border border-white/20 bg-white/10 dark:bg-slate-950/20 backdrop-blur-2xl p-3">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white/20 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-sky-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/20 dark:bg-white/10 font-semibold"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;