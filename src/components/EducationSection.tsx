import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { Education } from '../types';

interface EducationSectionProps {
  education: Education[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Credentials
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Formal degrees and professional credentials spanning Artificial Intelligence, Machine Learning research, and core Computer Science foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => (
            <div
              key={edu.id || idx}
              className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-white/10 text-teal-300 border border-white/15">
                    <Calendar className="w-3 h-3 text-teal-400" />
                    {edu.period}
                  </span>
                  <span className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-teal-300 transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-blue-400 mb-3">
                  {edu.institution}
                </div>

                {edu.specialization && (
                  <div className="text-xs font-medium text-purple-300/90 bg-purple-500/10 border border-purple-500/20 rounded-xl px-3 py-1.5 mb-3 inline-block">
                    {edu.specialization}
                  </div>
                )}

                {edu.description && (
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-teal-400" /> Verified Credential
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
