"use server";

import { prisma } from "../prisma";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
  const data = prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug },
  });
}
