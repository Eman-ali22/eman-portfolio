/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/defaultPortfolio';
import { PortfolioData, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { EditorModal } from './components/EditorModal';

const STORAGE_KEY = 'portfolio_custom_data_v4';

export default function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return initialPortfolioData;
  });

  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Sync title with active profile name
  useEffect(() => {
    if (data.profile.name) {
      document.title = `${data.profile.name} — ${data.profile.title}`;
    }
  }, [data.profile.name, data.profile.title]);

  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {
      // ignore
    }
  };

  const handleResetData = () => {
    setData(initialPortfolioData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div
      id="portfolio-root"
      className="relative min-h-screen bg-[#0d0d12] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden"
    >
      {/* Ambient Frosted Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top-left blue glow */}
        <div className="absolute top-[-140px] left-[-120px] w-[580px] h-[580px] bg-blue-600/20 rounded-full blur-[140px]" />
        
        {/* Top-right subtle cyan glow */}
        <div className="absolute top-[20%] right-[-100px] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[120px]" />
        
        {/* Mid-left indigo glow */}
        <div className="absolute top-[50%] left-[-100px] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[130px]" />

        {/* Bottom-right purple glow */}
        <div className="absolute bottom-[-120px] right-[-120px] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]" />
      </div>

      {/* Navigation */}
      <Navbar
        profile={data.profile}
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          profile={data.profile}
          darkMode={darkMode}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About
          profile={data.profile}
          darkMode={darkMode}
        />

        <Skills
          skills={data.skills}
          darkMode={darkMode}
        />

        <Projects
          projects={data.projects}
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ExperienceSection
          experiences={data.experiences}
          education={data.education}
          darkMode={darkMode}
        />

        <Contact
          profile={data.profile}
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={data.profile}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Modals */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          darkMode={darkMode}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {isResumeOpen && (
        <ResumeModal
          data={data}
          onClose={() => setIsResumeOpen(false)}
        />
      )}

      {isEditorOpen && (
        <EditorModal
          data={data}
          onSave={handleSaveData}
          onReset={handleResetData}
          onClose={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
}
