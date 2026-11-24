import { z } from "astro/zod";
import { reference } from "astro:content";
import { componentSchema } from "../collections/index.ts";
import {
  versionSchema,
  registryStatusSchema,
  relatedContentSchema,
} from "../objects/index.ts";

export const blockSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  version: versionSchema,
  status: registryStatusSchema,
  category: reference("category"),
  subCategory: reference("category").optional(),
  components: reference("component").optional(),
  dependencies: reference("dependency").optional(),
  contributors: z.array(reference("author")).optional(),
  related: z.array(reference("template")).optional(),
  tags: z.array(reference("tag")).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});
