import { z } from "astro/zod";
import { linkSchema } from "../objects/index.ts";

export const frameworkSchema = z.object({
  id: z.string(),
  name: z.string(),
  version: z.string().optional(),
  minVersion: z.coerce.date().optional(),
  maxVersion: z.coerce.date().optional(),
  url: linkSchema.optional(),
  notes: z.array(z.string()).optional(),
});
