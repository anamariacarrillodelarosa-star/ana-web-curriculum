import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

// API endpoint for AI cover letter generation
app.post('/api/generate-cover-letter', async (req: Request, res: Response) => {
  try {
    const {
      jobTitle = 'Auxiliar Administrativa / Gestora Comercial',
      company = 'Empresa del Sector',
      jobDescription = '',
      tone = 'profesional',
      candidateName = 'Ana María Carrillo De La Rosa',
      email = 'anamariacarrillodelarosa@gmail.com',
      location = 'Torrijos (Toledo)'
    } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    const isValidApiKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim().length > 10);

    if (isValidApiKey) {
      try {
        const ai = new GoogleGenAI();
        const prompt = `
Eres un redactor profesional de cartas de presentación y experto en reclutamiento de talento en España.
Tu objetivo es redactar una carta de presentación impecable, elegante, persuasiva y personalizada para la candidata ${candidateName}.

INFORMACIÓN OFICIAL DE LA CANDIDATA:
- Nombre: ${candidateName}
- Correo electrónico: ${email}
- Ubicación: ${location} (con carnet de conducir B y vehículo propio, disponibilidad geográfica en la comarca y Toledo).
- Formación clave:
  1. Curso Superior de Inteligencia Artificial (IA) aplicada a la gestión empresarial y productividad (120 horas lectivas). Manejo de herramientas de IA generativa para automatización de tareas administrativas, redacción documental, optimización de flujos y análisis ágil.
  2. Formación Profesional de Grado Medio (FPGM) en Administración y Gestión de Empresas (facturación, albaranes, tesorería, archivo y atención a clientes).
- Experiencia laboral destacada:
  - Auxiliar administrativa y gerente en empresa familiar (Distribución de aves Hnos. Carrillo, S.L.): control de stock, gestión integral de pedidos, emisión y control de albaranes y facturas, cobros, atención directa a clientes y coordinación de rutas de reparto.
  - Auxiliar administrativa en Distribuciones García, S.L.: recepción y verificación de albaranes, facturación, atención telefónica y control administrativo.
  - Asesora comercial en venta directa y Agente Comercial en Seguros Ocaso: captación, fidelización, empatía, escucha activa y resolución ágil de incidencias.
- Habilidades: resolución eficaz de problemas, trato cercano y empático con clientes, dominio de Microsoft Office (Excel, Word, PowerPoint), adaptación inmediata a ERPs de gestión y software empresarial, y aplicación de IA para ahorrar tiempo en la oficina.

DATOS DE LA OFERTA DE EMPLEO A LA QUE SE POSTULA:
- Puesto / Cargo: ${jobTitle}
- Empresa destinataria: ${company}
- Descripción / Requisitos de la oferta: ${jobDescription || 'Puesto en administración y/o gestión comercial con tareas de atención a clientes, gestión de documentos y organización.'}
- Tono deseado: ${tone} (profesional, convincente, empático y orientado a aportar valor real desde el primer día).

INSTRUCCIONES DE REDACCIÓN:
1. Redacta la carta con una estructura formal y elegante (Encabezado con datos de contacto, saludo profesional, introducción que capte la atención, cuerpo destacando cómo la experiencia en distribución/administración y el curso de IA de 120 horas benefician directamente a la empresa, llamada a la acción elegante para concertar una entrevista, y despedida cordial).
2. Es indispensable mencionar de manera natural y atractiva el Curso de IA de 120 horas como un factor diferenciador que aporta agilidad, automatización y modernidad a la empresa.
3. Menciona la disponibilidad inmediata, carnet de conducir y vehículo propio.
4. Redacta en primera persona ("Estimado/a responsable de selección...", "Me dirijo a ustedes...").
5. El texto debe ser fluido, natural y en perfecto español de España, sin clichés artificiales.
`;

        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('AI response timeout')), 7000)
        );

        const genPromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: prompt
        });

        const aiResponse: any = await Promise.race([genPromise, timeoutPromise]);
        const letterText = aiResponse.text || '';
        if (letterText.trim()) {
          return res.json({
            success: true,
            coverLetter: letterText,
            source: 'gemini-3.8-flash'
          });
        }
      } catch (genError) {
        console.warn('Gemini API call failed or timed out, generating via template:', genError);
      }
    }

    // Algorithmic high-quality fallback generator
    const dateFormatted = new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const fallbackLetter = `
${candidateName}
${location}
Email: ${email}
Carnet B y vehículo propio | Disponibilidad inmediata

${dateFormatted}

A la atención del Departamento de Selección de Personal
${company}
Referencia: Candidatura al puesto de ${jobTitle}

Estimado/a responsable de selección:

Me dirijo a ustedes con gran interés y motivación para presentar mi candidatura a la posición de ${jobTitle} en ${company}${jobDescription ? ', tras revisar con detenimiento los requisitos y objetivos descritos en su oferta' : ''}.

Cuento con una sólida formación en Administración y Gestión de Empresas (FPGM) y una trayectoria contrastada en la gestión operativa y comercial de empresas del sector de distribución y servicios. En mi etapa como auxiliar administrativa y gerente en Distribución de Aves Hnos. Carrillo, S.L., y anteriormente en Distribuciones García, S.L., he asumido con éxito la responsabilidad de la facturación diaria, emisión y control de albaranes, supervisión exhaustiva de existencias y resolución ágil de incidencias. Asimismo, mi experiencia en venta directa y en Seguros Ocaso me ha proporcionado una contrastada capacidad para la negociación, el asesoramiento empático y la fidelización duradera de clientes.

Como elemento diferenciador clave, he completado recientemente un Curso Superior de Inteligencia Artificial (IA) aplicada a la gestión empresarial de 120 horas lectivas. Esta especialización me permite integrar herramientas de IA generativa para automatizar tareas repetitivas de oficina, agilizar la redacción documental, optimizar la gestión de datos administrativos y elevar la productividad diaria, combinando el rigor administrativo tradicional con las ventajas del entorno digital actual.

Resido en Torrijos (Toledo), dispongo de carnet de conducir B, vehículo propio y total flexibilidad para desplazarme, así como disponibilidad para una incorporación inmediata.

Estaría encantada de mantener una entrevista personal para ampliar cualquier detalle sobre mi trayectoria y exponer cómo mis competencias pueden aportar valor inmediato a ${company}.

Agradeciendo de antemano su tiempo y consideración, reciban un cordial saludo.

Atentamente,

${candidateName}
`.trim();

    return res.json({
      success: true,
      coverLetter: fallbackLetter,
      source: 'smart-template'
    });
  } catch (error: any) {
    console.error('Error generating cover letter:', error);
    return res.status(500).json({
      success: false,
      error: 'No se pudo generar la carta de presentación. Por favor, inténtelo de nuevo.'
    });
  }
});

// Configure Vite or static files
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    // In development, hook up Vite dev server middlewares
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
