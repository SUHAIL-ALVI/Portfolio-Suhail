import { Icons } from "@/components/icons";
import { HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Suhail Alvi",
  initials: "SA",
  url: "https://suhailalvi.vercel.app/",
  location: "Greater Noida, India",
  locationLink: "",
  description:
    "Software Engineer. I love to building things and solve problems, adaptive and flexible in technologies" ,
  summary:
    "I started my tech journey in 2nd year of my college. Currently Pursuing, [degree in computer science ](/#education) (final year), actively seeking opportunities to work in great technical environment with passionate people.",
  avatarUrl: "/suhail.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "Redux Toolkit",  
    "Javascript",
    "Typescript",  
    "git",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {href : "https://drive.google.com/file/d/1an5c-9F4xjNCo8UiUJMF6TVgSNFJjAsz/view", icon: Notebook, label: "Resume"},
  ],
  contact: {
    email: "alvisuhail3@gmail.com",
    tel: "+917983763130",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SUHAIL-ALVI",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/suhail-alvi",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SuhailxEngineer",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alvisuhail3@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  education: [
    {
      school: "Hi-tech Institute of Technology & Engineering",
      href: "https://hiet.org/",
      degree: "Bachelor's of Technology in Computer Science",
      logoUrl: "https://hiet.org/wp-content/uploads/2022/12/hiet_logo_240X44.png",
      start: "2023",
      end: "2026",
    }
  ],
  projects: [
    {
      title: "Mojito-coctail",
      href: "https://mojito-gsap.vercel.app",
      dates: "jun 2025 - jul 2025",
      active: true,
      description:
        "Mojito Landing Page is a visually engaging web project built with modern front-end technologies, featuring smooth and interactive animations powered by GSAP (GreenSock Animation Platform). The site showcases a clean UI/UX with dynamic transitions for an immersive user experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "GSAP",
        "TailwindCSS",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://mojito-gsap.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SUHAIL-ALVI/Mojito_GSAP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/newmoj.png",
      video:
        "",
    },
    {
      title: "Youtube Backend",
      href: "https://github.com/SUHAIL-ALVI/Backend-Node",
      dates: "jun 2025 - jul 2025",
      active: true,
      description:
        "A powerful YouTube backend built using Node.js, Express, and MongoDB with Mongoose ODM, JWT authentication, and Cloudinary integration — following industry-standard MVP architecture. This image visually captures the project’s core stack and structure ",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Bootstrap",
        "Paypal",
        "Mongoose"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SUHAIL-ALVI/Backend-Node",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/youtube2.png",
      video: "",
    },
    {
      title: "live docs",
      href: "https://live-docs-suhail.vercel.app/",
      dates: "Aug 2024 - oct 2024",
      active: true,
      description:
        "LiveDocs is a real-time collaborative document editor inspired by Google Docs, allowing multiple users to edit simultaneously. It features live syncing, rich text editing, and a smooth collaborative experience",


      technologies: [
        "TypeScript",
        "Next.js",
        "tailwindcss",
        "live-blocks",
        "clerk"
      ],
      links: [
        {
          type: "Website",
          href: "https://live-docs-suhail.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SUHAIL-ALVI/Live-docs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/live-docs.png",
      video: "",
    },
    {
      title: "Sumz-AI",
      href: "https://summarizer-sa.vercel.app/",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "Summarizer AI is a modern web tool that lets users instantly summarize any article by simply pasting a link. Powered by GPT and web scraping, it delivers concise insights with a clean and minimal interface.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "Vite",
        "Radux Toolkit",
        "OpenAI API",
      ],
      links: [
        {
          type: "Website",
          href: "https://summarizer-sa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sumz.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "",
      dates: "",
      location: "",
      description:
        "",
      image:
        "",
      mlh: "",
      links: [],
    },
  ],
} as const;
