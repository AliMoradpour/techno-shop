import { prisma } from "../lib/prisma";
import data from "./products";
import userData from "./users";

async function main() {
  await prisma.product.deleteMany();

  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.product.createMany({ data: data.products });
  await prisma.user.createMany({ data: userData.users });

  console.log("Data Added ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
