import { signal } from '@angular/core';
import { NextComponent } from '../shared/components/icons/next.component';
import { TailwindComponent } from '../shared/components/icons/tailwind.component';

export interface Experience {
  date: string;
  title: string;
  company: string;
  logo: string;
  description: string;
  link?: string;
}

interface Tag {
  name: string;
  class: string;
  icon: any;
}

export interface Projects {
  title: string;
  description: string;
  github: string;
  link?: string;
  image?: string;
  tags?: Tag[];
}

export const EXPERIENCES = signal<Experience[]>([
  {
    date: 'Actualmente...',
    title: 'Consultor de desarrollo',
    company: 'Sofka Technologies',
    logo: 'assets/logos/sofka.jpeg',
    description:
      'Me enfoco en crear, desarrollar e implementar soluciones tecnológicas diseñadas para impulsar eficazmente los objetivos. Mi especialidad es entender las necesidades únicas de cada cliente y convertir sus metas empresariales en estrategias técnicas precisas y de alto impacto',
    link: 'https://sofka.com.co/index.html',
  },
  {
    date: 'Septiembre 2024',
    title: 'Consultor técnico',
    company: 'Kruger Corp',
    logo: 'assets/logos/krugerCorp.jpeg',
    description:
      'Responsable del desarrollo de aplicaciones web, abarcando diseño, implementación y mantenimiento. Creo interfaces intuitivas, integro servicios backend, optimizo el rendimiento y aseguro la calidad mediante pruebas exhaustivas. También gestiono actualizaciones y garantizo escalabilidad y seguridad.',
    link: 'https://krugercorp.com/',
  },
  {
    date: 'Julio 2022',
    title: 'Software Developer',
    company: 'Creditú',
    logo: 'assets/logos/creditu.jpeg',
    description:
      'Encargado de diseñar, desarrollar y mantener soluciones de software innovadoras. Especializado en crear aplicaciones eficientes, escalables y seguras, con integración de servicios backend y optimización continua del rendimiento. Con sólida experiencia en depuración, pruebas exhaustivas e implementación de actualizaciones, asegurando la confiabilidad, seguridad y satisfacción del usuario en todo momento.',
    link: 'https://creditu.com/cl/',
  },
  {
    date: 'Abril 2022',
    title: 'Analista de gestión de aplicaciones ',
    company: 'Cooperativa de Ahorro y Crédito ”29 de Octubre” Ltda.',
    logo: 'assets/logos/29Octubre.jpeg',
    description:
      'Responsable de supervisar, optimizar y gestionar el ciclo de vida completo de las aplicaciones dentro de la organización. Mi enfoque abarca la implementación, mantenimiento, actualización y mejora continua de las soluciones tecnológicas utilizadas, asegurando su desempeño eficiente, seguro y alineado con los objetivos estratégicos del negocio. Además, me encargo de identificar oportunidades de optimización y de coordinar los recursos necesarios para mantener las aplicaciones en su máximo rendimiento.',
    link: 'https://www.29deoctubre.fin.ec/',
  },
  {
    date: 'Marzo 2021',
    title: 'Software Development Engineer',
    company: 'Manticore Labs',
    logo: 'assets/logos/manticore-labs.jpeg',
    description:
      'responsable de diseñar, desarrollar e implementar soluciones tecnológicas a lo largo de todo el ciclo de vida del software. Utilizo mis conocimientos avanzados en programación y metodologías ágiles para crear aplicaciones eficientes, escalables y de alto rendimiento, siempre enfocado en cumplir con los objetivos estratégicos del negocio y satisfacer las necesidades del usuario final.',
    link: 'https://www.linkedin.com/company/manticore-labs/?originalSubdomain=ec',
  },
  {
    date: 'Septiembre 2020',
    title: 'Docencia',
    company: 'Instituto Superior Tecnológico Quito',
    logo: 'assets/logos/itq.jpeg',
    description:
      'Consiste en formar a futuros profesionales en los principios, metodologías y herramientas clave para desarrollar soluciones tecnológicas de alta calidad, preparándolos para enfrentar los desafíos del desarrollo de software en el entorno profesional',
    link: 'https://itq.edu.ec/',
  },
]);

const TAGS = signal<Record<string, Tag>>({
  NEXT: {
    name: 'Next.js',
    class: 'bg-black text-white',
    icon: NextComponent,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-[#003159] text-white',
    icon: TailwindComponent,
  },
});

export const PROJECTS = signal<Projects[]>([
  {
    title: 'Shopping Cart',
    description:
      'Creacion de una tienda online donde se puede comprar productos.',
    link: 'https://test-tienda.netlify.app',
    github: 'https://github.com/kevinjimenez/shop',
    image: 'assets/projects/shopping-cart.png',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Clone Planka',
    description:
      'Creacion de clon de planka, similar a trello donde se puede gestionar las tareas crear tableros, crear listas y crear tarjetas.',
    link: '',
    github:
      'https://github.com/kevinjimenez/clone-todo-Trello-/tree/clone-planka',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Dynamic Form (Angular)',
    description:
      'Construcion, configuracion de formularios dinamicos con angular.',
    link: '',
    github:
      'https://github.com/kevinjimenez/clone-todo-Trello-/tree/clone-planka',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Crytpto Messagge',
    description:
      'Creacion de ua apliacion en angular y nestjs para el envio de mensajes cifrados con la ayuda de la liobreria crypto-js, donde se craron llaves publicas y privadas.',
    link: '',
    github: 'https://github.com/kevinjimenez/message-crypto',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Pokedex app',
    description:
      'Aplicaion movil donde se puede ver la informacion de las pokemones.',
    link: '',
    github: 'https://github.com/kevinjimenez/pokedex-app',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Morty app',
    description:
      'Aplicaion movil donde se puede ver la informacion de las personajes de rick and morty.',
    link: '',
    github: 'https://github.com/kevinjimenez/rick-morty-app',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Api users',
    description:
      'Creacion de un api rest de usuarios, donde se puede crear, editar, eliminar y obtener informacion de los mismos.',
    link: '',
    github: 'https://github.com/kevinjimenez/api-users',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Mapas con Mapbox',
    description:
      'Creacion de una app para visuaizar buscar direccion dentro de un mapa con Mapbox.',
    link: '',
    github: 'https://github.com/kevinjimenez/mapbox-angular',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'Face detection',
    description: 'App donde se puede detectar las caras de una imagen.',
    link: '',
    github: 'https://github.com/kevinjimenez/face-deteccion-angular',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
  {
    title: 'JISIC App',
    description: 'App donde se valida el registro y salida mediante codigo QR.',
    link: '',
    github: 'https://github.com/kevinjimenez/Jornadas-JISIC',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },

  {
    title: 'Chat App',
    description: 'App donde se envia chat en tiempo real con WebSocket.',
    link: '',
    github: 'https://github.com/kevinjimenez/websocket-nestjs',
    image: 'assets/projects/default.webp',
    tags: [
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
      TAGS()['NEXT'],
      TAGS()['TAILWIND'],
    ],
  },
]);
