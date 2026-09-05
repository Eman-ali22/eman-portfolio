import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Sparkles } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenEditor: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenEditor }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="portfolio-footer"
      className="relative z-10 border-t border-white/5 bg-[#0d0d12]/80 backdrop-blur-md text-gray-400 text-xs py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-white font-bold tracking-tight text-sm">
              <span>{profile.name.toUpperCase()}</span>
              <span className="text-blue-400">/</span>
              <span className="text-xs font-normal text-gray-400">PORTFOLIO</span>
            </div>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div>
              &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 tracking-wider uppercase text-[11px] font-medium">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                id={`footer-social-${social.platform}`}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              id="footer-customize-btn"
              onClick={onOpenEditor}
              className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all text-xs font-medium inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span>Customize Portfolio</span>
            </button>

            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              title="Scroll to top"
              aria-label="Scroll to top"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
