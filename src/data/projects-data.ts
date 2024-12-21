import { Project } from '@/domain/models/Project';

export const projects: Project[] = [
  {
    id: 1,
    name: {
      en: 'GreenSwap',
      es: 'GreenSwap',
    },
    description: {
      en: 'GreenSwap is a platform that allows users to exchange products and services in a sustainable way.',
      es: 'GreenSwap es una plataforma que permite a los usuarios intercambiar productos y servicios de forma sostenible.',
    },
    imageUrl: 'greenswap-home.jpg',
    githubUrl: 'https://github.com/Jmendezzz/green-swap',
    initDate: new Date('2021-01-01'),
    endDate: new Date('2021-12-31'),
    technologies: [
      {
        name: 'Java',
        imageUrl: 'java.svg',
      },
      {
        name: 'Spring',
        imageUrl: 'spring.svg',
      },
      {
        name: 'TypeScript',
        imageUrl: 'typescript.svg',
      },
      {
        name: 'React',
        imageUrl: 'react.svg',
      },
      {
        name: 'MySQL',
        imageUrl: 'mysql.svg',
      },
      {
        name: 'AWS',
        imageUrl: 'aws.svg',
      },
      {
        name: 'Docker',
        imageUrl: 'docker.svg',
      },
      {
        name: 'Hexagonal Architecture',
        imageUrl: 'hexagon.svg',
      },
    ],
  },
  {
    id: 2,
    name: {
      en: 'Emazon',
      es: 'Emazon',
    },
    description: {
      en: 'Emazon is a platform that allows customers to buy products through Stripe and admins to manage those products. This project was developed in the PowerUp Pragma Bootcamp.',
      es: 'Emazon es una plataforma que permite a los clientes comprar productos a través de Stripe y a los administradores gestionar esos productos. Este proyecto fue desarrollado en el Bootcamp PowerUp Pragma.',
    },
    imageUrl: 'emazon-home.jpg',
    githubUrl: 'https://github.com/Jmendezzz/emazon-frontend',
    initDate: new Date('2021-01-01'),
    endDate: new Date('2021-12-31'),
    technologies: [
      {
        name: 'Java',
        imageUrl: 'java.svg',
      },
      {
        name: 'Spring',
        imageUrl: 'spring.svg',
      },
      {
        name: 'TypeScript',
        imageUrl: 'typescript.svg',
      },
      {
        name: 'Angular',
        imageUrl: 'angular.svg',
      },
      {
        name: 'MySQL',
        imageUrl: 'mysql.svg',
      },
      {
        name: 'MongoDB',
        imageUrl: 'mongo.svg',
      },
      {
        name: 'Microservices',
        imageUrl: 'microservices.svg',
      },
      {
        name: 'Docker',
        imageUrl: 'docker.svg',
      },
      {
        name: 'Hexagonal Architecture',
        imageUrl: 'hexagon.svg',
      },
    ],
  },
];
