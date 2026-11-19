// ============================================================
// portfolioData.js — Centralized configuration for the portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Manoj R",
  firstName: "Manoj",
  brandName: "Manoj R",
  title: "Software Developer",
  location: "Chennai, Tamil Nadu, India",
  phone: "+91 7358030508",
  emails: {
    primary: "manojithesh1205@gmail.com",
    secondary: "manojithesh1205@gmail.com",
  },
  summary:
    "Software Developer with professional experience building React.js applications and integrating REST APIs, alongside practical exposure to AI/ML and Generative AI. Currently learning LLMs, RAG, prompt engineering and LangChain through a Generative AI internship, and developing API Fix, an AI-powered API error analysis application using document retrieval and LLM-generated troubleshooting suggestions.",
  resumeUrl: "/Manoj_R_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/ManojManasseh12",
  linkedin: "https://www.linkedin.com/in/manoj-ramesh-786188283",
};

export const heroContent = {
  greeting: "Hi, I'm Manoj",
  titleHighlight: "Software Developer",
  subtitle:
    "Building React.js applications, REST API integrations and AI-powered tools — currently exploring LLMs, RAG and LangChain through a Generative AI internship.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Manoj_R_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-red-400 text-xl font-black mx-1 tracking-wide uppercase">Manoj R</span>, a Software Developer based in Chennai. I build React.js applications and integrate REST APIs for CRM/ERP workflows — role-based interfaces, reusable components, and KPI/analytics dashboards. Alongside that, I'm building practical AI/ML and Generative AI skills — learning LLMs, RAG, prompt engineering and LangChain, and developing API Fix, an AI-powered app that analyzes API errors with document retrieval and LLM-generated troubleshooting suggestions. I hold a B.Tech in Computer Science Engineering (2020–2024) and enjoy debugging, troubleshooting, and turning business workflows into clean, usable interfaces.`,
  techIcons: [
    { name: "React", icon: "react/react-original" },
    { name: "JavaScript", icon: "javascript/javascript-original" },
    { name: "Python", icon: "python/python-original" },
    { name: "FastAPI", icon: "fastapi/fastapi-original" },
    { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
    { name: "LangChain", icon: "https://cdn.simpleicons.org/langchain/52dec5" },
    { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
    { name: "Make", icon: "https://cdn.simpleicons.org/make/A78BFA" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/699ECA" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  ],
  highlights: [
    "▸ Generative AI Intern at Dr. Reddy's Foundation (Oct 2026 – Present)",
    "▸ Software Developer at GLDIGI Solutions (Jan – Sep 2026)",
    "▸ Building API Fix — AI-powered API error analysis (RAG + LLM)",
    "▸ React.js + REST API integration for CRM/ERP workflows",
    "▸ AI/ML exposure — Driver Drowsiness Detection (Pantech.AI)",
    "▸ B.Tech CSE — 85% (2020–2024) · AWS Restart trained",
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into robust web applications",
  description:
    "I combine an understanding of business workflows with hands-on React.js and API integration to build dependable interfaces.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "I start with the business workflow and the data behind it — who uses the screen and what they need to get done.",
    },
    {
      number: "02",
      title: "Design",
      text: "I break interfaces into reusable components — tables, filters, forms, dashboards — with role-based views in mind.",
    },
    {
      number: "03",
      title: "Build",
      text: "I build React.js modules and connect them to REST APIs with Axios, handling loading states, errors and UI updates.",
    },
    {
      number: "04",
      title: "Refine",
      text: "I debug, troubleshoot and optimise — for example, caching repeated API calls on the frontend to keep pages responsive.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Generative AI",
      skills: [
        { name: "LLMs" },
        { name: "Retrieval-Augmented Generation (RAG)" },
        { name: "Prompt Engineering" },
        { name: "LangChain" },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Python" },
        { name: "Machine Learning Fundamentals" },
        { name: "Computer Vision Concepts" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI" },
        { name: "REST APIs" },
        { name: "Axios" },
        { name: "API Integration" },
        { name: "CRUD Operations" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "JavaScript (ES6+)" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL" },
        { name: "Supabase" },
        { name: "MySQL" },
        { name: "MongoDB" },
        { name: "SQL" },
      ],
    },
    {
      title: "Tools, Cloud & Automation",
      skills: [
        { name: "n8n" },
        { name: "Make" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "AWS Fundamentals" },
        { name: "Linux Basics" },
      ],
    },
    {
      title: "Embedded & IoT",
      skills: [
        { name: "Embedded C" },
        { name: "Arduino" },
        { name: "ESP32" },
        { name: "ESP8266" },
        { name: "Proteus" },
        { name: "Hardware Interfacing" },
      ],
    },
  ],
};

export const expertise = {
  badge: "What I Do",
  heading: "Building products for real business workflows — and AI tools that help solve them",
  description:
    "From CRM/ERP modules and analytics dashboards to RAG-powered AI applications — React.js frontends, REST APIs and LLM pipelines, built to be reliable and role-aware.",
  categories: [
    {
      title: "Frontend Development",
      description: "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap and React Router for responsive, component-driven UIs.",
      stats: "React.js",
      icon: "⚛️",
    },
    {
      title: "REST API Integration",
      description: "Connecting frontends to backend services with Axios — handling loading states, errors, CRUD operations and UI updates.",
      stats: "Axios · REST",
      icon: "🔌",
    },
    {
      title: "Generative AI & RAG",
      description: "LLMs, Retrieval-Augmented Generation, prompt engineering and LangChain — building API Fix, which retrieves technical docs and generates contextual API troubleshooting suggestions.",
      stats: "LLM · RAG",
      icon: "🤖",
    },
    {
      title: "CRM / ERP Workflows",
      description: "Modules for leads, deals, properties, accounts, transactions and employee management, plus school ERP modules.",
      stats: "Business Apps",
      icon: "🏢",
    },
    {
      title: "Role-Based UI",
      description: "Role-based interfaces and routing for administrator, employee, client and superadmin users.",
      stats: "Access Control",
      icon: "🔐",
    },
    {
      title: "Dashboards & Analytics",
      description: "KPI and analytics interfaces, with frontend caching using a JavaScript Map to reduce repeated API calls.",
      stats: "KPI · Performance",
      icon: "📊",
    },
  ],
};

export const internshipsList = [
  {
    organization: "Dr. Reddy's Foundation",
    role: "Generative AI Intern",
    type: "Internship",
    duration: "Oct 2026 – Present",
    skills: [
      "Learning Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) and prompt engineering",
      "Building hands-on skills with LangChain, embeddings and vector search",
      "Applying these concepts in API Fix, an AI-powered API troubleshooting application",
      "Retrieving technical documentation and generating contextual troubleshooting steps with an LLM",
    ],
    tech: ["LLMs", "RAG", "LangChain", "Prompt Engineering"],
  },
  {
    organization: "GLDIGI Solutions Private Limited, Chennai",
    role: "Software Developer",
    type: "Experience",
    duration: "Jan 2026 – Sep 2026",
    skills: [
      "Engineered React.js frontend modules for leads, deals, accounts, transactions, and employee management",
      "Integrated REST APIs with Axios, implementing robust error handling, loading states, and async pipelines",
      "Built reusable component systems (tables, dynamic filters, modal forms, dashboards, and role-based navigation)",
      "Implemented role-based UI and frontend caching (JavaScript Map) for KPI analytics to reduce repeated API requests",
    ],
    tech: ["React.js", "JavaScript", "Axios", "REST APIs"],
  },
  {
    organization: "Spiro Prime Tech Services",
    role: "Embedded C Trainee",
    type: "Training",
    duration: "Nov 2025 – Jan 2026",
    skills: [
      "Developed and tested Embedded C firmware on Arduino, ESP32, and ESP8266 microcontrollers",
      "Simulated circuit schematics and verified board behavior using Proteus Design Suite prior to hardware flashing",
      "Validated peripheral communication protocols (UART, I2C, SPI) and sensor data acquisition",
      "Performed board-level diagnostics, debugging signal timing, pin mappings, and hardware reliability",
    ],
    tech: ["Embedded C", "Arduino", "ESP32", "ESP8266", "Proteus"],
  },
  {
    organization: "Multiplay Networks Private Limited (We Connect)",
    role: "Network Support Intern",
    type: "Internship",
    duration: "Sep 2025 – Nov 2025",
    skills: [
      "Monitored network infrastructure and supported daily operations across Triple Play cable TV and ISP setups",
      "Assisted with troubleshooting connectivity, routing interruptions, and customer premises equipment (CPE)",
      "Collaborated with senior engineers on router/switch configurations, client IP provisioning, and line testing",
      "Documented technical incident logs, escalation workflows, and network diagnostic checklists",
    ],
    tech: ["Networking", "Triple Play", "ISP", "Troubleshooting"],
  },
  {
    organization: "Tech Mahindra Foundation",
    role: "AWS re/Start Intern",
    type: "Training",
    duration: "Apr 2025 – Jul 2025",
    skills: [
      "Completed AWS re/Start training with Tech Mahindra Foundation",
      "Covered cloud fundamentals and core AWS services",
      "Worked with IAM, cloud security and networking concepts",
      "Built a foundation in cloud operations and deployment practices",
    ],
    tech: ["AWS", "Cloud Fundamentals", "IAM", "Security", "Networking"],
  },
  {
    organization: "Pantech Prolabs India Pvt. Ltd. (Pantech.AI)",
    role: "AI & Machine Learning Intern",
    type: "Internship",
    duration: "2024 · Online",
    skills: [
      "Worked in the development team on a Driver Drowsiness Detection project",
      "Explored computer-vision-based monitoring to identify visual signs of driver drowsiness",
      "Gained practical exposure to AI/ML project workflows and testing",
      "Studied real-time monitoring techniques for detecting driver fatigue",
    ],
    tech: ["AI/ML", "Computer Vision", "Python"],
  },
];

export const projects = [
  {
    id: "api-fix",
    number: "01",
    badge: "🤖 Featured Project",
    title: "API Fix — AI-Powered API Error Analysis",
    description:
      "AI-powered application that analyzes API errors and suggests resolutions. Accepts API endpoint details, error messages and optional code snippets; ingests technical documentation through chunking and embeddings, retrieves relevant context with vector search, and uses an LLM to suggest likely causes and troubleshooting steps.",
    techTags: ["Python", "FastAPI", "LLM", "RAG", "LangChain", "Embeddings", "Vector Search", "PostgreSQL", "Supabase"],
    links: {
      github: null,
      demo: "https://9855525f.apifix-project.pages.dev/",
    },
    isFlagship: true,
  },
  {
    id: "glfunnel",
    number: "02",
    badge: "💼 Professional Work",
    title: "GLFunnel",
    description:
      "CRM/ERP frontend modules integrated with backend data and business logic — covering leads, deals, properties, accounts, transactions and employee management with role-based access.",
    note: "Built at my previous workplace — the codebase is client-owned, so there is no public repo or demo to share.",
    techTags: ["React.js", "Axios", "REST APIs", "CRM/ERP", "Role-Based UI"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "vidhaigal-school-erp",
    number: "03",
    badge: "💼 Professional Work",
    title: "Vidhaigal School ERP",
    description:
      "School ERP frontend covering student, staff, academic, operations and finance modules, connected to backend services through REST APIs.",
    note: "Built at my previous workplace — the codebase is client-owned, so there is no public repo or demo to share.",
    techTags: ["React.js", "REST APIs", "ERP"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "driver-drowsiness-detection",
    number: "04",
    badge: null,
    title: "Driver Drowsiness Detection",
    description:
      "Computer-vision-based monitoring system to identify visual signs of driver drowsiness, built with the development team during the Pantech AI/ML internship.",
    techTags: ["AI/ML", "Computer Vision", "Python"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "airlines-reservation",
    number: "05",
    badge: null,
    title: "Airlines Reservation System",
    description:
      "Airline inventory management system covering schedules, fares, reservations and tickets.",
    techTags: ["Java", "MySQL"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "ml-transaction-alert",
    number: "06",
    badge: null,
    title: "ML-Based User Transaction Alert",
    description:
      "Transaction-monitoring and alerting system focused on security and transparency.",
    techTags: ["Machine Learning", "Cybersecurity"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Automation with Generative AI",
      issuer: "CFRSI, Dr. Reddy's Foundation · Oct 2026 – Present",
      icon: "🤖",
    },
    {
      name: "AWS Restart",
      issuer: "Tech Mahindra Foundation · Apr – Jul 2025",
      icon: "☁️",
    },
    {
      name: "Java Full Stack",
      issuer: "Besant Technologies · 2024",
      icon: "☕",
    },
    {
      name: "Master Diploma in Software Engineering",
      issuer: "Anjali Education · 2020 – 2021",
      icon: "🎓",
    },
  ],
  // Optional: set a link (e.g. Google Drive folder) to show a "View All Certificates" button
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech in Computer Science Engineering",
  institution: "Bharath Institute of Higher Education and Research",
  score: "85%",
  graduation: "2024 (2020 – 2024)",
  languages: ["English", "Tamil", "Marathi"],
};

export const footerContent = {
  taglines: [
    "Generative AI · LLMs · RAG · LangChain",
    "React.js · REST APIs · Tailwind CSS · FastAPI",
    "CRM/ERP Workflows & Dashboards",
  ],
  credential: "B.Tech CSE · AWS Restart Trained",
  copyright: `© ${new Date().getFullYear()} Manoj R | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
