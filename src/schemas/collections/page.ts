import { z } from 'astro/zod';
import {
    contentStatusSchema,
    authorSchema,
    tagSchema,
} from '@/schemas/objects';

export const pageSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: contentStatusSchema,
    authors: z.array(authorSchema).optional(),
    tags: z.array(tagSchema).optional(),
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});