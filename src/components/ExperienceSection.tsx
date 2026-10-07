import React from 'react';
import { Briefcase, Building2, CheckCircle2, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ExperienceSection: React.FC = () => {
  const { experience } = PROFILE_DATA;

  return (
    <section id="experiencia" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Trayectoria y Experiencia Profesional</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2526] font-medium tracking-tight">
            Experiencia Laboral
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Un recorrido sólido que une la gestión administrativa minuciosa, el control de logística
            y almacén, y la empatía comercial en el trato con clientes.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l-2 border-[#EADCCC] ml-3 sm:ml-8 md:ml-12 space-y-10 pl-6 sm:pl-10">
          {experience.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#FFFDF9] border-2 border-[#B54564] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-[#FBE8EC] transition-transform">
                <span className="w-2 h-2 rounded-full bg-[#B54564]" />
              </div>

              {/* Card Container */}
              <div className="bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0E6D8] pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A63654] block mb-1">
                      {item.type || 'Puesto de Responsabilidad'}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526]">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[#735D62] mt-0.5">
                      <Building2 className="w-4 h-4 text-[#8C3A50]" />
                      <span className="font-medium text-[#382B2D]">{item.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end justify-between sm:justify-center gap-1 text-xs text-[#7B696D]">
                    <span className="px-2.5 py-1 bg-[#F9F1E6] rounded-md font-medium text-[#7A5B36] border border-[#ECD9C5]">
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-[#8A797D] mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C44D6E]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#57484B] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A7178]">
                    Responsabilidades y Logros:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#4E4043]">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 bg-[#FAF5EE]/70 p-2.5 rounded-lg border border-[#EDE2D4]">
                        <CheckCircle2 className="w-4 h-4 text-[#B54564] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F3E9DD]">
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

      </div>
    </section>
  );
};
