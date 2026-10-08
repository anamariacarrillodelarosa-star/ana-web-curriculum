import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Laptop, 
  Users, 
  Car, 
  Clock, 
  ShieldCheck, 
  HeartHandshake, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const SkillsPage: React.FC = () => {
  const { skillCategories } = PROFILE_DATA;

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
            <Layers className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Capacidades Operativas & Técnicas</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2526] font-medium tracking-tight">
            Competencias & Especialidades
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Un perfil equilibrado que combina el rigor administrativo, las destrezas ofimáticas y de IA,
            y el don de gentes en la atención comercial.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F2E8DC]">
                  <div className="w-9 h-9 rounded-xl bg-[#FBE5EB] text-[#A63654] flex items-center justify-center">
                    {idx === 0 && <Layers className="w-5 h-5" />}
                    {idx === 1 && <Laptop className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                  </div>
                  <h2 className="font-serif text-lg font-semibold text-[#2D2526]">
                    {cat.category}
                  </h2>
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

              <div className="mt-6 pt-4 border-t border-[#F4ECE2] text-[11px] text-[#7C6C6F] italic">
                {idx === 0 && '✓ Dominio de albaranes, facturación y control de existencias en almacén'}
                {idx === 1 && '✓ Especialización de 120 horas en IA para procesos de gestión de oficina'}
                {idx === 2 && '✓ Capacidad contrastada de fidelización y trato personalizado'}
              </div>
            </div>
          ))}
        </div>

        {/* Mobility & Guarantees */}
        <div className="bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#FFF6F8] rounded-3xl border border-[#E9D9C9] p-6 sm:p-10 shadow-xs mb-12">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526] mb-6 text-center sm:text-left">
            Garantías de Movilidad y Compromiso Laboral
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-2xl border border-[#EDE2D4]">
              <div className="p-2.5 bg-[#FBE5EB] text-[#A63654] rounded-xl shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Vehículo Propio</span>
                <span className="block text-[11px] text-[#69585B] mt-0.5">Carnet B y total autonomía para traslados</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-2xl border border-[#EDE2D4]">
              <div className="p-2.5 bg-[#FBE5EB] text-[#A63654] rounded-xl shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Disponibilidad</span>
                <span className="block text-[11px] text-[#69585B] mt-0.5">Incorporación inmediata a la empresa</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-2xl border border-[#EDE2D4]">
              <div className="p-2.5 bg-[#FBE5EB] text-[#A63654] rounded-xl shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Resolución</span>
                <span className="block text-[11px] text-[#69585B] mt-0.5">Capacidad resolutiva ante imprevistos</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-2xl border border-[#EDE2D4]">
              <div className="p-2.5 bg-[#FBE5EB] text-[#A63654] rounded-xl shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#2D2526]">Empatía</span>
                <span className="block text-[11px] text-[#69585B] mt-0.5">Excelente trato humano con clientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA to next section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#FAF4EB] rounded-2xl border border-[#E9DAC8]">
          <div>
            <h4 className="font-serif text-lg font-medium text-[#2D2526]">
              ¿Quiere adaptar estas competencias a una oferta de empleo concreta?
            </h4>
            <p className="text-xs text-[#736366] mt-0.5">
              Utilice el Generador de Cartas de Presentación personalizado.
            </p>
          </div>
          <Link
            to="/cartas"
            className="px-4 py-2.5 bg-[#B54564] hover:bg-[#9E3B5A] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Generar Carta de Presentación</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
