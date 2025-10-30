import { PrismaClient } from "./generated/prisma/index.js";
import { withAccelerate } from "@prisma/extension-accelerate";

const createPrisma = () => new PrismaClient().$extends(withAccelerate());

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrisma> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrisma();
  
if (process.env.NODE_ENV !== "prod") globalForPrisma.prisma = prisma;

export default prisma;
export * from "./generated/prisma/index.js";
export type {
  Education,
  Experience,
  Repo,
  User,
  SigninType,
  Prisma,
} from "./generated/prisma/index.js";
