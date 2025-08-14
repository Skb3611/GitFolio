// import prisma from './index';
// import { v4 as uuidv4 } from 'uuid';

// // const prisma = new PrismaClient();

// async function main() {
//   const userId = uuidv4();

//   // Create a user
//   const user = await prisma.user.create({
//     data: {
//       id: userId,
//       username: 'johndoe',
//       firstname: 'John',
//       lastname: 'Doe',
//       email: 'johndoe@example.com',
//       profileImg: 'https://example.com/avatar.png',
//       bio: 'Full-stack developer with a love for open source.',
//       location: 'San Francisco',
//       website: 'https://johndoe.dev',
//       githubLink: 'https://github.com/johndoe',
//       contributions: [],
//       socialAccounts: {
//         twitter: 'https://twitter.com/johndoe',
//         linkedin: 'https://linkedin.com/in/johndoe',
//       },
//       skills: ['React', 'Node.js', 'PostgreSQL'],
//     },
//   });

//   // Create repos
//   await prisma.repo.createMany({
//     data: [
//       {
//         id: uuidv4(),
//         name: 'portfolio-site',
//         description: 'My personal portfolio built with Next.js',
//         topics: ['Next.js', 'Tailwind'],
//         languages: { javascript: 60, css: 30, html: 10 },
//         stars: 50,
//         forks: 10,
//         deployments: 2,
//         thumbnail: 'https://example.com/thumb1.png',
//         repoLink: 'https://github.com/johndoe/portfolio-site',
//         liveLink: 'https://johndoe.dev',
//         isPinned: true,
//         isIncluded: true,
//         userId,
//         updated_at: new Date(),
//         created_at: new Date(),
//         pushed_at: new Date(),
//       },
//       {
//         id: uuidv4(),
//         name: 'api-server',
//         description: 'Express + Prisma API',
//         topics: ['Express', 'Prisma'],
//         languages: { typescript: 80, sql: 20 },
//         stars: 30,
//         forks: 5,
//         deployments: 1,
//         thumbnail: null,
//         repoLink: 'https://github.com/johndoe/api-server',
//         liveLink: null,
//         isPinned: false,
//         isIncluded: true,
//         userId,
//         updated_at: new Date(),
//         created_at: new Date(),
//         pushed_at: new Date(),
//       },
//     ],
//   });

//   // Create experience
//   await prisma.experience.create({
//     data: {
//       id: uuidv4(),
//       company: 'TechCorp',
//       role: 'Frontend Developer',
//       logo: 'https://example.com/logo.png',
//       description: 'Worked on UI components and design systems.',
//       start_date: '2021-01-01',
//       end_date: '2023-01-01',
//       userId,
//     },
//   });

//   // Create education
//   await prisma.education.create({
//     data: {
//       id: uuidv4(),
//       title: 'Bachelor of Technology',
//       institution: 'Example University',
//       logo: 'https://example.com/university.png',
//       description: 'Major in Computer Science',
//       start_date: '2017-08-01',
//       end_date: '2021-05-01',
//       userId,
//     },
//   });
// }

// main()
//   .then(() => {
//     console.log('🌱 Seeding complete');
//     return prisma.$disconnect();
//   })
//   .catch(async (err) => {
//     console.error(err);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
