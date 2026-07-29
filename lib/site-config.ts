export const siteConfig = {
  name: "Divyan Paramasivam",
  shortName: "Divyan",
  role: "Software Engineer / AI Engineer",
  location: "Selangor, Malaysia",
  employer: "Fiuu",
  url: "https://divyan-portfolio.vercel.app",
  description:
    "Portfolio of Divyan Paramasivam, a software engineer and AI engineer in Selangor, Malaysia specializing in Java, JavaScript, Node.js, Laravel/PHP, and cloud infrastructure on AWS.",
  typewriterRoles: [
    "software engineer",
    "AI engineer",
    "freelancer",
    "open source contributor",
  ],
  bio: {
    intro:
      "I like solving problems. My proficiency is in using Java, JavaScript and Node.js. My fields of interest are building new technologies and products, and areas related to web development. Whenever possible, I also apply my passion for developing products with Node.js and modern JavaScript libraries and frameworks like React.js and Next.js. In my current role, I also work extensively with Laravel, PHP, Docker, and AWS (ECS, EC2) to build and deploy backend services and infrastructure.",
    quote: "Hi, I'm Divyan — a software engineer based in Selangor, Malaysia.",
    role: "I'm currently a Software Engineer / AI Engineer at Fiuu, where I build and ship backend services, developer tooling, and AI-driven features — from Java and Node.js APIs to Laravel/PHP applications, containerized with Docker and deployed on AWS.",
    activities: [
      { label: "Hiking", icon: "mountain" },
      { label: "Watching Netflix shows", icon: "tv" },
      { label: "Travelling", icon: "plane" },
    ],
    motto: "The only way to do great work is to love what you do.",
  },
  social: {
    github: "https://github.com/nayvid",
    linkedin: "https://www.linkedin.com/in/divyan-paramasivam-4223181ba/",
    instagram: "https://www.instagram.com/diivyan_/",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/project" },
    { label: "Resume", href: "/resume" },
  ],
  techStack: [
    "javascript",
    "typescript",
    "nodejs",
    "react",
    "nextjs",
    "php",
    "laravel",
    "java",
    "mongodb",
    "docker",
    "aws",
    "git",
  ] as const,
  toolStack: ["windows", "vscode", "postman", "vercel", "springboot"] as const,
  projects: [
    {
      title: "MERN Statistics Admin Dashboard",
      description:
        "An admin dashboard that helps view the daily, weekly and monthly statistic reports of products sold.",
      image: "/assets/projects/mern-dashboard.png",
      githubUrl: "https://github.com/nayvid/Admin-fulltsack-dashboard",
      demoUrl: "https://dashboard-cuyh.onrender.com",
    },
  ],
  resume: {
    path: "/assets/resume.pdf",
    fileName: "Divyan_Paramasivam_CV.pdf",
  },
  // Placeholder content — replace every entry with a real name, role and
  // quote before this section goes live. Nothing here is a real person.
  testimonials: [
    {
      name: "[Add name]",
      role: "[Role, Company]",
      quote: "[Add feedback here]",
      rating: 5,
    },
    {
      name: "[Add name]",
      role: "[Role, Company]",
      quote: "[Add feedback here]",
      rating: 5,
    },
    {
      name: "[Add name]",
      role: "[Role, Company]",
      quote: "[Add feedback here]",
      rating: 5,
    },
  ],
} as const;

export type Project = (typeof siteConfig.projects)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
