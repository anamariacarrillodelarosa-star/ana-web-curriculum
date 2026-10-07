import React from 'react';
import { Sparkles, Award, BookOpen, CheckCircle, Cpu, Clock, Zap } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EducationSection: React.FC = () => {
  const { education } = PROFILE_DATA;
  const aiCourse = education.find((e) => e.id === 'curso-ia');
  const fpgm = education.find((e) => e.id === 'fpgm-administracion');

  return (
    <section id="formacion" className="py-16 md:py-24 bg-[#F8F3EA]/60 border-y border-[#EFE4D6]/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Award className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Formación Académica y Cualificación Continua</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2526] font-medium tracking-tight">
            Educación & Especialización en IA
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Una base sólida y reglada en gestión empresarial combinada con una actualización
            tecnológica puntera en Inteligencia Artificial aplicada a la oficina.
          </p>
        </div>

        {/* Highlighted AI Course Card */}
        {aiCourse && (
          <div className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF4ED] to-[#FFF1F4] border-2 border-[#F0CBD5] p-6 sm:p-8 md:p-10 shadow-sm transition-all hover:shadow-md">
            {/* Top decorative accent ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#B54564] to-[#C95B7A] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase py-1.5 px-5 rounded-bl-xl shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Formación Destacada</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title and Badge */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FBE5EB] text-[#8F2743] rounded-full text-xs font-bold border border-[#F3BDCB]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{aiCourse.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF1E3] text-[#8C5E24] rounded-full text-xs font-medium border border-[#EBD6BC]">
                    <Zap className="w-3 h-3" />
                    <span>Productividad Digital</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2D2526] leading-snug">
                    {aiCourse.title}
                  </h3>
                  <p className="text-sm font-medium text-[#8F354F] mt-1">
                    {aiCourse.institution} · Certificación Finalizada
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#57474A] leading-relaxed">
                  {aiCourse.description}
                </p>

                {/* Modules breakdown */}
                {aiCourse.modules && (
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#735A60] flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-[#B54564]" />
                      <span>Competencias y Módulos Desarrollados (120h)</span>
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4E4143]">
                      {aiCourse.modules.map((mod, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#B54564] shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Practical Impact on Business */}
              <div className="lg:col-span-5 bg-[#FFFDFB] rounded-xl p-6 border border-[#EFE4D6] shadow-2xs space-y-4">
                <h4 className="font-serif text-lg font-medium text-[#2D2526] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#B54564]" />
                  <span>Beneficio Directo para la Empresa</span>
                </h4>
                
                <p className="text-xs text-[#6A5A5D] leading-relaxed">
                  Contar con un perfil administrativo formado en IA de 120 horas aporta una ventaja operativa inmediata:
                </p>

                <div className="space-y-3">
                  <div className="p-3 bg-[#FAF6F0] rounded-lg border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      ⚡ Agilidad en Documentos y Facturación
                    </span>
                    <span className="block text-[11px] text-[#69595C] mt-0.5">
                      Redacción instantánea de escritos formales, filtrado de incidencias y depuración de tablas Excel.
                    </span>
                  </div>

                  <div className="p-3 bg-[#FAF6F0] rounded-lg border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      🤖 Asistente de Oficina & Copilotos
                    </span>
                    <span className="block text-[11px] text-[#69595C] mt-0.5">
                      Uso práctico de asistentes virtuales para consultas normativas, resúmenes de reuniones y correos comerciales.
                    </span>
                  </div>

                  <div className="p-3 bg-[#FAF6F0] rounded-lg border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      📈 Optimización de Stock & Pedidos
                    </span>
                    <span className="block text-[11px] text-[#69595C] mt-0.5">
                      Análisis de rotación de existencias y previsión de aprovisionamiento con soporte analítico.
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EFE4D6] flex flex-wrap gap-1.5">
                  {aiCourse.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[11px] bg-[#FDF0F3] text-[#8F2743] rounded-md font-medium border border-[#F5CAD6]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* FPGM Administration Card */}
        {fpgm && (
          <div className="bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#F4EDE2] text-[#785934] rounded-full text-xs font-semibold border border-[#E6D9C8]">
                    {fpgm.duration}
                  </span>
                  <span className="text-xs text-[#87787A]">{fpgm.period}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526]">
                  {fpgm.title}
                </h3>
                <p className="text-sm font-medium text-[#7D4958]">
                  {fpgm.institution}
                </p>
                <p className="text-sm text-[#5C4D50] leading-relaxed">
                  {fpgm.description}
                </p>

                {fpgm.modules && (
                  <div className="pt-2">
                    <span className="text-xs uppercase font-bold text-[#7E696E] block mb-2">
                      Materias y Áreas Clave:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4F4144]">
                      {fpgm.modules.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-2">
                          <BookOpen className="w-3.5 h-3.5 text-[#B54564] shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-4 bg-[#FAF6F0] rounded-xl p-5 border border-[#EDE2D4] space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#6F5B60]">
                  Competencias Asimiladas
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {fpgm.skillsLearned.map((sk, kIdx) => (
                    <span
                      key={kIdx}
                      className="px-2.5 py-1 text-xs bg-white text-[#524144] rounded-md border border-[#E2D5C4] font-medium"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
