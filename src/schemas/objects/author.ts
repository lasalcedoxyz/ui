import { z } from "astro/zod";
import { linkSchema } from "../objects/index.ts";

export const authorSchema = z.object({
  name: z.string(),
  username: z.string().optional(),
  avatar: z.string().optional(),
  bio: z.string().optional(),
  links: z.array(linkSchema).optional(),
});
