import { z } from 'astro/zod'

export const categorySchema = z.object({
    name: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
});