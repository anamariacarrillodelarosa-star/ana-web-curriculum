import React from 'react';
import { Sparkles, Layers, Users, Laptop, Car, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PROFILE_DATA;

  return (
    <section id="habilidades" className="py-16 md:py-24 bg-[#F8F3EA]/70 border-t border-[#EFE4D6]/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Perfil Polivalente & Eficiente</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2526] font-medium tracking-tight">
            Competencias & Habilidades Clave
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Combinación contrastada de gestión administrativa rigurosa, herramientas digitales e IA
            y trato empático con clientes.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#F2E8DC]">
                  <div className="w-8 h-8 rounded-lg bg-[#FBE5EB] text-[#A63654] flex items-center justify-center">
                    {idx === 0 && <Layers className="w-4 h-4" />}
                    {idx === 1 && <Laptop className="w-4 h-4" />}
                    {idx === 2 && <Users className="w-4 h-4" />}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#2D2526]">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className={`font-medium ${skill.highlight ? 'text-[#8F2743] font-semibold' : 'text-[#483B3E]'}`}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-1.5 py-0.2 rounded font-semibold">
                            Clave
                          </span>
                        )}
                      </div>
                      {/* Bar indicator */}
                      <div className="h-1.5 w-full bg-[#EFE3D5] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-[#B54564] to-[#C95B7A]'
                              : 'bg-[#BFAEA2]'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer note */}
              <div className="mt-6 pt-3 border-t border-[#F4ECE2] text-[11px] text-[#7C6C6F] italic">
                {idx === 0 && '✓ Experiencia práctica en facturación de distribución y almacén'}
                {idx === 1 && '✓ Especialización de 120h en IA aplicada a la empresa'}
                {idx === 2 && '✓ Capacidad contrastada de fidelización y resolución con el cliente'}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Guarantees Strip */}
        <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FAF3EB] to-[#FFF6F8] rounded-2xl border border-[#E9D9C9] p-6 sm:p-8 shadow-xs">
          <h4 className="font-serif text-xl font-medium text-[#2D2526] mb-5 text-center sm:text-left">
            Fortalezas Personales y Disponibilidad Operativa
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#EDE2D4]">
              <div className="p-2 bg-[#FBE5EB] text-[#A63654] rounded-lg shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Total Movilidad</span>
                <span className="block text-[11px] text-[#69585B]">Carnet B y vehículo propio para desplazamientos</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#EDE2D4]">
              <div className="p-2 bg-[#FBE5EB] text-[#A63654] rounded-lg shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Incorporación Inmediata</span>
                <span className="block text-[11px] text-[#69585B]">Disponibilidad completa para comenzar de inmediato</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#EDE2D4]">
              <div className="p-2 bg-[#FBE5EB] text-[#A63654] rounded-lg shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Resolución & Rigor</span>
                <span className="block text-[11px] text-[#69585B]">Autonomía para solventar incidencias diarias</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-[#EDE2D4]">
              <div className="p-2 bg-[#FBE5EB] text-[#A63654] rounded-lg shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Trato Humano & Empatía</span>
                <span className="block text-[11px] text-[#69585B]">Excelente relación con clientes y equipo</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
