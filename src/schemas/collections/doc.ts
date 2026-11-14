import { z } from 'astro/zod';

export const docSchema = z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    subCategory: z.string().optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})