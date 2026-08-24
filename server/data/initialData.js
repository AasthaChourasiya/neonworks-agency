export const initialProjects = [
  {
    id: "proj-01",
    title: "Aura Spatial OS",
    subtitle: "3D Spatial Compute Platform for Next-Gen Mixed Reality",
    category: "Spatial AI",
    clientName: "Aura Robotics Corp",
    agencyPartner: {
      name: "Velox Motion Lab",
      role: "3D Animation & Shader Engineering",
      avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    },
    metrics: {
      conversionBoost: "+240%",
      award: "Awwwards Site of the Year Nominee",
      activeUsers: "4.2M Users"
    },
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614680376593-902f749f7cfc?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Designed and engineered a flagship spatial web experience for Aura's hardware launch. Collaborated with Velox Motion Lab to build real-time WebGL canvas interactions, fluid UI state transitions, and responsive multi-touch spatial navigation.",
    tags: ["WebGL", "Three.js", "Spatial UI", "GSAP Timeline", "React 19"],
    deliverables: ["Creative Direction", "Shader Programming", "Design System", "Full-Stack Deployment"],
    year: "2025",
    liveUrl: "https://aura-spatial.example.com",
    featured: true
  },
  {
    id: "proj-02",
    title: "VaultX Crypto Terminal",
    subtitle: "Institutional High-Frequency Trading Interface & Analytics",
    category: "FinTech",
    clientName: "VaultX Financials UK",
    agencyPartner: {
      name: "Kinetics UI Studio",
      role: "Fintech UX & Design Tokens",
      avatar: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80"
    },
    metrics: {
      conversionBoost: "+180%",
      award: "FWA of the Month",
      activeUsers: "$12B Vol / Day"
    },
    heroImage: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Partnered with Kinetics UI Studio to redefine real-time financial trading dashboards. Feature set includes zero-latency WebSockets streaming charts, dark neon contrast modes, and custom micro-motion feedback loops.",
    tags: ["Fintech UI", "WebSockets", "GSAP ScrollTrigger", "Node.js", "MERN Stack"],
    deliverables: ["UI/UX Architecture", "Design System", "Real-Time WebSocket Engine"],
    year: "2025",
    liveUrl: "https://vaultx-trade.example.com",
    featured: true
  },
  {
    id: "proj-03",
    title: "NEXUS Quantum AI Platform",
    subtitle: "Autonomous Agentic AI Infrastructure Dashboard",
    category: "AI & Web3",
    clientName: "Nexus Labs Berlin",
    agencyPartner: {
      name: "Minimalist Interactive",
      role: "Brand Identity & Product Architecture",
      avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
    },
    metrics: {
      conversionBoost: "+310%",
      award: "CSS Design Awards Developer Award",
      activeUsers: "850K Developers"
    },
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Built alongside Minimalist Interactive, NEXUS represents the frontier of human-AI collaboration. Custom node-graph editor with micro-animations, glowing glassmorphic elements, and instant REST API integration.",
    tags: ["AI Platform", "Node Graph", "Tailwind CSS v4", "GSAP Motion"],
    deliverables: ["Product Strategy", "Frontend Motion", "Backend Express API"],
    year: "2024",
    liveUrl: "https://nexus-ai.example.com",
    featured: true
  },
  {
    id: "proj-04",
    title: "Hyperion Hypercar Configurator",
    subtitle: "Real-Time 3D Vehicle Customizer & E-Commerce",
    category: "Luxury E-Commerce",
    clientName: "Hyperion Motors Monaco",
    agencyPartner: {
      name: "Apex Visuals NYC",
      role: "3D Rendering & VFX Production",
      avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    },
    metrics: {
      conversionBoost: "+165%",
      award: "Red Dot Best of the Best 2025",
      activeUsers: "€45M Direct Orders"
    },
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An ultra-premium automotive configurator allowing buyers to customize hypercar materials, wheel rims, interior carbon fiber trims, and lighting in real-time WebGL environment.",
    tags: ["3D Configurator", "WebGL", "GSAP Timeline", "E-Commerce"],
    deliverables: ["Interactive 3D Stage", "Order Engine", "Agency Co-Production"],
    year: "2025",
    liveUrl: "https://hyperion-config.example.com",
    featured: false
  }
];

export const initialAgencyPartners = [
  {
    id: "agency-01",
    name: "Velox Motion Lab",
    tagline: "3D Shader & Interactive Canvas Pioneers",
    location: "Tokyo / Zurich",
    specialization: "3D Graphics, WebGL Shaders & Kinetic Motion",
    collaborationsCount: 14,
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80",
    badgeColor: "cyan",
    featuredProjects: ["Aura Spatial OS", "CyberPulse VR"],
    status: "Active Co-Creator"
  },
  {
    id: "agency-02",
    name: "Kinetics UI Studio",
    tagline: "Fintech & High-Density UI Architects",
    location: "London / San Francisco",
    specialization: "Financial Dashboards, Data Viz & Micro-Interactions",
    collaborationsCount: 19,
    logo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80",
    badgeColor: "lime",
    featuredProjects: ["VaultX Crypto Terminal", "Apex Banking"],
    status: "Premier Partner"
  },
  {
    id: "agency-03",
    name: "Minimalist Interactive",
    tagline: "Brand Identity & Digital Architecture",
    location: "Berlin / Amsterdam",
    specialization: "Brand Systems, Editorial Layouts & Digital Strategy",
    collaborationsCount: 11,
    logo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=200&q=80",
    badgeColor: "purple",
    featuredProjects: ["NEXUS Quantum AI Platform", "Mono Typecase"],
    status: "Design Collective"
  },
  {
    id: "agency-04",
    name: "Apex Visuals NYC",
    tagline: "CGI, VFX & Spatial Commerce Experience",
    location: "New York / Seoul",
    specialization: "Photoreal CGI, 3D Automotive & Luxury E-Commerce",
    collaborationsCount: 8,
    logo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=200&q=80",
    badgeColor: "pink",
    featuredProjects: ["Hyperion Hypercar Configurator"],
    status: "Specialist Partner"
  }
];
