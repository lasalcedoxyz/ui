import { z } from 'astro/zod'

export const categorySchema = z.object({
    label: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
});