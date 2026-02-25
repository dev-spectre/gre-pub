import { PrismaClient as PrismaClientGenerated } from "@/generated/prisma/client";
import { PrismaClient as PrismaClientLib } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({ connectionString });

const globalForPrisma = global as unknown as {
  prisma: any;
};

const PrismaClient = process.env.NODE_ENV === "production" ? PrismaClientLib : PrismaClientGenerated;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
