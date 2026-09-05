import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { Experience, Education } from '../types';

interface ExperienceProps {
  experiences: Experience[];
  education?: Education[];
  darkMode?: boolean;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({
  experiences,
  education = [],
}) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest">
              Career & Credentials
            </div>
            <h2
              id="experience-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Professional Background
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
              Teaching, software engineering, business development, and graduate machine learning research.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <button
              id="tab-experience-btn"
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience ({experiences.length})</span>
            </button>
            {education.length > 0 && (
              <button
                id="tab-education-btn"
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'education'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Education ({education.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-10 pb-4">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                id={`experience-item-${idx}`}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Indicator Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-[#0d0d12] bg-blue-500 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-xl space-y-4">
                  {/* Meta Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-blue-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium bg-white/5 border border-white/10 text-gray-300">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2 pt-1">
                      {exp.achievements.map((item, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-gray-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Badges */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Timeline */}
        {activeTab === 'education' && (
          <div className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-10 pb-4">
            {education.map((edu, idx) => (
              <div
                key={edu.id}
                id={`education-item-${idx}`}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Indicator Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-[#0d0d12] bg-purple-500 shadow-lg shadow-purple-500/50 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-sm font-semibold text-purple-400">
                        {edu.institution}
                      </div>
                    </div>

                    <div className="text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-medium bg-white/5 border border-white/10 text-gray-300">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.specialization && (
                    <div className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {edu.specialization}
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
