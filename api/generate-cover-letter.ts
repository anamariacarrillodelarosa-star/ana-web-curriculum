import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      jobTitle = 'Auxiliar Administrativa / Gestora Comercial',
      company = 'Empresa del Sector',
      jobDescription = '',
      tone = 'profesional',
      candidateName = 'Ana María Carrillo De La Rosa',
      email = 'anamariacarrillodelarosa@gmail.com',
      location = 'Torrijos (Toledo)'
    } = req.body || {};

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
1. Redacta la carta con una estructura formal y elegante.
2. Es indispensable mencionar de manera natural y atractiva el Curso de IA de 120 horas como un factor diferenciador que aporta agilidad, automatización y modernidad a la empresa.
3. Menciona la disponibilidad inmediata, carnet de conducir y vehículo propio.
4. Redacta en primera persona en perfecto español de España.
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
        console.warn('Gemini API call failed, generating via template:', genError);
      }
    }

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

Me dirijo a ustedes con gran interés para presentar mi candidatura al puesto de ${jobTitle} en ${company}.

Cuento con titulación oficial en Administración y Gestión de Empresas (FPGM) y amplia experiencia operativa en el sector de la distribución (en empresas como Distribución de Aves Hnos. Carrillo, S.L., y Distribuciones García, S.L.). Asimismo, mi trayectoria comercial en Seguros Ocaso y venta directa me ha dotado de una contrastada vocación de servicio, empatía y orientación al cliente.

Como valor añadido innovador, he completado recientemente un Curso Superior de Inteligencia Artificial (IA) aplicada de 120 horas lectivas, lo que me capacita para optimizar la confección de informes, automatizar tareas repetitivas y acelerar la productividad administrativa.

Dispongo de carnet B, vehículo propio y total disponibilidad para incorporarme de inmediato.

Quedo a su entera disposición para mantener una entrevista personal.

Atentamente,

${candidateName}
`.trim();

    return res.json({
      success: true,
      coverLetter: fallbackLetter,
      source: 'smart-template'
    });
  } catch (error) {
    console.error('Error generating letter:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
