import { DATA } from "@workspace/types";

export const DUMMY_DATA: DATA = {
  personalInfo: {
    profileImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    full_name: "Alex Rodriguez",
    username: "alexdev",
    email: "alex.rodriguez@example.com",
    location: "San Francisco, CA",
    tagline: "Full Stack Developer & Open Source Enthusiast",
    bio: "Passionate software developer with 5+ years of experience building scalable web applications. I love creating clean, efficient code and contributing to open source projects. When I'm not coding, you'll find me hiking or exploring new coffee shops.",
    website: "https://alexrodriguez.dev",
    githubLink: "https://github.com/alexdev",
    followers: 1247,
    following: 892
  },
  
  projects: [
    {
      id: "proj-001",
      name: "TaskFlow Pro",
      description: "A comprehensive project management tool built with React, Node.js, and MongoDB. Features real-time collaboration, task tracking, and team analytics.",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      repoLink: "https://github.com/alexdev/taskflow-pro",
      topics: ["react", "nodejs", "mongodb", "typescript", "websocket"],
      liveLink: "https://taskflow-pro.vercel.app",
      languages: {
        "TypeScript": 45.2,
        "JavaScript": 28.7,
        "CSS": 15.3,
        "HTML": 10.8
      },
      stars: 324,
      forks: 45,
      isIncluded: true
    },
    {
      id: "proj-002",
      name: "WeatherWise",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and weather alerts. Built using React Native for cross-platform compatibility.",
      thumbnail: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      repoLink: "https://github.com/alexdev/weatherwise",
      topics: ["react-native", "weather-api", "geolocation", "mobile"],
      liveLink: "https://weatherwise-app.netlify.app",
      languages: {
        "JavaScript": 52.1,
        "TypeScript": 31.4,
        "CSS": 16.5
      },
      stars: 156,
      forks: 23,
      isIncluded: true
    },
    {
      id: "proj-003",
      name: "CodeSnippet Manager",
      description: "Developer tool for organizing and sharing code snippets with syntax highlighting, tagging system, and team collaboration features.",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      repoLink: "https://github.com/alexdev/codesnippet-manager",
      topics: ["nextjs", "prisma", "postgresql", "tailwindcss"],
      liveLink: "https://codesnippets.alexrodriguez.dev",
      languages: {
        "TypeScript": 58.3,
        "CSS": 22.7,
        "JavaScript": 19.0
      },
      stars: 89,
      forks: 12,
      isIncluded: false
    },
    {
      id: "proj-004",
      name: "E-Commerce Dashboard",
      description: "Admin dashboard for e-commerce platforms with real-time analytics, inventory management, and order tracking capabilities.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      repoLink: "https://github.com/alexdev/ecommerce-dashboard",
      topics: ["vue", "express", "mysql", "charts", "analytics"],
      liveLink: "https://dashboard-demo.alexrodriguez.dev",
      languages: {
        "Vue": 41.2,
        "JavaScript": 35.8,
        "CSS": 13.6,
        "HTML": 9.4
      },
      stars: 201,
      forks: 34,
      isIncluded: true
    }
  ],

  experience: [
    {
      id: "exp-001",
      company: "TechCorp Solutions",
      role: "Senior Full Stack Developer",
      description: "Led development of microservices architecture serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%. Technologies: React, Node.js, AWS, Docker, PostgreSQL.",
      start_date: "2022-03",
      end_date: "",
      onGoing: true
    },
    {
      id: "exp-002",
      company: "StartupFlow",
      role: "Frontend Developer",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components. Improved application performance by 40% through code optimization and lazy loading.",
      start_date: "2020-06",
      end_date: "2022-02",
      onGoing: false
    },
    {
      id: "exp-003",
      company: "Digital Innovations Inc",
      role: "Junior Web Developer",
      description: "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Worked on e-commerce solutions and implemented responsive designs for mobile-first approach.",
      start_date: "2019-01",
      end_date: "2020-05",
      onGoing: false
    }
  ],

  education: [
    {
      id: "edu-001",
      title: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      description: "Graduated Magna Cum Laude with focus on software engineering and algorithms. Relevant coursework: Data Structures, Database Systems, Web Development, Software Engineering Principles.",
      start_date: "2015-08",
      end_date: "2019-05",
      onGoing: false
    },
    {
      id: "edu-002", 
      title: "Full Stack Web Development Bootcamp",
      institution: "General Assembly",
      description: "Intensive 12-week program covering modern web development technologies including React, Node.js, Express, MongoDB, and deployment strategies. Built 5 full-stack applications as part of the curriculum.",
      start_date: "2018-06",
      end_date: "2018-09",
      onGoing: false
    },
    {
      id: "edu-003",
      title: "AWS Solutions Architect Certification",
      institution: "Amazon Web Services",
      description: "Currently pursuing AWS Solutions Architect Associate certification to enhance cloud computing skills and architecture design capabilities.",
      start_date: "2024-01",
      end_date: "",
      onGoing: true
    }
  ],

  socialLinks: {
    github: "https://github.com/alexdev",
    linkedin: "https://linkedin.com/in/alex-rodriguez-dev",
    twitter: "https://twitter.com/alexdev",
    website: "https://alexrodriguez.dev",
    instagram: "https://instagram.com/alexdev_codes",
    facebook: "https://facebook.com/alex.rodriguez.dev",
    behance: "https://behance.net/alexrodriguez",
    youtube: "https://youtube.com/@alexdev"
  },
  skills:[
    "JavaScript",
    "TypeScript", 
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS"
  ]
};