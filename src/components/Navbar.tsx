import React, { useState, useEffect } from 'react';
import { Sparkles, Printer, Mail, Menu, X, FileText, Award, Briefcase, UserCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface NavbarProps {
  onOpenPrintModal: () => void;
  onOpenLetterGenerator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPrintModal, onOpenLetterGenerator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#FAF6F0]/90 backdrop-blur-md shadow-sm border-b border-[#EFE4D6]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#inicio" className="group flex items-center gap-2.5 text-left">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FBE8EC] to-[#F5BAC9] flex items-center justify-center text-[#9E3B5A] font-serif font-bold text-lg shadow-xs group-hover:scale-105 transition-transform border border-[#F0C1CD]">
            A
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
              Ana Carrillo
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#8A797C] font-medium">
              Administración · IA 120h · Comercial
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <a
            href="#perfil"
            className="px-3 py-1.5 text-sm font-medium text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3] rounded-md transition-colors"
          >
            Perfil
          </a>
          <a
            href="#formacion"
            className="px-3 py-1.5 text-sm font-medium text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3] rounded-md transition-colors flex items-center gap-1"
          >
            <span>Formación & IA</span>
            <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-1.5 py-0.5 rounded-full font-semibold border border-[#F2CAD5]">
              120h
            </span>
          </a>
          <a
            href="#experiencia"
            className="px-3 py-1.5 text-sm font-medium text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3] rounded-md transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#habilidades"
            className="px-3 py-1.5 text-sm font-medium text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3] rounded-md transition-colors"
          >
            Competencias
          </a>
          <a
            href="#cartas"
            onClick={(e) => {
              e.preventDefault();
              onOpenLetterGenerator();
              const el = document.getElementById('cartas');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-3 py-1.5 text-sm font-medium text-[#8F2E4A] hover:text-[#732139] bg-[#FDECF0] hover:bg-[#FAD9E2] rounded-md transition-colors flex items-center gap-1.5 border border-[#F6CBD6]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Generador Cartas</span>
          </a>
          <a
            href="#contacto"
            className="px-3 py-1.5 text-sm font-medium text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3] rounded-md transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenPrintModal}
            title="Ver versión imprimible o guardar en PDF"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#574447] bg-[#FFFDF9] hover:bg-[#F9F0E6] border border-[#E8DCCF] rounded-lg transition-all shadow-2xs hover:shadow-xs active:scale-95"
          >
            <Printer className="w-3.5 h-3.5 text-[#9E3B5A]" />
            <span>Imprimir CV / PDF</span>
          </button>

          <button
            onClick={handleCopyEmail}
            title="Copiar correo de Ana María Carrillo"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] rounded-lg shadow-xs hover:shadow-sm transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{copiedEmail ? '¡Email Copiado!' : 'Contactar'}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenPrintModal}
            className="p-1.5 text-[#574447] bg-[#FFFDF9] border border-[#E8DCCF] rounded-md"
            title="Imprimir CV"
          >
            <Printer className="w-4 h-4 text-[#9E3B5A]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A3E40] hover:text-[#9E3B5A] rounded-md focus:outline-hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDFB] border-b border-[#EFE4D6] px-4 pt-3 pb-5 space-y-2 animate-in fade-in duration-200">
          <a
            href="#perfil"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-[#4A3E40] hover:bg-[#FDF0F3] rounded-lg"
          >
            <UserCheck className="w-4 h-4 text-[#9E3B5A]" />
            <span>Perfil Profesional</span>
          </a>
          <a
            href="#formacion"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-[#4A3E40] hover:bg-[#FDF0F3] rounded-lg"
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#9E3B5A]" />
              <span>Formación & Curso IA</span>
            </div>
            <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-2 py-0.5 rounded-full font-semibold">
              120 Horas
            </span>
          </a>
          <a
            href="#experiencia"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-[#4A3E40] hover:bg-[#FDF0F3] rounded-lg"
          >
            <Briefcase className="w-4 h-4 text-[#9E3B5A]" />
            <span>Experiencia Laboral</span>
          </a>
          <a
            href="#cartas"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenLetterGenerator();
            }}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-[#9E3B5A] bg-[#FDECF0] rounded-lg border border-[#F6CBD6]"
          >
            <Sparkles className="w-4 h-4 text-[#C44D6E]" />
            <span>Generador de Cartas Inteligente</span>
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-[#4A3E40] hover:bg-[#FDF0F3] rounded-lg"
          >
            <Mail className="w-4 h-4 text-[#9E3B5A]" />
            <span>Contacto Directo</span>
          </a>
          <div className="pt-2 border-t border-[#EFE4D6]/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPrintModal();
              }}
              className="w-full py-2 px-3 text-xs font-semibold text-[#574447] bg-[#FAF5EE] border border-[#E8DCCF] rounded-lg flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-[#9E3B5A]" />
              <span>Ver Formato CV para Imprimir / PDF</span>
            </button>
            <button
              onClick={() => {
                handleCopyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 px-3 text-xs font-medium text-white bg-gradient-to-r from-[#B54564] to-[#993450] rounded-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{copiedEmail ? '¡Copiado!' : 'Copiar email: anamariacarrillodelarosa@gmail.com'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
