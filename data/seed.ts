import { prisma } from "../lib/prisma";
import data from "./products";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: data.products });
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