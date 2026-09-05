import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  TrendingUp, 
  Sparkles,
  Info 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  darkMode?: boolean;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories: string[] = ['All', ...Array.from(new Set<string>(projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-block px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              Selected Portfolio Projects
            </div>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Featured Engineering &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Web Systems
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Real-world web platforms, final year project developments, and machine learning research workflows.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 flex flex-col group shadow-2xl"
            >
              {/* Project Image Box with Frosted Glass Gradient Overlay */}
              <div 
                className="relative h-64 w-full overflow-hidden bg-[#0d0d12] cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-[#0d0d12]/50 to-transparent" />
                
                {/* Category & Badge */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-blue-400 border border-white/10 uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-md uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </div>

                {/* Impact Metric Pill */}
                {project.impactMetric && (
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-black/70 backdrop-blur-md text-gray-200 border border-white/10">
                      <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.impactMetric}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-xl font-bold text-white tracking-tight cursor-pointer hover:text-blue-400 transition-colors"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mt-2">
                    {project.summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs sm:text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4 text-blue-400" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="View Code Repository"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 flex items-center gap-1 transition-all"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
