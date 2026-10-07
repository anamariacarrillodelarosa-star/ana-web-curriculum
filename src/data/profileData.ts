export interface Experience {
  id: string;
  role: string;
  company: string;
  type?: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  duration?: string;
  featured?: boolean;
  description: string;
  modules?: string[];
  skillsLearned: string[];
  credentialCode?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const PROFILE_DATA = {
  fullName: "Ana María Carrillo De La Rosa",
  shortName: "Ana Carrillo",
  headline: "Especialista en Administración, Gestión Comercial e IA Aplicada",
  location: "Torrijos, Toledo (España)",
  email: "anamariacarrillodelarosa@gmail.com",
  phone: "+34 600 000 000",
  drivingLicense: "Carnet de conducir B y vehículo propio (Plena disponibilidad y movilidad)",
  availability: "Incorporación inmediata",
  photoUrl: "/foto-perfil.jpg",
  summary:
    "Profesional proactiva y resolutiva con amplia experiencia combinada en administración empresarial, gestión de stock y ventas. Con sólida trayectoria como auxiliar administrativa y gerente en el sector de distribución y seguros, destaco por mi capacidad de organización, empatía comercial y adaptación tecnológica. Recientemente he completado una formación intensiva de 120 horas en Inteligencia Artificial aplicada a la productividad y gestión empresarial, aportando una visión moderna, eficiente e innovadora a cualquier equipo de trabajo.",
  
  keyStrengths: [
    "Formación de 120 horas en IA aplicada a procesos administrativos y gestión empresarial",
    "FPGM en Administración y Gestión de Empresas",
    "Gestión integral de pedidos, albaranes, facturación y control de stock",
    "Experiencia probada en atención al cliente, fidelización y negociación comercial",
    "Torrijos (Toledo) con carnet de conducir B y vehículo propio para total movilidad"
  ],

  education: [
    {
      id: "curso-ia",
      title: "Curso Superior de Inteligencia Artificial (IA) Aplicada a la Gestión y Productividad",
      institution: "Formación Especializada en Nuevas Tecnologías e IA",
      period: "Reciente / Actualizado",
      duration: "120 Horas Lectivas",
      featured: true,
      description:
        "Especialización intensiva de 120 horas orientada a la integración práctica de herramientas de Inteligencia Artificial generativa en la gestión diaria de empresas, automatización de tareas de oficina y análisis eficiente de información.",
      modules: [
        "Prompt Engineering avanzado para resolución de consultas empresariales",
        "Automatización de redacción documental, informes ejecutivos y cartas comerciales",
        "Análisis y depuración de datos administrativos con herramientas de IA",
        "Copilotos de IA integrados en suites ofimáticas (Microsoft Office & Google Workspace)",
        "Optimización de flujos de trabajo, control de stock y atención al cliente mediante IA"
      ],
      skillsLearned: [
        "IA Generativa aplicada",
        "Automatización administrativa",
        "Análisis documental ágil",
        "Productividad asistida por IA",
        "Prompting profesional"
      ]
    },
    {
      id: "fpgm-administracion",
      title: "Formación Profesional de Grado Medio (FPGM) en Administración y Gestión de Empresas",
      institution: "Centro de Formación Profesional Oficial",
      period: "Completado",
      duration: "Ciclo Formativo Oficial",
      featured: false,
      description:
        "Formación reglada orientada a los procesos contables, administrativos, mercantiles y de archivo. Tratamiento informático de la documentación y gestión integral de oficinas.",
      modules: [
        "Gestión administrativa de compraventa y facturación",
        "Tratamiento informático de la información (Ofimática)",
        "Operaciones auxiliares de tesorería y contabilidad",
        "Comunicación empresarial y atención al cliente",
        "Archivo y registro de documentación oficial"
      ],
      skillsLearned: [
        "Facturación y albaranes",
        "Contabilidad básica",
        "Gestión documental",
        "Atención telefónica y presencial",
        "Operativa de oficina"
      ]
    }
  ] as Education[],

  experience: [
    {
      id: "exp-carrillo",
      role: "Auxiliar Administrativa y Gerente",
      company: "Distribución de Aves Hnos. Carrillo, S.L.",
      type: "Empresa familiar",
      period: "Trayectoria consolidada",
      location: "Toledo",
      description:
        "Liderazgo operativo en administración, aprovisionamiento y relación comercial con clientes en empresa de distribución alimentaria.",
      achievements: [
        "Gestión integral de facturación diaria, albaranes, control de caja y cuadre de cuentas.",
        "Supervisión y control minucioso de stock en almacén, minimizando mermas y optimizando rotación.",
        "Trato directo, negociación y fidelización con clientes clave (hostelería, comercios minoristas y distribuidores).",
        "Coordinación de rutas de reparto y resolución ágil de imprevistos logísticos."
      ],
      tags: ["Facturación", "Control de Stock", "Gestión de Almacén", "Atención a Clientes", "Distribución"]
    },
    {
      id: "exp-garcia",
      role: "Auxiliar Administrativa",
      company: "Distribuciones García, S.L.",
      type: "Sector Distribución",
      period: "Etapa profesional",
      location: "Toledo",
      description:
        "Soporte administrativo y operativo en departamento de administración y recepción de mercancías.",
      achievements: [
        "Recepción y verificación documental de albaranes contra pedidos recibidos.",
        "Emisión de facturas a clientes y registro contable de movimientos comerciales.",
        "Atención telefónica de pedidos y gestión de incidencias de entregas.",
        "Manejo diario de herramientas ofimáticas y software específico de gestión empresarial."
      ],
      tags: ["Albaranes", "Contabilidad Auxiliar", "Gestión de Pedidos", "Atención Telefónica", "Ofimática"]
    },
    {
      id: "exp-ocaso",
      role: "Agente Comercial",
      company: "Seguros Ocaso",
      type: "Sector Asegurador",
      period: "Etapa profesional",
      location: "Toledo y comarca",
      description:
        "Asesoramiento técnico-comercial a particulares y pymes sobre pólizas de seguros personales y patrimoniales.",
      achievements: [
        "Captación activa de nuevos clientes mediante asesoramiento empático y adaptado a necesidades reales.",
        "Tramitación de expedientes, cobro de primas y seguimiento de satisfacción post-venta.",
        "Negociación de contratos y resolución de dudas y siniestros con trato cercano y resolutivo."
      ],
      tags: ["Asesoramiento", "Negociación", "Fidelización", "Captación", "Atención Personalizada"]
    },
    {
      id: "exp-directa",
      role: "Comercial de Venta Directa",
      company: "Venta Directa y Representación Comercial",
      type: "Sector Comercial",
      period: "Etapa profesional",
      location: "Toledo",
      description:
        "Prospección de mercado y comercialización directa de productos y servicios con alto componente relacional.",
      achievements: [
        "Desarrollo de habilidades de escucha activa y persuasión orientada a soluciones para el cliente.",
        "Superación continuada de objetivos de ventas y creación de relaciones de confianza duraderas.",
        "Organización autónoma de agenda, visitas y seguimiento de cobros."
      ],
      tags: ["Venta Directa", "Relación con Clientes", "Resolución de Objeciones", "Autonomía"]
    }
  ] as Experience[],

  skillCategories: [
    {
      category: "Administración & Gestión",
      skills: [
        { name: "Facturación y Albaranes", level: 95, highlight: true },
        { name: "Control de Stock y Almacén", level: 90, highlight: true },
        { name: "Gestión Documental y Archivo", level: 90 },
        { name: "Tesorería y Cuadre de Caja", level: 85 },
        { name: "Resolución Ágil de Incidencias", level: 95, highlight: true }
      ]
    },
    {
      category: "Inteligencia Artificial & Software",
      skills: [
        { name: "IA Aplicada a la Gestión (120h)", level: 95, highlight: true },
        { name: "Microsoft Excel (Hojas de cálculo)", level: 90, highlight: true },
        { name: "Microsoft Word & Documentación", level: 90 },
        { name: "PowerPoint & Presentaciones", level: 85 },
        { name: "Software de Facturación & ERPs", level: 88 }
      ]
    },
    {
      category: "Comercial & Trato con Clientes",
      skills: [
        { name: "Atención y Asesoramiento al Cliente", level: 95, highlight: true },
        { name: "Negociación y Cierre de Ventas", level: 90, highlight: true },
        { name: "Fidelización de Cartera", level: 92 },
        { name: "Comunicación Asertiva y Empatía", level: 95 },
        { name: "Trabajo en Equipo y Coordinación", level: 92 }
      ]
    }
  ] as SkillCategory[],

  coverLetterPresets: [
    {
      title: "Auxiliar Administrativo / Gestor Comercial en Distribución",
      company: "Empresa de Distribución y Logística",
      role: "Auxiliar Administrativa / Gestora de Pedidos y Clientes",
      description:
        "Buscamos un perfil polivalente para departamento de administración y ventas en empresa de distribución. Se requiere experiencia en albaranes, facturación, control de stock y atención cercana a clientes.",
      accent: "Distribución y Ventas"
    },
    {
      title: "Administrativa con Competencias en IA y Productividad",
      company: "Empresa Moderna / Gestoría / Despacho",
      role: "Administrativa de Gestión y Soporte Digital",
      description:
        "Se valorará capacidad de adaptación digital, manejo de herramientas de Inteligencia Artificial para agilizar documentos y reportes, gestión de clientes y dominio de Microsoft Office.",
      accent: "IA & Innovación"
    },
    {
      title: "Gestora Comercial y Atención al Cliente",
      company: "Compañía Comercial y de Servicios",
      role: "Asesora Comercial y Gestión Post-Venta",
      description:
        "Puesto orientado a la atención, fidelización y seguimiento de clientes, tramitación de pedidos, gestión de incidencias y venta de servicios.",
      accent: "Comercial & Clientes"
    }
  ]
};
