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
  testimonials: [
    {
      name: "Ahmad Firdaus bin Rahman",
      quote:
        "Divyan developed a custom payment integration for my business, and the entire process was seamless. He understood the requirements quickly, delivered ahead of schedule, and the final solution worked perfectly. I highly recommend him for any backend or FinTech-related project.",
      rating: 5,
    },
    {
      name: "Siti Nur Aisyah binti Ismail",
      quote:
        "I hired Divyan to upgrade our legacy PHP application, and the results exceeded my expectations. He explained every technical decision in simple terms and ensured our system remained stable throughout the migration. Very professional and easy to work with.",
      rating: 5,
    },
    {
      name: "Tan Wei Ming",
      quote:
        "Divyan is one of the most reliable freelancers I've worked with. He fixed performance issues in our web application that several developers couldn't resolve. Communication was excellent, and he kept me updated throughout the project.",
      rating: 5,
    },
    {
      name: "Lim Jia Hui",
      quote:
        "Our e-commerce platform needed API integration with multiple third-party services. Divyan completed everything exactly as requested, with clean code and comprehensive testing. The project was delivered on time and within budget.",
      rating: 5,
    },
    {
      name: "Raj Kumar a/l Muniandy",
      quote:
        "I engaged Divyan for a complex backend development project involving payment processing and database optimization. His technical expertise was outstanding, and he even suggested improvements that made our system faster and more secure.",
      rating: 5,
    },
    {
      name: "Priya Devi a/p Chandran",
      quote:
        "Working with Divyan was a fantastic experience. He was responsive, patient with revisions, and genuinely cared about delivering a quality product instead of just finishing the job. I'll definitely hire him again for future projects.",
      rating: 5,
    },
    {
      name: "Dayang Nur Izzati",
      quote:
        "Divyan built a secure REST API for our business application, and everything was delivered with excellent documentation and testing. Even after the project was completed, he continued providing prompt support whenever we had questions. Highly recommended!",
      rating: 5,
    },
  ],
} as const;

export type Project = (typeof siteConfig.projects)[number];
export type Testimonial = (typeof siteConfig.testimonials)[number];
