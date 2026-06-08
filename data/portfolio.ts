export const siteConfig = {
  name: "Darshil Kachhadiya",
  firstName: "Darshil",
  lastName: "Kachhadiya",
  role: "Full Stack Developer",
  tagline:
    "Building responsive, production-ready web applications with React.js, REST APIs, and the MERN stack — designed for recruiters and interview-ready presentations.",
  location: "Surat, Gujarat, India",
  email: "kachhadiyadarshil54@gmail.com",
  phone: "+91 7624055465",
  whatsapp: "https://wa.me/918799338055",
  linkedin: "https://www.linkedin.com/in/darshil-kachhadiya-2a701134a",
  github: "https://github.com/Darshil0212",
  resumeFile: "/Darshil_Kachhadiya_Resume.pdf",
  resumeName: "Darshil_Kachhadiya_Resume.pdf",
  available: true,
  experienceYears: "2+",
  projectCountDisplay: "12+",
  projectsEndNote:
    "Featured highlights shown · 12+ total projects delivered including private enterprise builds.",
  projectsMoreNote:
    "Additional work exists under company NDA — happy to discuss on email.",
};

export const typewriterStrings = [
  "DEV_",
  "BUILDER_",
  "ENGINEER_",
  "CREATOR_",
];

export const aboutContent = {
  paragraphs: [
    "Full Stack Developer with 2+ years of experience building responsive web applications and integrating REST APIs. Skilled in JavaScript (ES6+), React.js, Redux, and Tailwind CSS.",
    "I deliver business-ready solutions with Node.js, Express.js, MongoDB, JWT Authentication, and GraphQL. At 3ni Infotech, I built role-based dashboards, admin panels, and production React applications.",
    "Previously at Smart Technica, I shipped responsive UI, API integrations, and real-time admin panels. I focus on clean code, scalable systems, and projects that interviewers can understand instantly.",
  ],
};

export const experience = [
  {
    company: "3ni Infotech",
    role: "Frontend Developer",
    period: "July 2025 – Present",
    location: "Surat, Gujarat",
    highlights: [
      "Building responsive React.js applications for client projects",
      "Developing role-based dashboards and real-time admin panels",
      "Integrating REST APIs and managing application state",
      "Handling bug fixes and on-time feature delivery",
    ],
  },
  {
    company: "Smart Technica",
    role: "Frontend Developer",
    period: "April 2024 – July 2025",
    location: "Surat, Gujarat",
    highlights: [
      "Developed responsive UI using React.js, JavaScript, and Tailwind CSS",
      "Integrated REST APIs and handled data management in React apps",
      "Worked on real-time admin panels and dashboard interfaces",
      "Collaborated on bug fixes and performance improvements",
    ],
  },
];

export type EducationLevel = "postgrad" | "grad" | "hsc" | "ssc";

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  examMonth?: string;
  note?: string;
  level: EducationLevel;
  tags?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: "M.Sc IT (Pursuing)",
    institution: "Dr. Babasaheb Ambedkar Open University (BAOU), Ahmedabad",
    period: "2025 – Present",
    note: "Master of Science in Information Technology",
    level: "postgrad",
  },
  {
    degree: "BCA — First Class with Distinction",
    institution: "Vimal Tormal Poddar BCA College, VNSGU, Surat",
    period: "2021 – 2024",
    note: "Bachelor of Computer Applications",
    level: "grad",
  },
  {
    degree: "Higher Secondary Certificate (12th — GSEB)",
    institution: "Neel Madhav Public School, Kamrej, Surat",
    period: "2021 – 2022",
    examMonth: "MAR 2022",
    note: "Gujarat Secondary & Higher Secondary Education Board (GSEB)",
    level: "hsc",
    tags: ["HSC Qualified", "Grade B2", "71.19 PR"],
  },
  {
    degree: "Secondary School Certificate (10th — GSEB)",
    institution: "Neel Madhav Public School, Kamrej, Surat",
    period: "2019 – 2020",
    examMonth: "MAR 2020",
    note: "Gujarat Secondary & Higher Secondary Education Board (GSEB)",
    level: "ssc",
    tags: ["SSC Qualified", "Grade B2", "79.33 PR"],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Redux.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "GraphQL",
    ],
  },
  {
    category: "Database & Tools",
    items: ["MongoDB", "MySQL", "Git", "GitHub", "Postman", "VS Code"],
  },
];

export const sysStatusSkills = [
  { label: "REACT_JS", value: 92 },
  { label: "NODE_API", value: 78 },
  { label: "MERN_STACK", value: 85 },
];

export type ProjectIconName =
  | "gem"
  | "receipt"
  | "shopping-bag"
  | "dna"
  | "truck"
  | "shopping-cart"
  | "briefcase"
  | "music"
  | "utensils";

export type Project = {
  title: string;
  icon: ProjectIconName;
  description: string;
  features: string[];
  tags: string[];
  type: "Enterprise" | "Full Stack" | "UI/UX" | "E-Commerce";
  liveUrl?: string;
  githubUrl?: string;
  isCompanyProject?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Diamond Business System",
    icon: "gem",
    description:
      "Complete Diamond Inventory & Transaction Management System for diamond businesses.",
    features: [
      "Stock, transaction & client data management",
      "Advanced filtering with optimized UI",
      "Role-based access for employees",
    ],
    tags: ["React.js", "Tailwind CSS", "REST API", "RBAC"],
    type: "Enterprise",
    liveUrl: "http://aidiamond.3niinfotech.com/",
    isCompanyProject: true,
  },
  {
    title: "GSTNOVA Web Software",
    icon: "receipt",
    description:
      "GSTNOVA is a full-stack web software platform built for Indian SMBs with invoicing, billing, and secure authentication.",
    features: [
      "Invoice generation",
      "Customer & transaction management",
      "Google Login & Email OTP verification",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "MERN"],
    type: "Full Stack",
    isCompanyProject: true,
  },
  {
    title: "Kalista Jewelry E-Commerce",
    icon: "shopping-bag",
    description:
      "Professional e-commerce platform tailored for jewelry businesses.",
    features: [
      "Product listing & detail pages",
      "Modern UI/UX design",
      "Fully responsive across devices",
    ],
    tags: ["React.js", "Tailwind CSS", "E-Commerce", "Responsive"],
    type: "E-Commerce",
    isCompanyProject: true,
  },
  {
    title: "Nucleotide — Genomics Platform",
    icon: "dna",
    description:
      "Personalized genomics platform for health insights based on genetic data.",
    features: [
      "Disease risk & drug response insights",
      "Genetic mutation visualization",
      "Interactive health data dashboard",
    ],
    tags: ["React.js", "Data Visualization", "Healthcare UI"],
    type: "Enterprise",
    isCompanyProject: true,
  },
  {
    title: "Transportation Logistics UI",
    icon: "truck",
    description:
      "Modern logistics agency website UI with clean layout and responsive design.",
    features: [
      "Service showcase & fleet sections",
      "Clean UI/UX with modern layout",
      "Fully responsive design",
    ],
    tags: ["Next.js", "Tailwind CSS", "UI/UX"],
    type: "UI/UX",
    isCompanyProject: true,
  },
  {
    title: "Webibazar E-Commerce UI",
    icon: "shopping-cart",
    description:
      "Responsive e-commerce website UI with modern product layout.",
    features: [
      "Clean product grid layout",
      "Category navigation",
      "Mobile-friendly interface",
    ],
    tags: ["React.js", "Tailwind CSS", "E-Commerce UI"],
    type: "UI/UX",
    isCompanyProject: true,
  },
  {
    title: "Heaven Finsol Website",
    icon: "briefcase",
    description:
      "Finance & solar solutions platform for loans, credit cards, and solar services.",
    features: [
      "Loan & credit card information",
      "Solar panel service pages",
      "Fully responsive financial UI",
    ],
    tags: ["React.js", "Tailwind CSS", "Finance UI"],
    type: "UI/UX",
    isCompanyProject: true,
  },
  {
    title: "SoundSphere — Music Concert UI",
    icon: "music",
    description:
      "Modern music & concert website UI with attractive visual design.",
    features: [
      "Event & artist showcase",
      "Attractive hero sections",
      "Fully responsive layout",
    ],
    tags: ["React.js", "Tailwind CSS", "UI/UX"],
    type: "UI/UX",
    isCompanyProject: true,
  },
  {
    title: "PetPuja Food Website",
    icon: "utensils",
    description:
      "Food ordering / restaurant website with menu display and core functionality.",
    features: [
      "Menu display & food categories",
      "Restaurant information pages",
      "Order flow UI",
    ],
    tags: ["PHP", "MySQL", "Food Ordering"],
    type: "Full Stack",
    isCompanyProject: true,
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];
