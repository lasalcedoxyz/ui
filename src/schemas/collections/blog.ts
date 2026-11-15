import { z } from 'astro/zod';
import { reference } from 'astro:content';
import { contentStatusSchema } from '@/schemas/objects';

export const blogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: contentStatusSchema,
    featured: z.boolean().default(false),
    category: reference('category'),
    subCategory: reference('category').optional(),
    readingTime: z.number().optional(),
    authors: z.array(reference('author')).optional(),
    tags: z.array(reference('tag')).optional(),
    relatedPosts: z.array(reference('blog')).optional(),
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});