import { PrismaClient } from "./generated/prisma/index.js";
import {withAccelerate} from "@prisma/extension-accelerate"
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error', 'warn'],
  }).$extends(withAccelerate());
if (process.env.NODE_ENV !== 'prod') globalForPrisma.prisma = prisma;

export default prisma;
export * from './generated/prisma/index.js'
export type { Education,Experience,Repo,User,SigninType,Prisma } from "./generated/prisma/index.js";
