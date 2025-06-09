import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

export * from "./generated/prisma";
export default prisma;
