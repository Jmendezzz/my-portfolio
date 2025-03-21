import { WorkExperience } from "@/domain/models/WorkExperience";

export const workExperiences: WorkExperience[] = [
    {
        id: 3,
        title: {
            en: 'Fullstack Developer',
            es: 'Desarrollador Fullstack'
        },
        descrption: {
            en: 'Developed and improved a web application for the education sector. Implemented RESTful APIs, integrated with third-party services, and developed frontend components using Angular and backend funcionalities using Express.',
            es: 'Desarrollé y mejoré una aplicación web para el sector educativo. Implementé APIs RESTful, integré con servicios de terceros y desarrollé componentes frontend utilizando Angular y funcionalidades backend utilizando Express.'
        },
        company: 'U360',
        location: 'Armenia, Quindío',
        startDate: '01/2025',
        endDate: 'Present'
    },
    {
        id: 1,
        title: {
            en: 'Backend Developer',
            es: 'Desarrollador Backend'
        },
        descrption: {
            en: 'Developed and maintained backend services for a healthcare sector web application using Xano. Implemented RESTful APIs and integrated with third-party services.',
            es: 'Desarrollé y mantuve servicios backend para una aplicación web del sector salued utilizando Xano. Implementé APIs RESTful e integré con servicios de terceros.'
        },
        company: 'SpeedUp Tech',
        location: 'Armenia, Quindío',
        startDate: '01/2024',
        endDate: '10/2024'
    },
    {
        id: 2,
        title: {
            en: 'Frontend Developer',
            es: 'Desarrollador Frontend'
        },
        descrption: {
            en: 'Participated in the integration of an API in a CRM platform to extract valuable information for the company. Documentation of technical specifications, user guides, and best practices, facilitating the exchange of knowledge and the integration of new team members.',
            es: 'Colaboré en la integración de una API en una plataforma CRM para extraer información de valor para la empresa. Documentación de especificaciones técnicas, guías de usuario y mejores prácticas, facilitando el intercambio de conocimientos y la integración de nuevos miembros del equipo'
        },
        company: 'Igniweb',
        location: 'Armenia, Quindío',
        startDate: '06/2023',
        endDate: '09/2023'
    }

];