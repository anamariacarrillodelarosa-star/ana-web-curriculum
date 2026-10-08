import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Award, 
  Clock, 
  Zap, 
  CheckCircle, 
  Cpu, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight,
  FileText,
  Building,
  Laptop
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EducationPage: React.FC = () => {
  const { education } = PROFILE_DATA;
  const aiCourse = education.find((e) => e.id === 'curso-ia');
  const fpgm = education.find((e) => e.id === 'fpgm-administracion');

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Back Link / Breadcrumb */}
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
            <Award className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Cualificación Académica & Tecnológica</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2526] font-medium tracking-tight">
            Formación & Curso de IA (120h)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Una base técnica sólida y reglada en administración unida a una formación pionera
            en Inteligencia Artificial aplicada a la productividad empresarial.
          </p>
        </div>

        {/* 1. FEATURED: CURSO DE IA DE 120 HORAS */}
        {aiCourse && (
          <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF4ED] to-[#FFF1F4] border-2 border-[#F0CBD5] p-6 sm:p-10 shadow-sm">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#B54564] to-[#C95B7A] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase py-1.5 px-6 rounded-bl-2xl shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Formación Destacada</span>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FBE5EB] text-[#8F2743] rounded-full text-xs font-bold border border-[#F3BDCB]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{aiCourse.duration}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FAF0E1] text-[#8C5E24] rounded-full text-xs font-medium border border-[#EBD6BC]">
                  <Zap className="w-3 h-3" />
                  <span>Productividad y Automatización</span>
                </span>
                <span className="text-xs text-[#7A696D]">
                  {aiCourse.period}
                </span>
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2D2526] leading-snug">
                  {aiCourse.title}
                </h2>
                <p className="text-sm font-semibold text-[#8F354F] mt-1">
                  {aiCourse.institution}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#57474A] leading-relaxed">
                {aiCourse.description}
              </p>

              {/* Modules Grid */}
              {aiCourse.modules && (
                <div className="pt-2">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-[#735A60] mb-3 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#B54564]" />
                    <span>Programa Formativo y Módulos Desarrollados (120 Horas):</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {aiCourse.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-[#FAF5EE]/90 p-3.5 rounded-xl border border-[#EDE2D4]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#B54564] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4E4143] leading-relaxed">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Value Breakdown */}
              <div className="mt-6 bg-[#FFFDFB] rounded-2xl p-6 border border-[#EFE4D6] shadow-2xs space-y-4">
                <h3 className="font-serif text-lg font-medium text-[#2D2526] flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-[#B54564]" />
                  <span>¿Qué aporta esta formación de IA a la empresa?</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      1. Reducción de Tiempos
                    </span>
                    <p className="text-[11px] text-[#69595C] mt-1 leading-relaxed">
                      Redacción rápida de circulares, correspondencia formal, respuestas a clientes y preparación de actas o resúmenes.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      2. Tratamiento de Datos
                    </span>
                    <p className="text-[11px] text-[#69595C] mt-1 leading-relaxed">
                      Soporte asistido para fórmulas complejas en Excel, análisis de tablas de facturación y detección de discrepancias.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF6F0] rounded-xl border border-[#EDE1D1]">
                    <span className="block text-xs font-bold text-[#3B2F31]">
                      3. Control Operativo
                    </span>
                    <p className="text-[11px] text-[#69595C] mt-1 leading-relaxed">
                      Organización ágil de registros de inventario, albaranes pendientes y seguimiento preventivo de pedidos.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {aiCourse.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 text-xs bg-[#FDF0F3] text-[#8F2743] rounded-lg font-medium border border-[#F5CAD6]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. FPGM EN ADMINISTRACIÓN Y GESTIÓN */}
        {fpgm && (
          <div className="bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] p-6 sm:p-10 shadow-xs mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#F4EDE2] text-[#785934] rounded-full text-xs font-semibold border border-[#E6D9C8]">
                {fpgm.duration}
              </span>
              <span className="text-xs text-[#87787A]">{fpgm.period}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#2D2526]">
              {fpgm.title}
            </h2>
            <p className="text-sm font-semibold text-[#7D4958] mt-1">
              {fpgm.institution}
            </p>

            <p className="text-sm sm:text-base text-[#5C4D50] leading-relaxed mt-4">
              {fpgm.description}
            </p>

            {fpgm.modules && (
              <div className="mt-6 pt-4 border-t border-[#F2E8DC]">
                <h3 className="text-xs uppercase font-bold tracking-wider text-[#7E696E] mb-3">
                  Áreas de Conocimiento Oficiales:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4F4144]">
                  {fpgm.modules.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2.5 p-2 bg-[#FAF5EE]/70 rounded-lg border border-[#EDE2D4]">
                      <BookOpen className="w-4 h-4 text-[#B54564] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom CTA to next section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#FAF4EB] rounded-2xl border border-[#E9DAC8]">
          <div>
            <h4 className="font-serif text-lg font-medium text-[#2D2526]">
              ¿Desea ver cómo se aplica esta formación en la práctica?
            </h4>
            <p className="text-xs text-[#736366] mt-0.5">
              Descubra mi trayectoria como administradora y gerente en empresas de distribución.
            </p>
          </div>
          <Link
            to="/experiencia"
            className="px-4 py-2.5 bg-[#B54564] hover:bg-[#9E3B5A] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Ver Experiencia Laboral</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
