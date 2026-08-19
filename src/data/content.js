// ============================================================
// ZIGTEC — Contenido central editable
// Edita aquí: textos, teléfonos, productos, cursos, planes...
// ============================================================

export const site = {
  name: 'ZIGTEC',
  tagline: 'Ingeniería que no admite tolerancias en calidad.',
  description:
    'Especialistas en máquinas CNC: venta, instalación, mantenimiento, reparación y capacitación. Ingeniería de precisión con respuesta en 24 horas.',
  phone: '+51 999 999 999',          // <-- EDITA
  phoneDisplay: '+51 999 999 999',
  whatsapp: '51999999999',          // formato internacional sin +
  email: 'ventas@zigtec.pe',         // <-- EDITA
  address: 'Av. Industrial 1234, Ate, Lima – Perú', // <-- EDITA
  hours: 'Lun – Vie: 8:00 – 18:00 · Sáb: 8:00 – 13:00',
};

export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Productos', href: '/productos' },
  { label: 'Cursos', href: '/cursos' },
  { label: 'Mantenimiento', href: '/mantenimiento' },
  { label: 'Contacto', href: '/contacto' },
];

export const hero = {
  badge: 'INGENIERÍA DE PRECISIÓN · CNC',
  title: 'Precisión al',
  titleHighlight: 'milésimo.',
  titleEnd: 'Entrega en 48 horas.',
  subtitle: '5 Ejes · ±0.002 mm · Respuesta 24 h',
  cta: 'SOLICITAR COTIZACIÓN',
  secondary: 'VER MÁQUINAS',
  coordinates: 'X: 340.000  Y: 120.500  Z: 45.000',
};

export const stats = [
  { value: 0.001, decimals: 3, suffix: ' mm', label: 'Tolerancia de precisión' },
  { value: 5, decimals: 0, suffix: '', label: 'Ejes simultáneos' },
  { value: 48, decimals: 0, suffix: ' h', label: 'Tiempo de cotización' },
  { value: 15, decimals: 0, suffix: '+', label: 'Años de experiencia' },
];

export const services = [
  {
    icon: 'machine',
    title: 'Venta de Máquinas CNC',
    description:
      'Centros de mecanizado de 3, 4 y 5 ejes, tornos CNC y máquinas de corte. Asesoría técnica para seleccionar la máquina exacta para su producción.',
    specs: ['3 / 4 / 5 ejes', 'Husillo 12.000 RPM', 'Control FANUC / Siemens'],
    link: '/productos',
  },
  {
    icon: 'gear',
    title: 'Servicios Técnicos y Soluciones',
    description:
      'Diagnóstico, instalación, puesta en marcha y optimización de procesos. Un solo interlocutor técnico desde el diagnóstico hasta la entrega.',
    specs: ['Diagnóstico 24h', 'Instalación llave en mano', 'Optimización CAM'],
    link: '/servicios',
  },
  {
    icon: 'training',
    title: 'Cursos y Capacitaciones',
    description:
      'Capacitación certificada en operación y programación de máquinas CNC. Práctica en máquina real, no solo teoría.',
    specs: ['Control FANUC', '3 días intensivos', 'Certificación incluida'],
    link: '/cursos',
  },
  {
    icon: 'wrench',
    title: 'Reparación y Mantenimiento',
    description:
      'Planes preventivos, correctivos y predictivos. Reducimos su downtime y protegemos la inversión de su maquinaria.',
    specs: ['Respuesta 24h', 'Refacciones originales', 'Reportes técnicos'],
    link: '/mantenimiento',
  },
];

export const products = [
  {
    name: 'Centro de Mecanizado 5 Ejes',
    model: 'ZT-5X 500',
    image: '/images/cnc-5axis.svg',
    specs: ['5 ejes simultáneos', 'Mesa Ø 500 mm', 'Husillo 12.000 RPM', '±0.002 mm'],
    category: 'FRESADO',
  },
  {
    name: 'Torno CNC de Producción',
    model: 'ZT-TL 300',
    image: '/images/cnc-lathe.svg',
    specs: ['Ø máx. 300 mm', 'Ejes X/Z/C', 'Husillo 4.500 RPM', 'Barra Ø 65 mm'],
    category: 'TORNEADO',
  },
  {
    name: 'Centro Vertical 3 Ejes',
    model: 'ZT-VM 850',
    image: '/images/cnc-mill.svg',
    specs: ['Recorrido 850×520 mm', 'Mesa 1.000×500 mm', 'Cambiador 24 herramientas', 'FANUC 0i-MF'],
    category: 'FRESADO',
  },
  {
    name: 'Corte por Plasma CNC',
    model: 'ZT-PL 3000',
    image: '/images/cnc-plasma.svg',
    specs: ['Área 3.000×1.500 mm', 'Plasma Hypertherm', 'Corte 6–25 mm', 'THC automático'],
    category: 'CORTE',
  },
];

export const process = [
  {
    step: '01',
    title: 'Consulta',
    description: 'Entendemos su necesidad. Nos cuenta su proceso, material y producción esperada.',
  },
  {
    step: '02',
    title: 'Diagnóstico',
    description: 'Análisis con precisión: revisamos la máquina, el taller o el plano que necesita.',
  },
  {
    step: '03',
    title: 'Solución',
    description: 'Diseñamos la solución: selección de equipo, cotización o plan de trabajo.',
  },
  {
    step: '04',
    title: 'Implementación',
    description: 'Ejecutamos con excelencia: instalación, puesta en marcha y pruebas.',
  },
  {
    step: '05',
    title: 'Seguimiento',
    description: 'Acompañamiento continuo: mantenimiento preventivo y soporte técnico.',
  },
];

export const courses = [
  {
    level: 'Básico',
    levelColor: 'steelblue',
    title: 'Operación de Máquinas CNC',
    date: 'Inicio: 10 Mar',
    duration: '3 días · 24 h',
    seats: '8 cupos',
    description: 'Fundamentos de operación, cero de piezas y primeros mecanizados en máquina real.',
    featured: false,
  },
  {
    level: 'Intermedio',
    levelColor: 'copper',
    title: 'Programación G-Code',
    date: 'Inicio: 24 Mar',
    duration: '4 días · 32 h',
    seats: '6 cupos',
    description: 'Programación manual y en el control FANUC. Ciclos fijos y compensaciones.',
    featured: true,
  },
  {
    level: 'Avanzado',
    levelColor: 'engorange',
    title: 'CAM + Mecanizado 5 Ejes',
    date: 'Inicio: 07 Abr',
    duration: '5 días · 40 h',
    seats: '5 cupos',
    description: 'Trayectorias CAM, simulación y mecanizado multi-eje en centros de alta gama.',
    featured: false,
  },
];

export const plans = [
  {
    name: 'Preventivo',
    frequency: 'Bimensual',
    recommended: false,
    price: 'S/ 1,200',
    features: [
      { text: 'Inspección de 40 puntos', included: true },
      { text: 'Lubricación y ajustes', included: true },
      { text: 'Limpieza de filtros', included: true },
      { text: 'Reporte técnico', included: true },
      { text: 'Atención prioritaria 72h', included: false },
      { text: 'Repuestos al costo -10%', included: false },
    ],
  },
  {
    name: 'Integral',
    frequency: 'Mensual',
    recommended: true,
    price: 'S/ 2,400',
    features: [
      { text: 'Inspección de 60 puntos', included: true },
      { text: 'Lubricación y ajustes', included: true },
      { text: 'Limpieza de filtros', included: true },
      { text: 'Reporte técnico', included: true },
      { text: 'Atención prioritaria 24h', included: true },
      { text: 'Repuestos al costo -10%', included: true },
    ],
  },
  {
    name: 'Premium',
    frequency: 'Semanal',
    recommended: false,
    price: 'S/ 4,500',
    features: [
      { text: 'Inspección de 80 puntos', included: true },
      { text: 'Monitoreo predictivo', included: true },
      { text: 'Limpieza profunda', included: true },
      { text: 'Reporte técnico', included: true },
      { text: 'Atención prioritaria 12h', included: true },
      { text: 'Ingeniero dedicado', included: true },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'Redujeron nuestro downtime de 18% a 4% en el primer año de contrato. La precisión de su diagnóstico es notable.',
    name: 'Ing. Carlos Mendoza',
    role: 'Jefe de Mantenimiento · Industrias Andinas',
  },
  {
    quote:
      'Instalaron nuestro centro de mecanizado de 5 ejes en tiempo récord y capacitaron a todo nuestro equipo. Cero observaciones en la primera auditoría.',
    name: 'Ing. Lucía Ramírez',
    role: 'Gerente de Producción · Metalmecánica del Sur',
  },
];

export const certifications = ['ISO 9001', 'ISO 14001', 'ISO 45001', 'FANUC Certified', 'Siemens Partner'];

export const clientLogos = ['Aceros del Norte', 'Metalúrgica Andina', 'Industrias Ramírez', 'Talleres Vega', 'Corporación Fierro', 'Precisur'];

export const contactInfo = {
  whatsappCta: 'COTIZAR POR WHATSAPP',
  emailCta: 'ENVIAR POR EMAIL',
  formTitle: 'Reciba una cotización en 24 horas, con precisión garantizada',
  uploadHint: 'Arrastre el plano aquí (DXF / DWG / PDF) o haga clic para seleccionar',
};


