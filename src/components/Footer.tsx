import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUp, Mail, MapPin, Car } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF4EC] border-t border-[#EAE0D2] py-12 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-[#EFE4D6]/80">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-5 space-y-2 text-center md:text-left">
            <span className="font-serif text-xl font-semibold text-[#2D2526] block">
              {PROFILE_DATA.fullName}
            </span>
            <p className="text-xs text-[#7B6A6E] leading-relaxed">
              Especialista en administración de empresas de distribución, gestión documental y comercial,
              con capacitación avanzada de 120 horas en Inteligencia Artificial aplicada.
            </p>
            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3 text-xs text-[#8A797D]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B54564]" />
                <span>Torrijos (Toledo)</span>
              </span>
              <span className="flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-[#B54564]" />
                <span>Carnet B & Coche Propio</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E3B5A] block mb-3">
              Páginas del Sitio
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Inicio / Perfil
              </Link>
              <Link to="/formacion" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Formación & IA (120h)
              </Link>
              <Link to="/experiencia" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Experiencia Laboral
              </Link>
              <Link to="/habilidades" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Competencias
              </Link>
              <Link to="/cartas" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Generador de Cartas
              </Link>
              <Link to="/curriculum" className="text-[#5E4E51] hover:text-[#9E3B5A] transition-colors">
                Currículum Oficial
              </Link>
            </div>
          </div>

          {/* Col 3: Direct contact action */}
          <div className="md:col-span-3 text-center md:text-right space-y-3">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFDF9] hover:bg-[#FBE8EC] text-[#9E3B5A] border border-[#E8DACB] hover:border-[#F2CAD5] rounded-xl text-xs font-semibold shadow-2xs transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contactar con Ana María</span>
            </Link>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#7A696D] hover:text-[#9E3B5A] transition-colors cursor-pointer"
              >
                <span>Subir al inicio</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#8C7A7E] text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} {PROFILE_DATA.fullName}. Todos los derechos reservados.
          </span>
          <span className="flex items-center gap-1">
            <span>Fondo vainilla claro & rosa pastel</span>
            <Sparkles className="w-3 h-3 text-[#B54564]" />
          </span>
        </div>

      </div>
    </footer>
  );
};
