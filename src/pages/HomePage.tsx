import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  Car, 
  Mail, 
  Camera, 
  Copy, 
  Check, 
  Printer,
  ArrowRight,
  Briefcase,
  Layers,
  FileText,
  UploadCloud,
  RotateCcw
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import { useProfilePhoto } from '../context/PhotoContext';

export const HomePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { photoSrc, updatePhoto, resetPhoto } = useProfilePhoto();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          updatePhoto(uploadEvent.target.result as string);
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#FCEBEF]/60 via-[#FDF5E8]/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-4 w-72 h-72 rounded-full bg-[#FCE2E8]/40 blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-96 left-4 w-72 h-72 rounded-full bg-[#FBF0DD]/50 blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Outer delicate frame with soft rose / vanilla halo */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2.5 bg-gradient-to-tr from-[#FAD8E0] via-[#FFFBF5] to-[#F7C6D2] shadow-xl shadow-[#E8B8C4]/30 border-2 border-[#F1D0D9]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF3EC] border-2 border-white shadow-inner relative">
                  <img
                    src={photoSrc}
                    alt={PROFILE_DATA.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover upload button for user */}
                  <label
                    htmlFor="home-avatar-upload"
                    className="absolute inset-0 bg-[#2D2526]/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer backdrop-blur-[2px]"
                    title="Haga clic para seleccionar o subir su foto"
                  >
                    <Camera className="w-7 h-7 mb-1.5 drop-shadow" />
                    <span className="text-xs font-semibold tracking-wide">Cambiar Foto</span>
                    <span className="text-[10px] text-pink-200">Subir IMG_8576.jpg</span>
                  </label>
                  <input
                    id="home-avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#FFFDF9] border border-[#F2CAD5] shadow-xs px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-[#4A3E40]">
                  {PROFILE_DATA.availability}
                </span>
              </div>
            </div>

            {/* Photo Action Bar */}
            <div className="mt-7 flex flex-col items-center gap-2">
              <label
                htmlFor="home-avatar-upload-btn"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#8F2743] bg-[#FBE5EB] hover:bg-[#F8D2DD] border border-[#F2CAD5] rounded-xl shadow-2xs transition-all cursor-pointer hover:shadow-xs active:scale-95"
              >
                <UploadCloud className="w-3.5 h-3.5 text-[#B54564]" />
                <span>Cargar foto propia (IMG_8576.jpg)</span>
              </label>
              <input
                id="home-avatar-upload-btn"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />

              {uploadSuccess && (
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 animate-in fade-in">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>¡Foto actualizada y guardada con éxito!</span>
                </span>
              )}

              {photoSrc !== PROFILE_DATA.photoUrl && (
                <button
                  onClick={resetPhoto}
                  className="text-[11px] text-[#8C7A7E] hover:text-[#B54564] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Restablecer foto predeterminada</span>
                </button>
              )}
            </div>

            {/* Quick Badges */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF9] rounded-lg border border-[#EFE4D6] text-xs font-medium text-[#5E4E51]">
                <MapPin className="w-3.5 h-3.5 text-[#C44D6E]" />
                <span>Torrijos (Toledo)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFFDF9] rounded-lg border border-[#EFE4D6] text-xs font-medium text-[#5E4E51]">
                <Car className="w-3.5 h-3.5 text-[#C44D6E]" />
                <span>Carnet B & Vehículo Propio</span>
              </div>
            </div>
          </div>

          {/* Intro Information */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452]">
              <Sparkles className="w-3.5 h-3.5 text-[#C44D6E]" />
              <span>Formación en IA (120 Horas) · FPGM Administración de Empresas</span>
            </div>

            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2D2526] leading-tight">
                {PROFILE_DATA.fullName}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-serif italic text-[#8B3B52]">
                Especialista en Administración, Gestión Comercial e IA Aplicada
              </p>
            </div>

            <p className="text-[#594B4E] leading-relaxed text-sm sm:text-base font-light">
              Bienvenido/a a mi espacio profesional. Soy una profesional polivalente, resolutiva y cercana con
              amplia experiencia en administración de empresas de distribución y sector comercial.
              Recientemente he completado una especialización intensiva de{' '}
              <strong className="font-semibold text-[#8B2D47]">120 horas en Inteligencia Artificial aplicada</strong>{' '}
              a la gestión y productividad de oficinas, combinando el rigor del trabajo diario con las herramientas tecnológicas más actuales.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/cartas"
                className="px-5 py-2.5 bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FEDEE7] group-hover:rotate-12 transition-transform" />
                <span>Generar Carta de Presentación</span>
              </Link>

              <Link
                to="/curriculum"
                className="px-4 py-2.5 bg-[#FFFDF9] hover:bg-[#F8EFE4] text-[#4A3E40] border border-[#E8DCCF] text-xs sm:text-sm font-semibold rounded-xl shadow-2xs hover:shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#9E3B5A]" />
                <span>Ver CV Oficial / Imprimir</span>
              </Link>

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

        {/* Dedicated Section Navigator Cards (True Multi-page showcase) */}
        <div className="mt-12 pt-8 border-t border-[#EFE4D6]/80">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E3B5A] block mb-1">
              Explorar Secciones
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2526]">
              Descubra mi perfil en detalle
            </h2>
            <p className="text-xs sm:text-sm text-[#736366] mt-1">
              Acceda a cada página dedicada para consultar mi formación, experiencia y herramientas interactivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Page 1: Formación & IA */}
            <Link
              to="/formacion"
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs hover:shadow-md hover:border-[#F2CAD5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FBE5EB] text-[#A63654] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold bg-[#FAF0E1] text-[#8C5E24] px-2.5 py-0.5 rounded-full border border-[#EBD6BC]">
                    120 Horas IA
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Formación & Curso de IA
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Conozca en profundidad mi curso de 120 horas en Inteligencia Artificial aplicada a la oficina y mi titulación de FPGM en Administración.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Ver plan de estudios y competencias</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Page 2: Experiencia */}
            <Link
              to="/experiencia"
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs hover:shadow-md hover:border-[#F2CAD5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#9E6523] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#7A696D]">
                    Distribución & Seguros
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Experiencia Laboral
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Trayectoria contrastada en Hnos. Carrillo (Auxiliar y Gerente), Distribuciones García, Seguros Ocaso y venta directa.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Ver historial laboral completo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Page 3: Habilidades */}
            <Link
              to="/habilidades"
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs hover:shadow-md hover:border-[#F2CAD5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF0F3] text-[#A63654] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#7A696D]">
                    Ofimática & Ventas
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Competencias Profesionales
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Facturación, control de stock, gestión documental, Microsoft Office, ERPs, negociación y empatía con clientes.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Explorar destrezas técnicas y humanas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Page 4: Generador de Cartas */}
            <Link
              to="/cartas"
              className="group bg-gradient-to-br from-[#FFFDF9] via-[#FAF3EB] to-[#FFF1F4] rounded-2xl border-2 border-[#F0CBD5] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#B54564] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold bg-[#FBE5EB] text-[#8F2743] px-2.5 py-0.5 rounded-full border border-[#F3BDCB]">
                    Herramienta Exclusiva
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Generador de Cartas a Medida
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Redacte una carta de presentación adaptada para cualquier oferta laboral (ej. Auxiliar en distribución, administración con IA).
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Abrir generador y redactar</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Page 5: CV Oficial */}
            <Link
              to="/curriculum"
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs hover:shadow-md hover:border-[#F2CAD5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#8C5E24] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#7A696D]">
                    Formato A4 Listo
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Currículum Vitae (Vista Oficial)
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Visualice el currículum completo en un documento formal optimizado para imprimir o guardar directamente en PDF.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Ver currículum oficial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Page 6: Contacto */}
            <Link
              to="/contacto"
              className="group bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 shadow-xs hover:shadow-md hover:border-[#F2CAD5] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FBE5EB] text-[#A63654] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-[#7A696D]">
                    Respuesta Inmediata
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2D2526] group-hover:text-[#9E3B5A] transition-colors">
                  Contacto & Entrevistas
                </h3>
                <p className="text-xs text-[#6A5A5D] mt-2 leading-relaxed">
                  Envíe una propuesta laboral, consulte disponibilidad o solicite una entrevista con Ana María Carrillo.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between text-xs font-semibold text-[#8F2743]">
                <span>Contactar directamente</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};
