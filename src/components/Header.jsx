import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('portfolio-theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      return;
    }

    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    window.localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/8 dark:bg-slate-950/18 backdrop-blur-2xl shadow-lg shadow-slate-900/5 border-b border-white/20 dark:border-white/10'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <div className="flex justify-between items-center py-3 sm:py-4 gap-3">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-3 text-left"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-teal-400 text-base font-extrabold text-white shadow-lg shadow-blue-500/20">
              NS
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold uppercase tracking-[0.35em] text-sky-600 dark:text-sky-300">
                Portfolio
              </span>
              <span className="block text-lg font-bold text-slate-900 dark:text-white">
                Grandhi Nithyasai
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 shadow-lg shadow-slate-200/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/20 dark:shadow-black/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-white/25 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-sky-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 rounded-full bg-white/20 p-2.5 text-slate-800 transition-colors hover:bg-white/35 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
              title="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden rounded-2xl border border-white/25 bg-white/10 p-3 text-slate-700 shadow-lg shadow-slate-200/10 backdrop-blur-2xl transition-colors hover:text-sky-600 dark:border-white/10 dark:bg-slate-950/20 dark:text-slate-200 dark:shadow-black/20 dark:hover:text-sky-300"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mb-3 rounded-3xl border border-white/25 bg-white/12 p-3 shadow-2xl shadow-slate-200/10 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/24 dark:shadow-black/30">
            <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full rounded-2xl px-4 py-3 text-left text-base font-semibold text-slate-700 transition-colors hover:bg-white/25 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-sky-300"
              >
                {item.label}
              </button>
            ))}
            </div>
            <div className="pt-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white/20 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white/30 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/15"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
