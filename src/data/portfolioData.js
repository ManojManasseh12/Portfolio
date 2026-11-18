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
    "Software Developer building React.js applications and integrating REST APIs for CRM/ERP workflows, including role-based UI, reusable components and KPI/analytics interfaces. Skilled in JavaScript, SQL, debugging and application troubleshooting.",
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
    "Building React.js applications, REST API integrations, and role-based CRM/ERP interfaces with reusable components and KPI dashboards.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Manoj_R_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-red-400 text-xl font-black mx-1 tracking-wide uppercase">Manoj R</span>, a Software Developer based in Chennai. I build React.js applications and integrate REST APIs for CRM/ERP workflows — role-based interfaces, reusable components, and KPI/analytics dashboards. I hold a B.Tech in Computer Science Engineering (2020–2024) and enjoy debugging, troubleshooting, and turning business workflows into clean, usable interfaces.`,
  techIcons: [
    { name: "React", icon: "react/react-original" },
    { name: "JavaScript", icon: "javascript/javascript-original" },
    { name: "Node.js", icon: "nodejs/nodejs-original" },
    { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  ],
  highlights: [
    "⭐ Software Developer at GLDIGI Solutions (Jan – Sep 2026)",
    "⭐ React.js + REST API integration for CRM/ERP workflows",
    "⭐ Role-based UI for administrator, employee, client & superadmin",
    "⭐ KPI/analytics interfaces with frontend caching",
    "⭐ B.Tech CSE — 85% (2020–2024)",
    "⭐ AWS Restart trained · Automation with Generative AI ",
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
      title: "Frontend",
      skills: [
        { name: "React.js" },
        { name: "JavaScript" },
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: "API & Backend",
      skills: [
        { name: "REST APIs" },
        { name: "Axios" },
        { name: "API Integration" },
        { name: "CRUD Operations" },
        { name: "Node.js" },
      ],
    },
    {
      title: "Databases (Basic)",
      skills: [
        { name: "SQL" },
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Cloud (Basic)",
      skills: [
        { name: "AWS" },
        { name: "Cloud Fundamentals" },
        { name: "Networking" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Java" },
        { name: "Python (Basics)" },
        { name: "C / C++" },
        { name: "jQuery / AJAX" },
        { name: "Firebase" },
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
  heading: "Building interfaces for real business workflows",
  description:
    "From CRM/ERP modules to analytics dashboards — React.js frontends wired to REST APIs, built to be reusable and role-aware.",
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
    {
      title: "Embedded & Cloud Basics",
      description: "Embedded C on Arduino, ESP32 and ESP8266, plus AWS fundamentals — IAM, cloud security and networking.",
      stats: "Hardware · AWS",
      icon: "☁️",
    },
  ],
};

export const internshipsList = [
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
];

export const projects = [
  {
    id: "glfunnel",
    number: "01",
    badge: "🚀 Featured Project",
    title: "GLFunnel",
    description:
      "CRM/ERP frontend modules integrated with backend data and business logic — covering leads, deals, properties, accounts, transactions and employee management with role-based access.",
    techTags: ["React.js", "Axios", "REST APIs", "CRM/ERP", "Role-Based UI"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "vidhaigal-school-erp",
    number: "02",
    badge: null,
    title: "Vidhaigal School ERP",
    description:
      "School ERP frontend covering student, staff, academic, operations and finance modules, connected to backend services through REST APIs.",
    techTags: ["React.js", "REST APIs", "ERP"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "airlines-reservation",
    number: "03",
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
    number: "04",
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
    "Frontend Development & REST API Integration",
    "React · JavaScript · Tailwind CSS · Axios",
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
