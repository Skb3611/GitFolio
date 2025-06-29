import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();

export default prisma;
export * from './generated/prisma/index.js'
export type { Education,Experience,Repo,User,Prisma } from "./generated/prisma/index.js";
