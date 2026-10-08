import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  MapPin, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ExperiencePage: React.FC = () => {
  const { experience } = PROFILE_DATA;

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F2743] hover:text-[#B54564] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Historial Laboral & Desempeño</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2526] font-medium tracking-tight">
            Experiencia Laboral
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Años de gestión real en empresas del sector de la distribución, almacén,
            atención al cliente y seguros comerciales.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-[#EADCCC] ml-3 sm:ml-8 md:ml-10 space-y-10 pl-6 sm:pl-10 mb-14">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-6 h-6 rounded-full bg-[#FFFDF9] border-2 border-[#B54564] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#FBE8EC] transition-transform">
                <span className="w-2 h-2 rounded-full bg-[#B54564]" />
              </div>

              {/* Card Container */}
              <div className="bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0E6D8] pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A63654] block mb-1">
                      {item.type || 'Puesto Profesional'}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526]">
                      {item.role}
                    </h2>
                    <div className="flex items-center gap-2 text-sm text-[#735D62] mt-0.5">
                      <Building2 className="w-4 h-4 text-[#8C3A50]" />
                      <span className="font-semibold text-[#382B2D]">{item.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center gap-1 text-xs text-[#7B696D]">
                    <span className="px-3 py-1 bg-[#F9F1E6] rounded-md font-semibold text-[#7A5B36] border border-[#ECD9C5]">
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#8A797D] mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C44D6E]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#57484B] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A7178]">
                    Responsabilidades y Tareas Desarrolladas:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4E4043]">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 bg-[#FAF5EE]/70 p-3 rounded-xl border border-[#EDE2D4]">
                        <CheckCircle2 className="w-4 h-4 text-[#B54564] shrink-0 mt-0.5" />
                        <span className="leading-snug">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#F3E9DD]">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[11px] bg-[#FAF5EE] text-[#59464A] rounded-md font-medium border border-[#E8DACB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to next section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#FAF4EB] rounded-2xl border border-[#E9DAC8]">
          <div>
            <h4 className="font-serif text-lg font-medium text-[#2D2526]">
              ¿Quiere revisar el desglose de habilidades técnicas y ofimáticas?
            </h4>
            <p className="text-xs text-[#736366] mt-0.5">
              Consulte el panel de competencias en software, ERPs y capacidades de gestión.
            </p>
          </div>
          <Link
            to="/habilidades"
            className="px-4 py-2.5 bg-[#B54564] hover:bg-[#9E3B5A] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Ver Competencias</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
