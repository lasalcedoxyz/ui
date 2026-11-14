import { z } from 'astro/zod';
import { tagSchema } from '@/schemas/objects';

export const blogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    draft: z.boolean().default(false),
    category: z.string().optional(),
    tags: z.array(tagSchema).optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})