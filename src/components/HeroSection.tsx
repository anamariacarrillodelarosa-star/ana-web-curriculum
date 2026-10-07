import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Car, 
  Mail, 
  FileCheck, 
  CheckCircle2, 
  Printer, 
  Camera, 
  Copy, 
  Check, 
  GraduationCap 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface HeroSectionProps {
  onOpenPrintModal: () => void;
  onOpenLetterGenerator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPrintModal,
  onOpenLetterGenerator
}) => {
  const [copied, setCopied] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(PROFILE_DATA.photoUrl);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setPhotoSrc(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FCEBEF]/60 via-[#FDF5E8]/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-10 -right-20 w-80 h-80 rounded-full bg-[#FCE2E8]/40 blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-[#FBF0DD]/50 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Portrait & Quick badges */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Outer delicate frame with soft rose / vanilla halo */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#FAD8E0] via-[#FFFBF5] to-[#F7C6D2] shadow-lg shadow-[#E8B8C4]/20 border border-[#F1D0D9]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF3EC] border-2 border-white shadow-inner relative">
                  <img
                    src={photoSrc}
                    alt={PROFILE_DATA.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if public photo isn't available
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle hover overlay to change photo if user wants */}
                  <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 bg-[#2D2526]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer backdrop-blur-[2px]"
                    title="Haga clic para cambiar o subir otra foto si lo desea"
                  >
                    <Camera className="w-6 h-6 mb-1 drop-shadow" />
                    <span className="text-[11px] font-medium tracking-wide">Cambiar Foto</span>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleCustomPhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#FFFDF9] border border-[#F2CAD5] shadow-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] font-medium text-[#4A3E40]">
                  {PROFILE_DATA.availability}
                </span>
              </div>
            </div>

            {/* Quick Contact & Location Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF9] rounded-lg border border-[#EFE4D6] text-xs font-medium text-[#5E4E51]">
                <MapPin className="w-3.5 h-3.5 text-[#C44D6E]" />
                <span>Torrijos (Toledo)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF9] rounded-lg border border-[#EFE4D6] text-xs font-medium text-[#5E4E51]">
                <Car className="w-3.5 h-3.5 text-[#C44D6E]" />
                <span>Carnet B & Coche Propio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Content & Pitch */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Super Header / AI badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452]">
              <Sparkles className="w-3.5 h-3.5 text-[#C44D6E]" />
              <span>Formación Avanzada en IA (120 Horas) + FPGM Administración</span>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D2526] leading-tight">
                {PROFILE_DATA.fullName}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-serif italic text-[#8B3B52]">
                Especialista en Administración, Gestión Comercial e Innovación con IA
              </p>
            </div>

            <p className="text-[#594B4E] leading-relaxed text-sm sm:text-base font-light">
              Profesional rigurosa, organizada y cercana con dilatada experiencia en
              empresas de distribución y sector asegurador. Dominio integral de facturación,
              albaranes, control de stock y atención al cliente. Mi capacitación reciente de{' '}
              <strong className="font-semibold text-[#8B2D47]">120 horas en Inteligencia Artificial</strong>{' '}
              me capacita para agilizar la gestión de oficinas, automatizar tareas repetitivas
              y potenciar la productividad operativa desde el primer momento.
            </p>

            {/* Key feature pills with clean aesthetics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#EFE4D6] flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FBE8EC] text-[#A63654] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2D2526]">
                    Curso IA Aplicada (120h)
                  </span>
                  <span className="block text-[11px] text-[#7A6B6E]">
                    Automatización administrativa, prompts y copilotos
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#EFE4D6] flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FAF0E1] text-[#9E6523] shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2D2526]">
                    FPGM en Empresas
                  </span>
                  <span className="block text-[11px] text-[#7A6B6E]">
                    Facturación, albaranes, tesorería y contabilidad
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#EFE4D6] flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#FDF0F3] text-[#A63654] shrink-0 mt-0.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2D2526]">
                    Experiencia en Distribución
                  </span>
                  <span className="block text-[11px] text-[#7A6B6E]">
                    Control de stock en almacén y gestión de pedidos
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#EFE4D6] flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#F3EFEB] text-[#69585B] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-[#2D2526]">
                    Ventas & Negociación
                  </span>
                  <span className="block text-[11px] text-[#7A6B6E]">
                    Trato cercano, fidelización y resolución de incidencias
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {/* Primary: Cover Letter Generator */}
              <button
                onClick={onOpenLetterGenerator}
                className="px-5 py-2.5 bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-[#FEDEE7] group-hover:rotate-12 transition-transform" />
                <span>Generador de Cartas de Presentación</span>
              </button>

              {/* Secondary: Print / PDF Modal */}
              <button
                onClick={onOpenPrintModal}
                className="px-4 py-2.5 bg-[#FFFDF9] hover:bg-[#F8EFE4] text-[#4A3E40] border border-[#E8DCCF] text-xs sm:text-sm font-semibold rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Printer className="w-4 h-4 text-[#9E3B5A]" />
                <span>Ver CV / Imprimir en PDF</span>
              </button>

              {/* Email direct copy */}
              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2.5 bg-[#FFFDF9] hover:bg-[#FDF0F3] text-[#7A6B6E] hover:text-[#9E3B5A] border border-[#EFE4D6] hover:border-[#F6CBD6] text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Copiar email de Ana Carrillo"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">¡Email Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C44D6E]" />
                      <span>Copiar Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
