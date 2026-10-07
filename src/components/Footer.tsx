import React from 'react';
import { Sparkles, Heart, ArrowUp } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF4EC] border-t border-[#EAE0D2] py-12 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        <div>
          <span className="font-serif text-lg font-semibold text-[#2D2526] block">
            {PROFILE_DATA.fullName}
          </span>
          <p className="text-xs text-[#7B6A6E] mt-0.5">
            Administración · Especialización en Inteligencia Artificial (120h) · Ventas y Distribución
          </p>
          <p className="text-[11px] text-[#9A878B] mt-1">
            Torrijos, Toledo · Carnet B y vehículo propio · Incorporación Inmediata
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-[#FFFDF9] hover:bg-[#FBE8EC] text-[#7A696D] hover:text-[#9E3B5A] border border-[#E5D7C7] hover:border-[#F2CAD5] rounded-xl transition-all shadow-2xs cursor-pointer flex items-center gap-1.5 text-xs font-medium"
            title="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-[#EFE4D6]/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#8C7A7E]">
        <span>
          © {new Date().getFullYear()} Ana María Carrillo De La Rosa. Todos los derechos reservados.
        </span>
        <span className="flex items-center gap-1">
          <span>Diseño elegante vainilla & rosa pastel</span>
          <Sparkles className="w-3 h-3 text-[#B54564]" />
        </span>
      </div>
    </footer>
  );
};
