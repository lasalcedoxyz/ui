import { z } from 'astro/zod';

export const pageSchema = z.object({
    title: z.string(),
    slug: z.string(),
    draft: z.boolean().default(false),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});