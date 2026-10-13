import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CvModal } from './components/CvModal';
import { AssetUploadGuideModal } from './components/AssetUploadGuideModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isUploadGuideOpen, setIsUploadGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 4-Metric Verified Achievement Highlights */}
        <Achievements />

        {/* About & Engineering Pillars */}
        <About />

        {/* Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* Featured Projects & Case Studies */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenUploadGuide={() => setIsUploadGuideOpen(true)}
        />

        {/* Technical Capabilities Matrix */}
        <Skills />

        {/* Contact & Availability */}
        <Contact onOpenCvModal={() => setIsCvModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenUploadGuide={() => setIsUploadGuideOpen(true)}
      />

      {/* Deep-Dive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenUploadGuide={() => {
          setSelectedProject(null);
          setIsUploadGuideOpen(true);
        }}
      />

      {/* Interactive Curriculum Vitae & Printable Sheet Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onOpenUploadGuide={() => {
          setIsCvModalOpen(false);
          setIsUploadGuideOpen(true);
        }}
      />

      {/* Customization & Deployment Handbook Modal */}
      <AssetUploadGuideModal
        isOpen={isUploadGuideOpen}
        onClose={() => setIsUploadGuideOpen(false)}
      />
    </div>
  );
}
