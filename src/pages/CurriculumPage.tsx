import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  Copy, 
  Check, 
  MapPin, 
  Mail, 
  Car, 
  Sparkles, 
  GraduationCap, 
  ArrowLeft,
  Camera,
  UploadCloud
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { useProfilePhoto } from '../context/PhotoContext';

export const CurriculumPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { photoSrc, updatePhoto } = useProfilePhoto();

  const handlePrint = () => {
    window.print();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          updatePhoto(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopyTextCV = () => {
    const textCV = `
CURRÍCULUM VITAE — ${PROFILE_DATA.fullName.toUpperCase()}
${PROFILE_DATA.headline}
Ubicación: ${PROFILE_DATA.location}
Email: ${PROFILE_DATA.email}
Movilidad: ${PROFILE_DATA.drivingLicense}
Disponibilidad: ${PROFILE_DATA.availability}

=======================================
PERFIL PROFESIONAL
=======================================
${PROFILE_DATA.summary}

=======================================
FORMACIÓN ACADÉMICA Y ESPECIALIZACIÓN
=======================================
* ${PROFILE_DATA.education[0].title}
  - Duración: ${PROFILE_DATA.education[0].duration}
  - Centro: ${PROFILE_DATA.education[0].institution}
  - Competencias: Especialización intensiva en IA generativa aplicada a la administración, automatización de tareas y ofimática inteligente.

* ${PROFILE_DATA.education[1].title}
  - Duración: ${PROFILE_DATA.education[1].duration}
  - Centro: ${PROFILE_DATA.education[1].institution}
  - Competencias: Facturación, albaranes, contabilidad básica, tesorería y archivo.

=======================================
EXPERIENCIA LABORAL
=======================================
${PROFILE_DATA.experience.map(e => `
* ${e.role} — ${e.company} (${e.period})
  ${e.description}
  Responsabilidades:
  ${e.achievements.map(a => `  - ${a}`).join('\n')}
`).join('\n')}

=======================================
COMPETENCIAS CLAVE
=======================================
- Administración: Facturación, albaranes, control de stock y almacén, resolución de incidencias.
- Digital & IA: Curso IA 120h, Microsoft Excel, Word, PowerPoint, software ERPs.
- Comercial: Atención al cliente, asesoramiento, negociación y fidelización.
- Movilidad: Carnet B y vehículo propio.
`.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Top Controls Bar (Hidden during print) */}
        <div className="no-print mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FAF5EE] p-4 rounded-2xl border border-[#E8DACB]">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F2743] hover:text-[#B54564] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al Inicio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            <label
              htmlFor="cv-avatar-upload"
              className="px-3 py-1.5 text-xs font-medium text-[#483A3C] bg-white hover:bg-[#FDF0F3] border border-[#E2D4C3] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Cambiar foto del currículum"
            >
              <UploadCloud className="w-3.5 h-3.5 text-[#B54564]" />
              <span>Cambiar Foto</span>
            </label>
            <input
              id="cv-avatar-upload"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />

            <button
              onClick={handleCopyTextCV}
              className="px-3 py-1.5 text-xs font-medium text-[#483A3C] bg-white hover:bg-[#FDF0F3] border border-[#E2D4C3] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B54564]" />
                  <span>Copiar Texto</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] rounded-lg shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] shadow-sm p-6 sm:p-12 font-serif text-[#2D2426] print:border-none print:shadow-none print:p-0">
          
          {/* Header with Photo */}
          <div className="border-b-2 border-[#C95B7A] pb-6 mb-6">
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-6">
              
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1F191B]">
                  {PROFILE_DATA.fullName}
                </h1>
                <p className="text-sm sm:text-base text-[#8F2743] font-medium mt-1">
                  {PROFILE_DATA.headline}
                </p>

                <div className="text-xs sm:text-sm font-sans space-y-1 text-[#5E4D51] mt-3">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B54564]" />
                    <span>{PROFILE_DATA.location}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#B54564]" />
                    <span>{PROFILE_DATA.email}</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#B54564]" />
                    <span>Carnet B · Vehículo propio · Incorporación inmediata</span>
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="shrink-0">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#F0CBD5] p-1 bg-white shadow-xs">
                  <img
                    src={photoSrc}
                    alt={PROFILE_DATA.fullName}
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Perfil Profesional */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-sans font-bold tracking-wider text-[#A63654] border-b border-[#F0E0D0] pb-1 mb-2">
              Perfil Profesional
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-[#45373A] font-sans">
              {PROFILE_DATA.summary}
            </p>
          </div>

          {/* Formación Académica & IA (120 HORAS) */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-sans font-bold tracking-wider text-[#A63654] border-b border-[#F0E0D0] pb-1 mb-3 flex items-center justify-between">
              <span>Formación Académica & Cualificación Tecnológica</span>
              <span className="text-[10px] text-[#B54564] font-semibold">120 Horas en IA</span>
            </h2>

            <div className="space-y-4">
              {/* Curso IA 120h */}
              <div className="bg-[#FAF5EE]/70 p-4 rounded-xl border border-[#EDE1D1]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-sm text-[#261E20] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#B54564]" />
                    <span>{PROFILE_DATA.education[0].title}</span>
                  </span>
                  <span className="text-xs font-sans font-bold text-[#8F2743] bg-[#FBE5EB] px-2 py-0.5 rounded border border-[#F3BDCB] w-fit">
                    {PROFILE_DATA.education[0].duration}
                  </span>
                </div>
                <p className="text-xs text-[#69585B] font-sans mb-2">
                  {PROFILE_DATA.education[0].institution}
                </p>
                <p className="text-xs text-[#423437] font-sans leading-relaxed mb-2">
                  {PROFILE_DATA.education[0].description}
                </p>
                <div className="flex flex-wrap gap-1.5 font-sans">
                  {PROFILE_DATA.education[0].skillsLearned.map((s, idx) => (
                    <span key={idx} className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#E5D7C7] text-[#4F3F42]">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* FPGM */}
              <div className="p-4 rounded-xl border border-[#EFE4D6]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-sm text-[#261E20] flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#785934]" />
                    <span>{PROFILE_DATA.education[1].title}</span>
                  </span>
                  <span className="text-xs font-sans text-[#785934] font-medium">
                    {PROFILE_DATA.education[1].duration}
                  </span>
                </div>
                <p className="text-xs text-[#69585B] font-sans mb-1">
                  {PROFILE_DATA.education[1].institution}
                </p>
                <p className="text-xs text-[#423437] font-sans leading-relaxed">
                  {PROFILE_DATA.education[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Experiencia Laboral */}
          <div className="mb-6">
            <h2 className="text-xs uppercase font-sans font-bold tracking-wider text-[#A63654] border-b border-[#F0E0D0] pb-1 mb-3">
              Experiencia Laboral
            </h2>

            <div className="space-y-4">
              {PROFILE_DATA.experience.map((exp) => (
                <div key={exp.id} className="font-sans">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-xs sm:text-sm text-[#241C1E]">
                      {exp.role} — <span className="font-semibold text-[#8F2743]">{exp.company}</span>
                    </span>
                    <span className="text-xs text-[#7A696D]">{exp.period} · {exp.location}</span>
                  </div>
                  <p className="text-xs text-[#524346] mt-1 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="mt-1.5 space-y-1 text-xs text-[#3D3134]">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-1.5">
                        <span className="text-[#B54564] font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competencias & Datos de Interés */}
          <div className="pt-2 border-t border-[#EFE4D6]">
            <h2 className="text-xs uppercase font-sans font-bold tracking-wider text-[#A63654] pb-1 mb-2">
              Competencias & Datos de Interés
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans text-[#4A3C3F]">
              <div className="bg-[#FAF5EE] p-3 rounded-xl border border-[#EDE2D4]">
                <strong className="block text-[#261E20] mb-1">Administración:</strong>
                <span>Facturación, control de stock, conciliación, albaranes y resolución ágil de incidencias.</span>
              </div>
              <div className="bg-[#FAF5EE] p-3 rounded-xl border border-[#EDE2D4]">
                <strong className="block text-[#261E20] mb-1">Tecnología & IA (120h):</strong>
                <span>Herramientas de IA generativa, Microsoft Office (Excel, Word, PowerPoint) y ERPs.</span>
              </div>
              <div className="bg-[#FAF5EE] p-3 rounded-xl border border-[#EDE2D4]">
                <strong className="block text-[#261E20] mb-1">Comercial & Movilidad:</strong>
                <span>Negociación, atención personalizada, carnet B, vehículo propio e incorporación inmediata.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
