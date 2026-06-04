import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import Reveal from './Reveal';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-tight">
        <Reveal className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr] md:items-start">
          <div>
            <button
              onClick={scrollToTop}
              className="text-left text-2xl font-bold text-sky-300 hover:text-sky-200 transition-colors mb-4"
            >
              GRANDHI NITHYASAI
            </button>
            <p className="max-w-md text-slate-400 leading-8">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences that make a difference.
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-400 hover:text-sky-300 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/nithyasai05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl bg-slate-900 p-3 transition-colors hover:bg-slate-800"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/grandhi-nithyasai-8a9052304/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-2xl bg-slate-900 p-3 transition-colors hover:bg-slate-800"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:nithyasai5a@gmail.com"
                className="rounded-2xl bg-slate-900 p-3 transition-colors hover:bg-slate-800"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="border-t border-slate-800 mt-12 pt-8 text-center" delay={120}>
          <p className="text-slate-400 flex flex-col items-center justify-center gap-2 sm:flex-row">
            Made with <Heart className="mx-2 text-red-500" size={16} /> by Grandhi Nithyasai
            <span className="hidden sm:inline mx-2">•</span>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;