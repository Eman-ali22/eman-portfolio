import React, { useState } from 'react';
import { 
  Layers, 
  Server, 
  Cpu, 
  CheckCheck, 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  Wrench
} from 'lucide-react';
import { SkillGroup } from '../types';

interface SkillsProps {
  skills: SkillGroup[];
  darkMode?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('front') || cat.includes('web')) {
      return <Layers className="w-5 h-5 text-blue-400" />;
    }
    if (cat.includes('back') || cat.includes('database') || cat.includes('php')) {
      return <Server className="w-5 h-5 text-indigo-400" />;
    }
    if (cat.includes('ai') || cat.includes('machine') || cat.includes('research')) {
      return <BrainCircuit className="w-5 h-5 text-purple-400" />;
    }
    return <Wrench className="w-5 h-5 text-teal-400" />;
  };

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-block px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              Skills & Tech Stack
            </div>
            <h2
              id="skills-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white"
            >
              Technical Expertise &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Tooling
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Core technologies, machine learning research platforms, database management systems, and team collaboration workflows.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredSkills.map((group, groupIdx) => (
            <div
              key={groupIdx}
              id={`skill-group-${groupIdx}`}
              className="p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-xl space-y-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {group.description}
              </p>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition-colors"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                        skill.level === 'Advanced'
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : skill.level === 'Proficient'
                          ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
