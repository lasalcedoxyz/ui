import { z } from "astro/zod";
import { reference } from "astro:content";
import { contentStatusSchema } from "../objects/status.ts";

export const pageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  status: contentStatusSchema,
  authors: z.array(reference("author")).optional(),
  tags: z.array(reference("tag")).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});
