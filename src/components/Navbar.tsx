import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, Printer, Mail, Menu, X, FileText, Award, Briefcase, Layers, User } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

import { useProfilePhoto } from '../context/PhotoContext';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const location = useLocation();
  const { photoSrc } = useProfilePhoto();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 text-xs lg:text-sm font-medium rounded-xl transition-all ${
      isActive
        ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold border border-[#F2CAD5] shadow-2xs'
        : 'text-[#4A3E40] hover:text-[#9E3B5A] hover:bg-[#FDF0F3]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#EFE4D6]/80 py-3'
          : 'bg-[#FAF6F0]/80 backdrop-blur-xs py-4 border-b border-[#EFE4D6]/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo linking to home */}
        <Link to="/" className="group flex items-center gap-2.5 text-left">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F0C1CD] p-0.5 bg-gradient-to-tr from-[#FBE8EC] to-[#F5BAC9] shadow-2xs group-hover:scale-105 transition-transform shrink-0">
            <img
              src={photoSrc}
              alt={PROFILE_DATA.fullName}
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div>
            <span className="block font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
              Ana Carrillo
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-[#8A797C] font-medium">
              Administración · IA 120h · Ventas
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
          <NavLink to="/" end className={navLinkClass}>
            Inicio
          </NavLink>

          <NavLink to="/formacion" className={navLinkClass}>
            <span className="flex items-center gap-1.5">
              <span>Formación</span>
              <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-1.5 py-0.2 rounded-full font-bold border border-[#F2CAD5]">
                IA 120h
              </span>
            </span>
          </NavLink>

          <NavLink to="/experiencia" className={navLinkClass}>
            Experiencia
          </NavLink>

          <NavLink to="/habilidades" className={navLinkClass}>
            Competencias
          </NavLink>

          <NavLink to="/cartas" className={navLinkClass}>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C44D6E]" />
              <span>Cartas IA</span>
            </span>
          </NavLink>

          <NavLink to="/contacto" className={navLinkClass}>
            Contacto
          </NavLink>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            to="/curriculum"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#574447] bg-[#FFFDF9] hover:bg-[#F9F0E6] border border-[#E8DCCF] rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-95"
            title="Ver currículum oficial en formato A4 para imprimir"
          >
            <Printer className="w-3.5 h-3.5 text-[#9E3B5A]" />
            <span>Ver CV Oficial</span>
          </Link>

          <button
            onClick={handleCopyEmail}
            title="Copiar correo de Ana María Carrillo"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{copiedEmail ? '¡Email Copiado!' : 'Contactar'}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/curriculum"
            className="p-1.5 text-[#574447] bg-[#FFFDF9] border border-[#E8DCCF] rounded-lg"
            title="Ver CV Oficial"
          >
            <Printer className="w-4 h-4 text-[#9E3B5A]" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4A3E40] hover:text-[#9E3B5A] rounded-lg focus:outline-hidden"
            aria-label="Menú principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDFB] border-b border-[#EFE4D6] px-4 pt-3 pb-5 space-y-1.5 animate-in fade-in duration-200">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <User className="w-4 h-4 text-[#9E3B5A]" />
            <span>Inicio / Perfil</span>
          </NavLink>

          <NavLink
            to="/formacion"
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#9E3B5A]" />
              <span>Formación Académica & IA</span>
            </div>
            <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-2 py-0.5 rounded-full font-bold">
              120 Horas
            </span>
          </NavLink>

          <NavLink
            to="/experiencia"
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <Briefcase className="w-4 h-4 text-[#9E3B5A]" />
            <span>Experiencia Laboral</span>
          </NavLink>

          <NavLink
            to="/habilidades"
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <Layers className="w-4 h-4 text-[#9E3B5A]" />
            <span>Competencias & Ofimática</span>
          </NavLink>

          <NavLink
            to="/cartas"
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <Sparkles className="w-4 h-4 text-[#C44D6E]" />
            <span>Generador de Cartas de Presentación</span>
          </NavLink>

          <NavLink
            to="/curriculum"
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <FileText className="w-4 h-4 text-[#9E3B5A]" />
            <span>Currículum Vitae Oficial (A4)</span>
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-xl ${
                isActive ? 'bg-[#FBE5EB] text-[#8F2743] font-semibold' : 'text-[#4A3E40] hover:bg-[#FDF0F3]'
              }`
            }
          >
            <Mail className="w-4 h-4 text-[#9E3B5A]" />
            <span>Contacto Directo</span>
          </NavLink>

          <div className="pt-2 border-t border-[#EFE4D6]/60 flex flex-col gap-2">
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-gradient-to-r from-[#B54564] to-[#993450] rounded-xl flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{copiedEmail ? '¡Copiado!' : 'Copiar: anamariacarrillodelarosa@gmail.com'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
