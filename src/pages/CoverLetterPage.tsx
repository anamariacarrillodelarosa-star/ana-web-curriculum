import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  FileDown, 
  Printer, 
  RefreshCw, 
  Briefcase, 
  Building, 
  FileText, 
  Sliders, 
  BadgeAlert,
  Edit3,
  ArrowLeft
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const CoverLetterPage: React.FC = () => {
  const [jobTitle, setJobTitle] = useState('Auxiliar Administrativo / Gestor Comercial');
  const [company, setCompany] = useState('Empresa de Distribución');
  const [jobDescription, setJobDescription] = useState(
    'Puesto en empresa de distribución y logística. Se requiere gestión de albaranes, facturación, control de stock en almacén, recepción de pedidos y atención directa a clientes y proveedores. Se valorará conocimiento en herramientas digitales e incorporación inmediata.'
  );
  const [tone, setTone] = useState<'profesional' | 'cercano' | 'comercial'>('profesional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState<string>(() => {
    const dateFormatted = new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    return `${PROFILE_DATA.fullName}
Torrijos (Toledo) · Email: ${PROFILE_DATA.email}
Carnet B y vehículo propio | Disponibilidad inmediata

${dateFormatted}

A la atención del Departamento de Selección de Personal
Empresa de Distribución
Referencia: Candidatura al puesto de Auxiliar Administrativo / Gestor Comercial en Distribución

Estimado/a responsable de selección:

Me dirijo a ustedes con el mayor entusiasmo para presentar mi candidatura a la posición de Auxiliar Administrativo / Gestor Comercial en su empresa de distribución. Tras conocer su actividad y los requerimientos del puesto, considero que mi trayectoria profesional y mi cualificación encajan de manera idónea con las necesidades de su equipo.

Cuento con una sólida titulación en Administración y Gestión de Empresas (FPGM) y una dilatada experiencia en el sector de la distribución. Durante mi trayectoria como Auxiliar Administrativa y Gerente en la empresa familiar Distribución de Aves Hnos. Carrillo, S.L., y anteriormente en Distribuciones García, S.L., he asumido a diario la responsabilidad directa de la emisión y verificación de albaranes, facturación, conciliación de cobros, coordinación con transportistas y control exhaustivo del stock en almacén. Esta vivencia me ha otorgado un conocimiento profundo de la agilidad que demanda la cadena de suministro y la importancia del rigor documental.

Asimismo, mi desempeño como Agente Comercial en Seguros Ocaso y en venta directa ha consolidado mi vocación por el trato humano, la negociación persuasiva y la fidelización duradera de clientes, capacitándome para gestionar tanto la operativa interna de oficina como la interlocución comercial con clientes y proveedores.

Como valor añadido innovador, he completado recientemente un Curso Superior de Inteligencia Artificial (IA) aplicada a la gestión empresarial de 120 horas lectivas. Esta formación me permite integrar soluciones actuales de IA generativa para automatizar tareas repetitivas de oficina, agilizar la redacción de informes y correspondencia mercantil, procesar datos con mayor rapidez y optimizar el rendimiento de las herramientas ofimáticas habituales (Microsoft Office y hojas de cálculo).

Resido en Torrijos (Toledo), cuento con carnet de conducir B, vehículo propio y total disponibilidad para desplazarme, así como flexibilidad horaria y posibilidad de incorporación inmediata.

Agradezco de antemano su atención al valorar mi perfil y quedo a su entera disposición para mantener una entrevista personal en la que pueda exponer con mayor detalle mi aportación a su empresa.

Atentamente,

${PROFILE_DATA.fullName}`;
  });

  const [copied, setCopied] = useState(false);

  const handleApplyPreset = (preset: typeof PROFILE_DATA.coverLetterPresets[0]) => {
    setJobTitle(preset.role);
    setCompany(preset.company);
    setJobDescription(preset.description);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle,
          company,
          jobDescription,
          tone,
          candidateName: PROFILE_DATA.fullName,
          email: PROFILE_DATA.email,
          location: PROFILE_DATA.location
        })
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el servicio de generación');
      }

      const data = await response.json();
      if (data.coverLetter) {
        setGeneratedLetter(data.coverLetter);
      }
    } catch (err) {
      console.warn('Fallback to local high quality generator:', err);
      const dateFormatted = new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      const localLetter = `${PROFILE_DATA.fullName}
Torrijos (Toledo) · Email: ${PROFILE_DATA.email}
Carnet B y vehículo propio | Disponibilidad inmediata

${dateFormatted}

A la atención del Departamento de Selección de Personal
${company || 'Empresa Empleadora'}
Referencia: Candidatura al puesto de ${jobTitle}

Estimado/a responsable de selección:

Le escribo para presentar formalmente mi candidatura al puesto de ${jobTitle} en ${company || 'su compañía'}. Mi experiencia profesional aunando la administración de empresas de distribución y la gestión comercial directa, junto con mi reciente especialización de 120 horas en Inteligencia Artificial aplicada a la oficina, me posicionan para aportar solvencia y eficiencia inmediata a su departamento.

Mi formación como Técnico en Administración y Gestión de Empresas (FPGM) se complementa con años de gestión real como Auxiliar Administrativa y Gerente en Distribución de Aves Hnos. Carrillo, S.L., y en Distribuciones García, S.L. En dichos puestos gestioné íntegramente la facturación, albaranes, pedidos diarios, atención telefónica, archivo y supervisión de existencias en almacén. Por otra parte, mi experiencia en venta directa y en Seguros Ocaso me enseñó a tratar a cada cliente con empatía, resolviendo incidencias y construyendo relaciones de confianza.

Quisiera destacar especialmente mi Curso Superior de 120 horas en Inteligencia Artificial (IA) aplicada, gracias al cual utilizo herramientas avanzadas para optimizar la confección de documentos, depurar bases de datos y agilizar procedimientos diarios, aportando modernidad y ahorro de tiempo al flujo administrativo.

Cuento con vehículo propio, carnet de conducir B y plena disponibilidad para incorporarme cuando lo estimen conveniente.

Será un placer mantener una entrevista personal con ustedes para profundizar en mi candidatura.

Cordialmente,

${PROFILE_DATA.fullName}`;
      setGeneratedLetter(localLetter);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedLetter], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Carta_Presentacion_Ana_Carrillo_${jobTitle.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrintLetter = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Carta de Presentación - ${PROFILE_DATA.fullName}</title>
          <style>
            body {
              font-family: 'Georgia', serif;
              line-height: 1.6;
              color: #222;
              padding: 40px;
              max-width: 800px;
              margin: 0 auto;
              white-space: pre-wrap;
              font-size: 13pt;
            }
            .header-tag {
              border-bottom: 2px solid #C44D6E;
              padding-bottom: 12px;
              margin-bottom: 25px;
            }
          </style>
        </head>
        <body>
          <div class="header-tag">
            <h2 style="margin:0; font-family:'Georgia', serif; color:#8C2E46;">${PROFILE_DATA.fullName}</h2>
            <div style="font-size:10pt; color:#666; margin-top:4px;">
              ${PROFILE_DATA.headline} · Torrijos (Toledo) · ${PROFILE_DATA.email}
            </div>
          </div>
          <div>${generatedLetter.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FDF0F3] border border-[#F5CAD6] rounded-full text-xs font-semibold text-[#A33452] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C44D6E]" />
            <span>Herramienta Inteligente de Redacción</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2D2526] font-medium tracking-tight">
            Generador de Cartas de Presentación
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#6E5D61]">
            Redacte y personalice cartas formales para cualquier oferta de empleo.
            Destaca la trayectoria de Ana en empresas de distribución y su especialización de 120 horas en IA.
          </p>
        </div>

        {/* Presets bar */}
        <div className="mb-8">
          <span className="block text-xs uppercase font-bold tracking-wider text-[#7A666B] mb-2.5 text-center sm:text-left">
            Seleccionar Oferta de Ejemplo:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PROFILE_DATA.coverLetterPresets.map((preset, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleApplyPreset(preset)}
                className="text-left p-3.5 rounded-2xl bg-[#FFFDF9] hover:bg-[#FDF2F5] border border-[#EBE0D2] hover:border-[#F2CAD5] transition-all group shadow-2xs cursor-pointer"
              >
                <span className="block text-[11px] font-bold text-[#A63654] uppercase tracking-wider mb-0.5">
                  {preset.accent}
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-[#2D2526] group-hover:text-[#8C2E46] transition-colors line-clamp-1">
                  {preset.title}
                </span>
                <span className="block text-[11px] text-[#7A6B6E] mt-1 line-clamp-1">
                  {preset.company}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#F2E8DC] pb-3">
              <h2 className="font-serif text-lg font-semibold text-[#2D2526] flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#A63654]" />
                <span>Parámetros de la Oferta</span>
              </h2>
              <span className="text-[11px] text-[#8A797D]">Personalizable</span>
            </div>

            {/* Puesto */}
            <div>
              <label className="block text-xs font-semibold text-[#3D3033] mb-1.5 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#A63654]" />
                <span>Puesto o Cargo a Postular</span>
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Ej. Auxiliar Administrativo / Gestor Comercial"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all"
              />
            </div>

            {/* Empresa */}
            <div>
              <label className="block text-xs font-semibold text-[#3D3033] mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#A63654]" />
                <span>Nombre de la Empresa Destinataria</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Ej. Empresa de Distribución / Logística"
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all"
              />
            </div>

            {/* Requisitos */}
            <div>
              <label className="block text-xs font-semibold text-[#3D3033] mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#A63654]" />
                <span>Requisitos de la oferta / Puntos a resaltar</span>
              </label>
              <textarea
                rows={4}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Pegue aquí el texto de la oferta o los requisitos clave..."
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-[#FAF6F0] rounded-xl border border-[#E5D7C7] focus:outline-hidden focus:ring-2 focus:ring-[#E58097]/40 focus:border-[#C44D6E] transition-all resize-y"
              />
            </div>

            {/* Tono */}
            <div>
              <label className="block text-xs font-semibold text-[#3D3033] mb-1.5">
                Tono de Comunicación
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setTone('profesional')}
                  className={`py-2 px-2 rounded-lg font-medium transition-all text-center border cursor-pointer ${
                    tone === 'profesional'
                      ? 'bg-[#FBE5EB] text-[#8F2743] border-[#F2CAD5] shadow-2xs'
                      : 'bg-[#FAF6F0] text-[#69585B] border-[#E8DACB]'
                  }`}
                >
                  Profesional
                </button>
                <button
                  type="button"
                  onClick={() => setTone('cercano')}
                  className={`py-2 px-2 rounded-lg font-medium transition-all text-center border cursor-pointer ${
                    tone === 'cercano'
                      ? 'bg-[#FBE5EB] text-[#8F2743] border-[#F2CAD5] shadow-2xs'
                      : 'bg-[#FAF6F0] text-[#69585B] border-[#E8DACB]'
                  }`}
                >
                  Cercano
                </button>
                <button
                  type="button"
                  onClick={() => setTone('comercial')}
                  className={`py-2 px-2 rounded-lg font-medium transition-all text-center border cursor-pointer ${
                    tone === 'comercial'
                      ? 'bg-[#FBE5EB] text-[#8F2743] border-[#F2CAD5] shadow-2xs'
                      : 'bg-[#FAF6F0] text-[#69585B] border-[#E8DACB]'
                  }`}
                >
                  Comercial
                </button>
              </div>
            </div>

            {/* Botón de Generación */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3 bg-gradient-to-r from-[#B54564] to-[#993450] hover:from-[#A13955] hover:to-[#842740] disabled:opacity-70 text-white rounded-xl font-medium text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#FEDEE7]" />
                  <span>Redactando carta con IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#FEDEE7]" />
                  <span>Generar Carta Personalizada</span>
                </>
              )}
            </button>

            <div className="p-3 bg-[#FAF5EE] rounded-xl border border-[#EDE2D4] text-[11px] text-[#78676B] flex items-center gap-2">
              <BadgeAlert className="w-4 h-4 text-[#A63654] shrink-0" />
              <span>
                Incluye automáticamente el Curso de IA (120h), FPGM, experiencia en distribución y carnet de conducir.
              </span>
            </div>
          </div>

          {/* Right Column: Letter Display & Editor */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl border border-[#EBE0D2] p-6 sm:p-8 shadow-xs flex flex-col justify-between min-h-[580px]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F2E8DC] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B54564]" />
                  <span className="font-serif text-lg font-semibold text-[#2D2526]">
                    Carta de Presentación Redactada
                  </span>
                  <span className="text-[10px] bg-[#FBE5EB] text-[#A63654] px-2 py-0.5 rounded-full font-semibold border border-[#F2CAD5]">
                    Editable
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleCopy}
                    className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-[#483A3C] bg-[#FAF5EE] hover:bg-[#FDF0F3] hover:text-[#8F2743] border border-[#E6D7C7] hover:border-[#F2CAD5] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    title="Copiar texto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="hidden sm:inline text-emerald-700 font-semibold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#A63654]" />
                        <span className="hidden sm:inline">Copiar</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handlePrintLetter}
                    className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-[#483A3C] bg-[#FAF5EE] hover:bg-[#FDF0F3] hover:text-[#8F2743] border border-[#E6D7C7] hover:border-[#F2CAD5] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    title="Imprimir con membrete formal"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#A63654]" />
                    <span className="hidden sm:inline">PDF / Imprimir</span>
                  </button>

                  <button
                    onClick={handleDownloadTxt}
                    className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-[#483A3C] bg-[#FAF5EE] hover:bg-[#FDF0F3] hover:text-[#8F2743] border border-[#E6D7C7] hover:border-[#F2CAD5] rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    title="Descargar archivo .txt"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#A63654]" />
                    <span className="hidden sm:inline">Descargar .txt</span>
                  </button>
                </div>
              </div>

              {/* Textarea */}
              <div className="relative">
                <textarea
                  value={generatedLetter}
                  onChange={(e) => setGeneratedLetter(e.target.value)}
                  className="w-full h-[450px] p-4 bg-[#FAF7F2]/60 rounded-2xl border border-[#EDE2D4] font-serif text-sm leading-relaxed text-[#2D2325] focus:outline-hidden focus:ring-1 focus:ring-[#C44D6E] resize-none"
                  placeholder="La carta generada aparecerá aquí..."
                />
                <span className="absolute bottom-3 right-3 text-[10px] text-[#8C7A7E] bg-white/80 px-2.5 py-0.5 rounded-md border border-[#EAE0D4] pointer-events-none flex items-center gap-1">
                  <Edit3 className="w-3 h-3 text-[#B54564]" />
                  <span>Puede editar directamente cualquier párrafo</span>
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2E8DC] flex flex-wrap items-center justify-between text-xs text-[#7B6A6E] gap-2">
              <span className="italic">
                Preparada para presentar ante empresas de distribución, logística o administración general.
              </span>
              <button
                onClick={handleGenerate}
                className="text-xs text-[#A63654] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Regenerar otra versión</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
