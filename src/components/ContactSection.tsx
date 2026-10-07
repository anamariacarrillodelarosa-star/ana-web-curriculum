import React, { useState } from 'react';
import { Mail, MapPin, Car, Clock, Copy, Check, Send, Sparkles, MessageSquareHeart } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !senderEmail) return;

    // Build mailto query to allow direct sending through user's email client as well
    const subject = encodeURIComponent(`Contacto Profesional - Oferta de Empleo (${senderCompany || 'Selección'})`);
    const body = encodeURIComponent(
      `Hola Ana María,\n\nSoy ${senderName} de ${senderCompany || 'nuestra empresa'}.\n\n${senderMessage}\n\nContacto: ${senderEmail}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;

    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-[#F8F3EA]/80 border-t border-[#EFE4D6]/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Mail className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Contacto Directo e Inmediato</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2526] font-medium tracking-tight">
            Contactar con Ana María
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            ¿Tiene una propuesta laboral o desea concertar una entrevista? Estoy a su entera disposición
            para incorporarme de inmediato y aportar valor a su organización.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526] mb-2">
                Datos de Contacto
              </h3>
              <p className="text-xs sm:text-sm text-[#736366] leading-relaxed">
                Respondo con la mayor brevedad a cualquier propuesta o consulta profesional.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email item with copy button */}
              <div className="p-4 bg-[#FAF5EE] rounded-xl border border-[#EDE2D4] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#FBE5EB] text-[#A63654] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A7178]">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#2D2526] hover:text-[#9E3B5A] truncate block transition-colors"
                      title={PROFILE_DATA.email}
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-[#7A696D] hover:text-[#9E3B5A] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-[#E8DACB] shrink-0 cursor-pointer"
                  title="Copiar email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#A63654]" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 bg-[#FAF5EE] rounded-xl border border-[#EDE2D4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FBE5EB] text-[#A63654] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A7178]">
                    Ubicación y Residencia
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D2526]">
                    {PROFILE_DATA.location}
                  </span>
                </div>
              </div>

              {/* Mobility */}
              <div className="p-4 bg-[#FAF5EE] rounded-xl border border-[#EDE2D4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FBE5EB] text-[#A63654] flex items-center justify-center shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A7178]">
                    Movilidad y Desplazamiento
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D2526]">
                    Carnet B y vehículo propio (Plena autonomía)
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="p-4 bg-[#FAF5EE] rounded-xl border border-[#EDE2D4] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0E0] text-[#9E6523] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A7178]">
                    Disponibilidad
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D2526]">
                    Incorporación Inmediata
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center sm:text-left">
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Contacto%20para%20proceso%20de%20selecci%C3%B3n`}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar Correo Directo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-2xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs">
            <div className="border-b border-[#F2E8DC] pb-4 mb-5">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#2D2526] flex items-center gap-2">
                <MessageSquareHeart className="w-5 h-5 text-[#B54564]" />
                <span>Enviar Propuesta o Mensaje</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#736366] mt-1">
                Escriba los detalles de la oferta para ponerse en contacto de forma ágil y directa.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D3033] mb-1.5">
                    Su Nombre o Responsable de Selección *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Ej. Laura González"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D3033] mb-1.5">
                    Empresa u Organización
                  </label>
                  <input
                    type="text"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    placeholder="Ej. Distribuciones S.L. / Asesoría"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3033] mb-1.5">
                  Su Correo Electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="ejemplo@empresa.com"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D3033] mb-1.5">
                  Mensaje o Puesto a Cubrir
                </label>
                <textarea
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Nos gustaría concertar una entrevista para un puesto de Auxiliar Administrativa / Gestora Comercial..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] text-white rounded-xl font-medium text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Contactar con Ana María</span>
              </button>

              {isSent && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-in fade-in">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    Abriendo su cliente de correo para enviar el mensaje a Ana María Carrillo.
                  </span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
