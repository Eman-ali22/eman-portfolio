import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Edit3, 
  FileText, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface NavbarProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenEditor: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenEditor,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nameParts = profile.name.trim().split(' ');
  const firstName = nameParts[0] || 'DEV';
  const lastName = nameParts.slice(1).join(' ') || 'FOLIO';

  return (
    <header
      id="navbar-header"
      className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="brand-logo-link"
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#hero');
          }}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="text-lg sm:text-xl font-bold tracking-tighter text-white">
            {firstName.toUpperCase()}<span className="text-blue-400">{lastName ? lastName.toUpperCase() : ''}</span>
          </div>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-400"></span>
        </a>

        {/* Desktop Nav */}
        <nav id="desktop-nav" aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                onClick={() => scrollTo(link.href)}
                className={`px-3.5 py-1.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume View */}
          <button
            id="view-resume-nav-btn"
            onClick={onOpenResume}
            className="bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-white transition-all inline-flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-blue-300" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </button>

          {/* Customize / Live Editor */}
          <button
            id="open-editor-nav-btn"
            onClick={onOpenEditor}
            className="bg-blue-600 hover:bg-blue-500 border border-blue-400/30 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-blue-500/25 inline-flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
            <span className="sm:hidden">Edit</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden mt-2 p-4 bg-[#0d0d12]/95 backdrop-blur-2xl border border-white/10 rounded-2xl space-y-1 shadow-2xl"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-3 py-2 rounded-xl text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium bg-white/10 text-white border border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
