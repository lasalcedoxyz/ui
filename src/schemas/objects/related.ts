import { z } from 'astro/zod';

export const relatedContentSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
})