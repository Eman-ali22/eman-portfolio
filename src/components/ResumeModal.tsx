import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import { PortfolioData } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  data,
  onClose,
}) => {
  if (!isOpen) return null;

  const { profile, experiences, education, skills, projects } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl rounded-3xl bg-[#0d0d12] border border-white/10 shadow-2xl overflow-hidden my-6 text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar with Frosted Glass look */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 text-xs font-semibold text-gray-300">
              Curriculum Vitae — {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 bg-[#0e0e16]">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white uppercase">
                {profile.name}
              </h1>
              <div className="text-base font-semibold text-blue-400 mt-1">
                {profile.title}
              </div>
              <p className="text-xs text-gray-400 mt-2 max-w-xl leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-gray-300 sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{profile.address || profile.location}</span>
              </div>
              {profile.socials && profile.socials.length > 0 && (
                <div className="flex flex-wrap items-center sm:justify-end gap-2 pt-1 text-[11px] text-blue-400">
                  {profile.socials.filter(s => s.platform !== 'email').map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:text-blue-300"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              About & Summary
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="text-base font-bold text-white">
                      {exp.role} · <span className="text-blue-300 font-semibold">{exp.company}</span>
                    </div>
                    <div className="text-xs font-medium text-gray-400">
                      {exp.period} | {exp.location}
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-1 pt-1">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                          <span className="text-blue-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.technologies.map((t, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-gray-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-teal-400 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Education & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {education.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-sm font-bold text-white mb-1">
                    {edu.degree}
                  </div>
                  <div className="text-xs font-medium text-teal-400 mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-gray-400 mb-2">
                    {edu.period}
                  </div>
                  {edu.specialization && (
                    <div className="text-[11px] text-purple-300">
                      {edu.specialization}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Core Technical Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-sm font-bold text-white mb-1">
                    {proj.title}
                  </div>
                  <p className="text-xs text-gray-300 mb-2 leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((group, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-300">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
