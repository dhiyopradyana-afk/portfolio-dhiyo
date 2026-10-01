/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { personalInfo } from './data/portfolioData';
import { Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';

export default function App() {
  const [photo, setPhoto] = useState<string>(() => {
    return localStorage.getItem('dhiyo_user_photo') || personalInfo.defaultPortrait;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const handleSavePhoto = (newPhoto: string) => {
    setPhoto(newPhoto);
    try {
      localStorage.setItem('dhiyo_user_photo', newPhoto);
    } catch {
      // LocalStorage quota fallback
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D11] text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* Top Navigation */}
      <Navbar onOpenPhotoModal={() => setIsPhotoModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero
          photo={photo}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        />
        <About />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Profile Photo Customizer Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={photo}
        defaultPhoto={personalInfo.defaultPortrait}
        onSavePhoto={handleSavePhoto}
      />
    </div>
  );
}
