// src/data/portfolioData.ts

import {
  ApexcareproDashboard,
  Tickets,
  ApexCarePro,
  ForEachLabs,
  HotelDesign,
  clothingCompany,
  Efset,
  DesignJoy,
  Shedule,
  DashboardFinal,
  Inventory,
  Rooms,
  Inspection,
  lab1,
  lab2,
  lab3,
  lab4,
  lab5,
  LabFull,
  Hotel1,
  Hotel2,
  Hotel3,
  Hotel4,
  Hotel,
  Clothing1,
  Clothing2,
  Clothing3,
  Clothing4,
  Quiz1,
  Quiz2,
  Quiz3,
  DesignJoy1,
  DesignJoy2,
  DesignJoy3,
  DesignJoy4,
  DesignJoyFull,
  QuizLanding,
} from "../app/assets"

export const portfolioCategories = {
  SAAS: "SaaS Product",
  WEB_DEV: "Web Development",
  WEB_APP: "Web Application",
}

export const portfolioHeader = {
  badge: "Portfolio",
  title: "Our Recent Work",
  description:
    "Explore a curated selection of our recent projects that showcase our capabilities in delivering high-quality digital solutions.",
}

export const portfolioProjects = [
  {
    id: 1,
    title: "Property Management System",
    category: portfolioCategories.SAAS,
    description:
      "A complete property management platform enabling property owners and managers to track issues through a ticketing system, receive real-time notifications, and monitor the progress of each request efficiently.",
    technologies: ["React JS", "Node JS", "MUI", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    image: ApexCarePro,
    modalImages: [ApexcareproDashboard, Tickets,Shedule,DashboardFinal,Inventory,Rooms,Inspection],
    githubUrl: "https://github.com/example",
    isImage: true,
  },
  {
    id: 2,
    title: "ForEach Labs Landing Page",
    category: portfolioCategories.WEB_DEV,
    image: ForEachLabs,
    modalImages: [ForEachLabs,lab1,lab2,lab3,lab4,lab5,LabFull],
    description:
      "Designed and developed a clean, conversion-focused landing page for ForEach Labs to showcase their web development services and expertise.",
    technologies: ["Gatsby","CSS","Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 3,
    title: "Hotel Design Landing Page",
    category: portfolioCategories.WEB_APP,
    image: HotelDesign,
    modalImages: [HotelDesign,Hotel1,Hotel2,Hotel3,Hotel4,Hotel],
    description:
      "A visually rich and responsive landing page for a hotel design agency, highlighting their portfolio, services, and unique selling points.",
    technologies: ["Gatsby","CSS","Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 4,
    title: "Clothing Management System",
    category: portfolioCategories.SAAS,
    image: clothingCompany,
    modalImages: [clothingCompany,Clothing1,Clothing2,Clothing3,Clothing4],
    description:
      "A robust SaaS platform for managing inventory, sales, and customer interactions in the clothing industry. Includes role-based dashboards, business analytics, and real-time updates.",
    technologies: ["React", "Express.js", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 5,
    title: "Interactive Landing Page",
    category: portfolioCategories.WEB_DEV,
    image: DesignJoy,
    modalImages: [DesignJoy1,DesignJoy2,DesignJoy3,DesignJoy4,DesignJoyFull],
    description:
      "A dynamic and creative landing page built with Webflow, allowing clients to explore layout ideas and design inspiration for custom solutions.",
    technologies: ["Webflow"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: 6,
    title: "EF SET UI Replica",
    category: portfolioCategories.WEB_DEV,
    image: Efset,
    modalImages: [Efset,QuizLanding,Quiz1,Quiz2,Quiz3],
    description:
      "A professional replica of the EFSET.com website, including English testing flows, sleek UI, and seamless content integration using Contentful.",
    technologies: ["React", "GraphQL", "Contentful"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
]
