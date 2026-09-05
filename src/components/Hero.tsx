import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Globe, 
  MapPin, 
  Sparkles,
  FileText,
  Database,
  BookOpen
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface HeroProps {
  profile: PortfolioProfile;
  darkMode: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'kaggle':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'researchgate':
        return <BookOpen className="w-4 h-4 text-teal-400" />;
      case 'twitter':
      case 'x':
        return <Twitter className="w-4 h-4" />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill */}
            {profile.availableForWork && (
              <div
                id="availability-pill"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold mb-6 w-fit uppercase tracking-widest backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span>{profile.statusMessage || 'Available for projects'}</span>
              </div>
            )}

            {/* Headline with Glowing Gradient Accent */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-purple-400">Intelligent Web</span> & AI Systems.
            </h1>

            {/* Subtitle & Title */}
            <p
              id="hero-title"
              className="text-lg sm:text-2xl font-semibold text-blue-400 mb-4 tracking-tight"
            >
              {profile.title}
            </p>

            <p
              id="hero-tagline"
              className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl"
            >
              {profile.tagline || profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-contact-btn"
                onClick={() => scrollTo('#contact')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 sm:px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-sm sm:text-base cursor-pointer"
              >
                Get in Touch
              </button>

              <button
                id="hero-view-projects-btn"
                onClick={() => scrollTo('#projects')}
                className="bg-white/5 backdrop-blur-md border border-white/10 px-7 sm:px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-white text-sm sm:text-base flex items-center gap-2 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-blue-400" />
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="px-4 py-3.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links Row */}
            {profile.socials && profile.socials.length > 0 && (
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">
                  Connect
                </span>
                <div className="flex items-center gap-2">
                  {profile.socials.map((social) => (
                    <a
                      key={social.platform}
                      id={`hero-social-${social.platform}`}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      title={social.label}
                      aria-label={social.label}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Frosted Glass Showcase Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden group shadow-2xl">
              {/* Subtle gradient glow behind card */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-md"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-xl font-black text-white shadow-lg shadow-blue-500/20 border border-white/20">
                      EA
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">{profile.title}</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 text-xs">
                  <div className="flex justify-between text-gray-400">
                    <span>Engineering Focus</span>
                    <span className="text-white font-medium">Web Development & AI/ML</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Degree</span>
                    <span className="text-white font-medium">MS CS (ML/AI Spec.)</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Status</span>
                    <span className="text-emerald-400 font-medium">Open to Opportunities</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    <span>Open-source & enterprise tested</span>
                  </span>
                  <button
                    onClick={() => scrollTo('#about')}
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                  >
                    <span>Read bio</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Frosted Glass Container */}
        {profile.stats && profile.stats.length > 0 && (
          <div
            id="hero-stats-grid"
            className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            {profile.stats.map((stat, idx) => (
              <div key={idx} id={`stat-item-${idx}`} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
