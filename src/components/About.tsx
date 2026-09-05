import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Terminal, 
  Compass, 
  CheckCircle2,
  Code2,
  MapPin
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface AboutProps {
  profile: PortfolioProfile;
  darkMode?: boolean;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      title: "AI & Machine Learning",
      description: "Developing predictive modeling algorithms, data preprocessing pipelines, and exploratory research in Google Colab and Jupyter.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-teal-400" />,
      title: "Full-Stack Web Engineering",
      description: "Engineering practical, user-centered web applications with PHP, SQL, JavaScript, Node.js, and responsive frontend design.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      title: "Academic & Tech Leadership",
      description: "Lecturing in Computer Science, mentoring students, leading project lifecycles, and managing client sales relations.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              About Me & Research
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Transforming complex problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">intelligent, impactful</span> solutions.
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>{profile.bio}</p>
              {profile.secondaryBio && <p className="text-gray-400">{profile.secondaryBio}</p>}
            </div>

            {/* Core Pillars */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Core Competency Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all space-y-2.5"
                  >
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 w-fit">
                      {pillar.icon}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {pillar.title}
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">
                      {pillar.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Frosted Glass Profile Card */}
          <div className="lg:col-span-5">
            <div
              id="about-profile-card"
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden"
            >
              {/* Header with Monogram & Verified Badge */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-2xl font-black text-white shadow-xl shadow-blue-500/20 border border-white/20">
                  EA
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white tracking-tight truncate">
                      {profile.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-blue-400 font-medium mt-0.5">
                    {profile.title}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{profile.location}</span>
                  </p>
                </div>
              </div>

              {/* Data Table */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-gray-400">
                  <span>Location</span>
                  <span className="text-white font-medium text-right">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Address</span>
                  <span className="text-white font-medium text-right text-xs max-w-[210px] truncate">{profile.address}</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Phone</span>
                  <a href={`tel:${profile.phone}`} className="text-blue-400 hover:text-blue-300 font-medium">
                    {profile.phone}
                  </a>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Degree Specialization</span>
                  <span className="text-white font-medium">MS CS (ML / AI)</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Key Technologies</span>
                  <span className="text-white font-medium">Python, PHP, SQL, JS</span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span>Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue-400 hover:text-blue-300 font-medium truncate max-w-[190px]"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 border border-blue-500/30 text-center text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
                >
                  <Compass className="w-4 h-4 text-white" />
                  <span>Contact & Collaboration</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
