import { z } from 'astro/zod';

export const linkSchema = z.object({
    label: z.string(),
    url: z.string(),
    external: z.boolean().default(false),
})