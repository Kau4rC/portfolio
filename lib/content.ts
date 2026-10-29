export const profile = {
  name: "Julz Kaupper Cortes",
  displayName: "Julz Cortes",
  role: "Full-Stack Web Developer",
  location: "Mandaue City, Philippines",
  email: "julzkaupper14@gmail.com",
  github: {
    label: "github.com/Kau4rC",
    href: "https://github.com/Kau4rC",
  },
  linkedin: {
    label: "in/julz-kaupper-c",
    href: "https://www.linkedin.com/in/julz-kaupper-c-793716297/",
  },
} as const;

export type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  name: string;
  summary: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "Simply POS",
    summary:
      "Point-of-sale and inventory management for small businesses — product tracking, reorder management, and sales monitoring in one workflow.",
    stack: ["React", "Express"],
  },
  {
    name: "BITS",
    summary:
      "Full-stack asset and facility management for a university department: inventory, QR tracking, room reservations, borrowing requests, dashboards, and role-based access.",
    stack: ["React", "Node.js", "Express", "MySQL", "Prisma"],
  },
  {
    name: "MADJIC",
    summary:
      "Medical records platform for a private client — digitised records, medication tracking, appointment scheduling, and printable reports and prescriptions.",
    stack: ["Python"],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Web development",
    items: [
      "JavaScript ES6+",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "shadcn/ui",
      "Responsive design",
      "WCAG",
    ],
  },
  {
    title: "Backend & database",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "MySQL",
      "MariaDB",
      "Prisma",
      "SQL",
      "Role-based access control",
      "Python",
    ],
  },
  {
    title: "Infrastructure & networking",
    items: [
      "CCNA",
      "CyberOps",
      "Server administration",
      "Network troubleshooting",
      "Hardware servicing",
      "Device configuration",
    ],
  },
  {
    title: "Workflow automation",
    items: [
      "n8n",
      "API integration",
      "Webhooks",
      "JSON processing",
      "AI-assisted document processing",
    ],
  },
];

export type Role = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    role: "Full-Stack Developer",
    org: "Freelance / Project-Based",
    period: "Jan 2024 – Feb 2026",
    points: [
      "Built and shipped full-stack web applications with React, Node.js, Express, MySQL, and Prisma.",
      "Shipped three client systems — BITS, MADJIC, and Simply POS — spanning asset management, medical records, and point of sale.",
      "Handled requirements gathering, implementation, testing, deployment, and client communication end to end.",
    ],
  },
  {
    role: "IT Support Technician",
    org: "ISL Networks Corporations",
    period: "Sep 2025 – Jan 2026",
    points: [
      "Performed preventive maintenance and hardware servicing for enterprise systems and networking devices in a Japanese manufacturing environment.",
      "Diagnosed and troubleshot network infrastructure and server environments to keep operations running.",
      "Assisted with server administration, device configuration, and production-floor IT deployment.",
    ],
  },
  {
    role: "POS & IT Systems Technician",
    org: "Freelance / Project-Based",
    period: "Project-based",
    points: [
      "Installed and configured POS, inventory, and CCTV systems for small businesses.",
      "Set up computers, peripherals, and network connectivity, then provided on-site support.",
    ],
  },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of San Carlos",
  period: "Aug 2022 – May 2026",
  note: "Capstone: Department Facility Asset Management System",
} as const;

export type Certification = {
  name: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    year: "2025",
  },
  {
    name: "CyberOps Associate",
    issuer: "Cisco",
    year: "2024",
  },
  {
    name: "JavaScript Essentials 2",
    issuer: "Cisco",
    year: "2024",
  },
  {
    name: "3rd Place — CodeChum National Programming Challenge",
    issuer: "CodeChum",
    year: "2024",
  },
  {
    name: "HackForGov 2024 — Certificate of Participation",
    issuer: "DICT",
    year: "2024",
  },
  {
    name: "CCNA: Introduction to Networking",
    issuer: "Cisco",
    year: "2023",
  },
  {
    name: "Creative Web Design — 102 hours",
    issuer: "Call Center Academy",
    year: "2023",
  },
];
