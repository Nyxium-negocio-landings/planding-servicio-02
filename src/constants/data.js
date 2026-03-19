// constants/data.js - Datos centralizados de la aplicación

export const NAV_LINKS = [
  { label: 'Fumigaciones',    to: '/' },
  { label: 'Control De Plagas', to: '/control-de-plagas' },
  { label: 'Plaga',           to: '/plaga' },
  { label: 'Blog',            to: '/blog' },
  { label: 'Servicios',       to: '/servicios' },
  { label: 'Testimonios',     to: '/testimonios' },
  { label: 'Contacto',        to: '/contacto' },
]

export const SERVICES_LIST = [
  'Fumigaciones en Hermosillo',
  'Fumigaciones ecológicas',
  'Fumigación de termitas',
]

export const CONTACT_INFO = {
  phone: '(662) 124 - 8161',
  address: 'Jaime Nuno #24',
  email: 'info@fumigacioneshermosillo.com',
}

export const WHATSAPP_NUMBER = '51982132639'

export const PLAGAS_LIST_LEFT = [
  'Viudas Negras',
  'Termitas de Madera',
  'Ratones',
  'Mosquitos de Dengue',
  'Hormigas',
  'Chinches',
  'Araña Violinista',
  'Termitas',
]

export const PLAGAS_LIST_RIGHT = [
  'Termitas de Madera Seca',
  'Termita de Tierra',
  'Ratas',
  'Mosquitos',
  'Cucarachas',
  'Arañas',
  'Alocranes',
]

export const CONTROL_PLAGAS_LIST = [
  'Tubería subterránea antitermitas',
  'Tratamiento en madera',
  'Tratamiento contra termitas',
  'Manejo integrado de plagas',
  'Detección, control y eliminación de termitas',
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: '¿Tienes Termitas En Casa Y No Sabes Cómo Combatirlas? ¡Llama A EcoPlagas!',
    date: 'agosto 12, 2023',
    author: 'Raúl Rojas',
    excerpt: 'La fumigación para termitas es vital para cuidar nuestras propiedades de daños graves. ¡Explora cómo deshacerte de ellas con EcoPlagas!',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 2,
    title: 'Eliminación Efectiva De Garrapatas: Todo Lo Que Necesitas Saber Sobre Nuestra Fumigación',
    date: 'agosto 5, 2023',
    author: 'Raúl Rojas',
    excerpt: '¿Fumigacion para garrapatas? EcoPlagas te presenta la información completa sobre nuestro servicio de eliminación de garrapatas.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 3,
    title: 'Los 3 Beneficios Principales De Una Fumigación Para Cucarachas Eficiente',
    date: 'julio 31, 2023',
    author: 'Raúl Rojas',
    excerpt: 'Conoce los principales beneficios de contratar un servicio profesional de fumigación para cucarachas y mantén tu hogar libre de estas plagas.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=280&fit=crop&auto=format',
  },
  {
    id: 4,
    title: 'Consejos De Expertos: Cómo Realizar Una Fumigación Efectiva Para Eliminar Cucarachas',
    date: 'junio 28, 2023',
    author: 'Raúl Rojas',
    excerpt: 'Descubre los consejos de nuestros expertos para realizar una fumigación efectiva y eliminar definitivamente las cucarachas de tu hogar o negocio.',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=280&fit=crop&auto=format',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'María González',
    rating: 5,
    text: 'Excelente servicio, muy profesionales y puntuales. Resolvieron el problema de termitas en mi casa de forma rápida y efectiva. Sin duda los volvería a llamar.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: 2,
    name: 'Carlos Martínez',
    rating: 5,
    text: 'Muy recomendados. Vinieron a fumigar mi negocio y el resultado fue increíble. Sin cucarachas desde entonces. Atención rápida y eficiente.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 3,
    name: 'Ana López',
    rating: 5,
    text: 'Servicio de calidad a un precio justo. El equipo es amable, explica todo el proceso y usa productos seguros. 100% recomendados.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 4,
    name: 'Roberto Sánchez',
    rating: 5,
    text: 'Tuvimos un problema grave de ratones en el almacén y EcoPlagas lo resolvió en una sola visita. Técnicos muy profesionales y puntuales.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 5,
    name: 'Laura Pérez',
    rating: 5,
    text: 'Llamé por una infestación de arañas y llegaron ese mismo día. Muy eficientes y el seguimiento post-servicio fue excelente.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=56',
  },
  {
    id: 6,
    name: 'Jorge Valenzuela',
    rating: 5,
    text: 'Llevamos 2 años contratando su servicio mensual y nuestra oficina siempre está libre de plagas. Completamente confiables.',
    location: 'Hermosillo, Son.',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
]
