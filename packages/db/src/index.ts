import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const createPrisma = () => new PrismaClient({ adapter });

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrisma> | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrisma();

if (process.env.NODE_ENV !== "prod") globalForPrisma.prisma = prisma;

export default prisma;
export * from "./generated/prisma/client";
export type {
  Education,
  Experience,
  Repo,
  User,
  SigninType,
  Prisma,
} from "./generated/prisma/client";
