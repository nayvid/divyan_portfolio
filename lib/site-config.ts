export const siteConfig = {
  name: "Divyan Paramasivam",
  shortName: "Divyan",
  role: "Software Engineer",
  location: "Selangor, Malaysia",
  employer: "Silverlake",
  url: "https://divyan-portfolio.vercel.app",
  description:
    "Portfolio of Divyan Paramasivam, a software engineer in Selangor, Malaysia specializing in Java, JavaScript, Node.js and modern web frameworks.",
  typewriterRoles: [
    "software engineer",
    "freelancer",
    "MEAN stack developer",
    "open source contributor",
  ],
  bio: {
    intro:
      "I like solving problems. My proficiency is in using Java, JavaScript and Node.js. My fields of interest are building new technologies and products, and areas related to web development. Whenever possible, I also apply my passion for developing products with Node.js and modern JavaScript libraries and frameworks like React.js and Next.js.",
    quote: "hi, I'm Divyan from Selangor, Malaysia.",
    role: `I'm currently a software engineer at ${"Silverlake"}.`,
    activities: ["Hiking", "Watching Netflix shows", "Travelling"],
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
    "mongodb",
    "java",
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
} as const;

export type Project = (typeof siteConfig.projects)[number];
