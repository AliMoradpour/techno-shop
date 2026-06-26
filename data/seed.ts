import { prisma } from "../lib/prisma";
import data from "./products";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: data.products as any });

  console.log("Data Added");
}
