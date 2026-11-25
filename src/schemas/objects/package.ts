import { z } from "astro/zod";
import { versionSchema, linkSchema } from "../objects/index.ts";

const packageManagerSchema = z
  .enum(["pnpm", "npm", "yarn", "bun"])
  .default("pnpm");

export const packageSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  version: versionSchema,
  registry: linkSchema.optional(),
  packageManager: packageManagerSchema,
});

