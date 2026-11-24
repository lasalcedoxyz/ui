import { z } from "astro/zod";
import { changeSchema, versionSchema } from "../objects/index.ts";
import { reference } from "astro:content";

export const changelogSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  version: versionSchema,
  date: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  breaking: z.boolean().default(false),
  prerelease: z.boolean().default(false),
  changes: z.array(changeSchema).optional(),
  releaseUrl: z.url().optional(),
  contributors: z.array(reference("author")).optional(),
  tags: z.array(reference("tag")).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});

