/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { SkillsPage } from './pages/SkillsPage';
import { CoverLetterPage } from './pages/CoverLetterPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { ContactPage } from './pages/ContactPage';

// Helper component that automatically resets scroll position when navigating to a new page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <PhotoProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAF6F0] text-[#2C2424] selection:bg-[#F3C4D1] selection:text-[#4A1D2B] font-sans antialiased flex flex-col justify-between">
          {/* Top Persistent Navigation */}
          <Navbar />

          {/* Dedicated Route Pages */}
          <main className="grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/formacion" element={<EducationPage />} />
              <Route path="/experiencia" element={<ExperiencePage />} />
              <Route path="/habilidades" element={<SkillsPage />} />
              <Route path="/cartas" element={<CoverLetterPage />} />
              <Route path="/curriculum" element={<CurriculumPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </HashRouter>
    </PhotoProvider>
  );
}
