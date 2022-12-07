import { PrismaClient } from '@prisma/client'

const prisma: PrismaClient = new PrismaClient()

async function main(): Promise<void> {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })