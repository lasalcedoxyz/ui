import { z } from 'astro/zod';
import { 
    contentStatusSchema,
    categorySchema,
    authorSchema,
    tagSchema 
} from '@/schemas/objects';

export const blogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: contentStatusSchema,
    featured: z.boolean().default(false),
    category: categorySchema,
    subCategory: categorySchema.optional(),
    readingTime: z.number().optional(),
    authors: z.array(authorSchema).optional(),
    tags: z.array(tagSchema).optional(),
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});