import { z } from "astro/zod";
import { linkSchema } from "../objects/index.ts";

export const licenseSchema = z.object({
  name: z.string(),
  url: linkSchema,
  commercial: z.boolean().default(false),
  attribution: z.boolean().default(false),
});

