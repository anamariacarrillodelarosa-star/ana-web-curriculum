/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { CoverLetterGenerator } from './components/CoverLetterGenerator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCVModal } from './components/PrintableCVModal';

export default function App() {
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const handleScrollToGenerator = () => {
    const el = document.getElementById('cartas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2424] selection:bg-[#F3C4D1] selection:text-[#4A1D2B] font-sans antialiased">
      {/* Top Navigation */}
      <Navbar
        onOpenPrintModal={() => setIsPrintModalOpen(true)}
        onOpenLetterGenerator={handleScrollToGenerator}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          onOpenLetterGenerator={handleScrollToGenerator}
        />

        {/* Formación Académica & Curso de IA de 120 horas */}
        <EducationSection />

        {/* Experiencia Laboral */}
        <ExperienceSection />

        {/* Competencias, Habilidades & Software */}
        <SkillsSection />

        {/* Generador de Cartas de Presentación Inteligente */}
        <CoverLetterGenerator />

        {/* Contacto Directo */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / PDF Curriculum Vitae Modal */}
      <PrintableCVModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
