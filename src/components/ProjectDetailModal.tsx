import React from 'react';
import { 
  X, 
  ArrowUpRight, 
  Github, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  darkMode?: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal"
        className="relative w-full max-w-3xl rounded-3xl border border-white/10 my-8 overflow-hidden shadow-2xl bg-[#0e0e15] text-gray-200 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with frosted gradient */}
        <div className="relative h-60 sm:h-72 w-full bg-[#0d0d12] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e15] via-[#0e0e15]/60 to-transparent" />
          
          {/* Close button */}
          <button
            id="close-project-detail-btn"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 hover:bg-black/90 border border-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating Title & Category */}
          <div className="absolute bottom-5 left-6 right-6">
            <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold mb-2 uppercase tracking-wider backdrop-blur-md">
              {project.category}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Impact Metric Banner */}
          {project.impactMetric && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-200">
              <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-xs sm:text-sm font-semibold">
                Impact Metric: <span className="font-normal text-white">{project.impactMetric}</span>
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              {project.description || project.summary}
            </p>
          </div>

          {/* Architectural Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Key Deliverables & Architectural Decisions
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* External Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 items-center">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 inline-flex items-center gap-2 transition-all"
              >
                <span>Live Interactive Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white inline-flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
