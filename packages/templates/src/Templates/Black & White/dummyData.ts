import { DATA, PersonalInformation } from "@workspace/types";

export const DummyData: DATA = {
personalInfo: {
    profileImg: "https://images.clerk.dev/oauth_github/img_30KSBf1pkI81b0wxHk6q2lQy8mn",
    full_name: "Shubham Bhilare",
    username: "alexjohnson",
    email: "alex.johnson@example.com",
    location: "San Francisco, CA",
    tagline: "Full Stack Developer & UI/UX Enthusiast",
    bio: "Passionate developer with 5+ years of experience building scalable web applications. I love creating intuitive user experiences and solving complex problems with clean, efficient code.",
    website: "https://alexjohnson.dev",
    githubLink: "https://github.com/alexjohnson",
    followers: 1247,
    following: 389
  } ,

  projects: [
    {
      id: "proj-001",
      name: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing e-commerce operations with real-time analytics, inventory management, and customer insights.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      repoLink: "https://github.com/alexjohnson/ecommerce-dashboard",
      topics: ["react", "typescript", "tailwindcss", "prisma", "nextjs"],
      liveLink: "https://ecommerce-dashboard-demo.vercel.app",
      languages: {
        TypeScript: 65.2,
        JavaScript: 20.1,
        CSS: 8.7,
        HTML: 6.0
      },
      stars: 234,
      forks: 45,
      isIncluded: true
    },
    {
      id: "proj-002",
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      repoLink: "https://github.com/alexjohnson/task-manager",
      topics: ["vue", "nodejs", "mongodb", "socket.io", "express"],
      liveLink: "https://taskmanager-pro.netlify.app",
      languages: {
        JavaScript: 70.5,
        Vue: 25.3,
        CSS: 4.2
      },
      stars: 156,
      forks: 28,
      isIncluded: true
    },
    {
      id: "proj-003",
      name: "Weather Forecast Widget",
      description: "A beautiful and responsive weather widget with location-based forecasts, interactive maps, and customizable themes.",
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      repoLink: "https://github.com/alexjohnson/weather-widget",
      topics: ["react", "api", "responsive", "pwa"],
      liveLink: "https://weather-widget-alex.vercel.app",
      languages: {
        JavaScript: 80.2,
        CSS: 15.8,
        HTML: 4.0
      },
      stars: 89,
      forks: 12,
      isIncluded: false
    }
  ],

  experience: [
    {
      id: "exp-001",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      company: "TechFlow Solutions",
      role: "Senior Full Stack Developer",
      description: "Led development of microservices architecture serving 10M+ users. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality software solutions.",
      start_date: "2022-03-01",
      end_date: "2024-12-31",
      onGoing: true
    },
    {
      id: "exp-002",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
      company: "StartupXYZ",
      role: "Frontend Developer",
      description: "Built responsive web applications using React and TypeScript. Improved application performance by 40% through code optimization and implemented modern CI/CD pipelines.",
      start_date: "2020-06-15",
      end_date: "2022-02-28",
      onGoing: false
    },
    {
      id: "exp-003",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
      company: "Digital Innovations Inc",
      role: "Junior Web Developer",
      description: "Developed and maintained client websites using HTML, CSS, and JavaScript. Collaborated with designers to implement pixel-perfect UI components and learned modern development practices.",
      start_date: "2019-01-10",
      end_date: "2020-05-30",
      onGoing: false
    }
  ] ,

  socialLinks: {
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson-dev",
    twitter: "https://twitter.com/alexjohnson_dev",
    website: "https://alexjohnson.dev",
    instagram: "https://instagram.com/alexjohnson.codes",
    facebook: null,
    behance: "https://behance.net/alexjohnson",
    youtube: "https://youtube.com/@alexjohnson-dev"
  },

  education: [
    {
      id: "edu-001",
      logo: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=100&h=100&fit=crop",
      title: "Master of Science in Computer Science",
      institution: "Stanford University",
      description: "Specialized in Software Engineering and Human-Computer Interaction. Completed thesis on 'Optimizing User Experience in Progressive Web Applications'.",
      start_date: "2017-09-01",
      end_date: "2019-06-15",
      onGoing: false
    },
    {
      id: "edu-002",
      logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop",
      title: "Bachelor of Engineering in Information Technology",
      institution: "University of California, Berkeley",
      description: "Comprehensive study of software development, algorithms, and system design. Active member of the Computer Science Society and participated in multiple hackathons.",
      start_date: "2013-08-20",
      end_date: "2017-05-20",
      onGoing: false
    },
    {
      id: "edu-003",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop",
      title: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      description: "Intensive 12-week program covering modern web development technologies including React, Node.js, databases, and deployment strategies.",
      start_date: "2023-01-15",
      end_date: "2023-04-15",
      onGoing: false
    }
  ] ,
  skills: [
    "React",
    "Vue",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
  ],
};
