import { z } from "astro/zod";
import { reference } from "astro:content";
import { versionSchema, registryStatusSchema } from "../objects/index.ts";

export const componentSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  version: versionSchema,
  status: registryStatusSchema,
  category: reference("category"),
  subCategory: reference("category").optional(),
  dependencies: z.array(reference("dependency")).optional(),
  frameworks: z.array(reference("framework")).optional(),
  contributors: z.array(reference("author")).optional(),
  tags: z.array(reference("tag")).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});

