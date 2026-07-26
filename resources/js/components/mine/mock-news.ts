/**
 * Represents a single news article shown on the landing page feed.
 */
export type Article = {
  id: string
  title: string
  excerpt: string
  category: string
  location: string
  author: string
  minutesAgo: number
  readMinutes: number
  featured?: boolean
}

/**
 * Mock articles used to render the news feed in the prototype.
 * In production these would come from your Laravel API via Inertia props.
 */
export const articles: Article[] = [
  {
    id: '1',
    title: 'Festival de verano reunirá a más de 20 bandas locales',
    excerpt: 'El evento gratuito se llevará a cabo este sábado con actividades para toda la familia.',
    category: 'events',
    location: 'Plaza Principal',
    author: 'Laura Torres',
    minutesAgo: 8,
    readMinutes: 3,
    featured: true,
  },
  {
    id: '2',
    title: 'Cabildo aprueba incentivos para pequeños negocios',
    excerpt: 'La propuesta contempla apoyos económicos y capacitación para emprendedores locales.',
    category: 'politics',
    location: 'Centro',
    author: 'María López',
    minutesAgo: 15,
    readMinutes: 4,
  },
  {
    id: '3',
    title: 'Pronostican lluvias durante la tarde en gran parte de la ciudad',
    excerpt: 'Protección Civil recomienda conducir con precaución y evitar zonas inundables.',
    category: 'weather',
    location: 'Ciudad',
    author: 'Ana Pérez',
    minutesAgo: 22,
    readMinutes: 2,
  },
  {
    id: '4',
    title: 'Universidad inaugura laboratorio de innovación tecnológica',
    excerpt: 'El espacio estará abierto para estudiantes y proyectos de emprendimiento.',
    category: 'education',
    location: 'Campus Norte',
    author: 'Miguel Ortiz',
    minutesAgo: 37,
    readMinutes: 5,
  },
  {
    id: '5',
    title: 'Abren convocatoria para voluntarios del banco de alimentos',
    excerpt: 'La organización busca personas que apoyen en la recolección y distribución de despensas.',
    category: 'community',
    location: 'Colonia Juárez',
    author: 'Andrea Ruiz',
    minutesAgo: 48,
    readMinutes: 3,
  },
  {
    id: '6',
    title: 'Nueva cafetería de especialidad abre sus puertas en el centro histórico',
    excerpt: 'El establecimiento ofrece café de productores locales y pan recién horneado.',
    category: 'food',
    location: 'Centro Histórico',
    author: 'Patricia Gómez',
    minutesAgo: 65,
    readMinutes: 2,
  },
  {
    id: '7',
    title: 'Concierto sinfónico al aire libre cambia de horario',
    excerpt: 'La organización informó que el evento iniciará una hora más tarde debido al clima.',
    category: 'events',
    location: 'Parque Bicentenario',
    author: 'Diego Flores',
    minutesAgo: 82,
    readMinutes: 2,
  },
  {
    id: '8',
    title: 'Cierran parcialmente el bulevar Independencia por obras',
    excerpt: 'Se recomienda utilizar vías alternas durante las próximas 72 horas.',
    category: 'transit',
    location: 'Bulevar Independencia',
    author: 'Fernanda Castro',
    minutesAgo: 95,
    readMinutes: 2,
  },
  {
    id: '9',
    title: 'Diputados presentan iniciativa para fortalecer la transparencia municipal',
    excerpt: 'La propuesta busca facilitar el acceso ciudadano a la información pública.',
    category: 'politics',
    location: 'Congreso Estatal',
    author: 'Javier Hernández',
    minutesAgo: 120,
    readMinutes: 4,
  },
  {
    id: '10',
    title: 'Feria del Libro anuncia a sus primeros invitados internacionales',
    excerpt: 'Autores de cinco países participarán en conferencias, talleres y firmas de libros.',
    category: 'events',
    location: 'Centro Cultural',
    author: 'Sofía Ramírez',
    minutesAgo: 155,
    readMinutes: 3,
  },
  {
    id: '11',
    title: 'Escuela pública recibe reconocimiento por proyecto ambiental',
    excerpt: 'Los alumnos desarrollaron un sistema para reutilizar agua de lluvia en el plantel.',
    category: 'education',
    location: 'Escuela Benito Juárez',
    author: 'Carlos Mendoza',
    minutesAgo: 188,
    readMinutes: 4,
  },
  {
    id: '12',
    title: 'Restaurante local presenta menú inspirado en ingredientes de temporada',
    excerpt: 'La nueva propuesta incluye platillos elaborados con productos de agricultores de la región.',
    category: 'food',
    location: 'Zona Centro',
    author: 'Ricardo Morales',
    minutesAgo: 230,
    readMinutes: 3,
  },
  {
    id: '13',
    title: 'Organizadores confirman carrera nocturna para el próximo mes',
    excerpt: 'El recorrido incluirá circuitos de 5 y 10 kilómetros con actividades recreativas.',
    category: 'events',
    location: 'Malecón',
    author: 'Daniel Cruz',
    minutesAgo: 270,
    readMinutes: 2,
  },
  {
    id: '14',
    title: 'Autoridades analizan ampliar rutas del transporte público',
    excerpt: 'El proyecto busca conectar nuevas zonas habitacionales con el centro de la ciudad.',
    category: 'politics',
    location: 'Palacio Municipal',
    author: 'Valeria Sánchez',
    minutesAgo: 315,
    readMinutes: 5,
  },
  {
    id: '15',
    title: 'Fin de semana con temperaturas frescas y cielo parcialmente nublado',
    excerpt: 'Meteorólogos prevén condiciones agradables para actividades al aire libre.',
    category: 'weather',
    location: 'Región',
    author: 'José Salinas',
    minutesAgo: 360,
    readMinutes: 1,
  },
  {
    id: '16',
    title: 'Festival gastronómico reunirá a más de 40 restaurantes locales',
    excerpt: 'Los asistentes podrán degustar cocina tradicional, internacional y postres artesanales.',
    category: 'food',
    location: 'Parque Central',
    author: 'Elena Vargas',
    minutesAgo: 420,
    readMinutes: 4,
  },
]

/** Category chips shown in the filter/nav strip. */
export const categories: string[] = [
  'all',
  'politics',
  'community',
  'events',
  'education',
  'transit',
  'weather',
  'food',
]
