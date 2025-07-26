import {Education,Experience,PersonalInformation,Projects,SocialLinks} from "@workspace/types"
// export const dummypersonalInformation: PersonalInformation = {
//     image: 'https://avatars.githubusercontent.com/u/12345678?v=4',
//     full_name: 'Shubham Bhilare',
//     username: 'skb3611',
//     email: 'shubham@example.com',
//     location: 'Pune, India',
//     tagline: 'Full Stack Developer & Open Source Enthusiast',
//     bio: 'Passionate about building web apps with React, Next.js, and Node.js. Contributor to open source and mentor to junior devs.',
//     website: 'https://shubh.dev',
//     github_link: 'https://github.com/skb3611',
//     followers: 120,
//     following: 85,
//   };
  
  export const dummyprojects: Projects[] = [
    {
      id: '1',
      name: 'Focus Hub',
      description: 'A productivity tool to manage tasks and time blocks for deep work.',
      thumbnail: 'https://via.placeholder.com/300x180',
      repoLink: 'https://github.com/skb3611/focus-hub',
      liveLink: 'https://focushub.dev',
      languages: { JavaScript: 80, TypeScript: 20} ,
      stars: 78,
      forks: 12,
      isIncluded: true,
      topics:[]
    },
    {
      id: '2',
      name: 'Expense Tracker',
      description: 'A simple expense tracking app with local storage support.',
      thumbnail: 'https://via.placeholder.com/300x180',
      repoLink: 'https://github.com/skb3611/expense-tracker',
      liveLink: 'https://skb3611.github.io/Expense-Tracker/',
      languages: { "JavaScript": 33.33, "HTML": 33.33, "CSS": 33.34 },
      stars: 45,
      forks: 6,
      isIncluded: true,
      topics:[]
    },
  ];
  
  // export const dummyexperience: Experience[] = [
  //   {
  //     id: '1',
  //     role: 'Frontend Developer',
  //     company: 'TechNova',
  //     description: 'Built and maintained features for an enterprise dashboard using React and Redux.',
  //     start_date: '2022-01-01',
  //     end_date: '2023-06-30',
  //     onGoing:false
  //   },
  //   {
  //     id: '2',
  //     company: 'DevVerse',
  //     role: 'Full Stack Intern',
  //     description: 'Worked on internal tools and helped integrate APIs using Node.js and Prisma.',
  //     start_date: '2021-06-01',
  //     end_date: '2021-12-01',
  //     onGoing:false
  //   },
  // ];
  
//   export const dummysocialLinks: SocialLinks = {
//     github: 'https://github.com/skb3611',
//     linkedin: 'https://linkedin.com/in/skb3611',
//     twitter: 'https://twitter.com/skb_codes',
//     website: 'https://shubh.dev',
//     instagram: 'https://instagram.com/skb.codes',
//     facebook: 'https://facebook.com/shubham.bhilare',
//     behance: 'https://behance.net/skb3611',
//     youtube: 'https://youtube.com/@skbdev',
//   };
  
//   export const dummyeducation: Education[] = [
//     {
//       id: '1',
//       course: 'Bachelor of Engineering in Computer Science',
//       institution: 'MIT Pune',
//       start_year: "2018",
//       end_year: "2022",
//       description: 'Studied core computer science subjects including data structures, algorithms, and web development.',
//     },
//   ];
  export const availableSkills = [
    "React",
    "Vue",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Java",
    "Rust",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Git",
    "CI/CD",
    "Jest",
    "Vite",
    "Next.js",
    "Nuxt.js",
    "Express",
    "FastAPI",
  ]

  export const initialSocailLinks:SocialLinks = {
    github: '',
    linkedin: '',
    twitter: '',
    website: '',
    instagram: '',
    facebook: '',
    behance: '',
    youtube: '',
  }

  export const initialPersonalInformation:PersonalInformation = {
    profileImg: '',
    full_name: '',
    username: '',
    email: '',
    location: '',
    tagline: '',
    bio: '',
    website: '',
    githubLink: '',
    followers: 0,
    following: 0,
  }

  export const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

export const YEARS = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => 1980 + i).reverse()
// export const dummyEducation: Education[] = [
//   {
//     id: '1',
//     title: 'Bachelor of Engineering in Computer Science',
//     institution: 'MIT University',
//     start_date: '2018',
//     end_date: '2022',
//     description: 'Focused on software engineering fundamentals, data structures, algorithms and web development.',
//     onGoing:false
//   },
//   {
//     id: '2',
//     title: 'Full Stack Web Development Bootcamp',
//     institution: 'Tech Academy',
//     start_date: '2022',
//     end_date: '2023',
//     description: 'Intensive program covering modern web technologies including React, Node.js, and cloud platforms.',
//     onGoing:false
//   },
//   {
//     id: '3',
//     title: 'High School Diploma',
//     institution: 'International School',
//     start_date: '2016',
//     end_date: '2018',
//     description: 'Completed with distinction in Computer Science and Mathematics.',
//     onGoing:false
//   }
// ];

