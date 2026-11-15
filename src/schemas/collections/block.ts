import { z } from 'astro/zod'
import { reference } from 'astro:content';
import { componentSchema } from '@/schemas/collections';
import {
    versionSchema,
    registryStatusSchema,
    relatedContentSchema,
} from '@/schemas/objects';

export const blockSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    version: versionSchema,
    status: registryStatusSchema,
    category: reference('category'),
    subCategory: reference('category').optional(),
    components: reference('component').optional(),
    dependencies: reference('dependency').optional(),
    contributors: z.array(reference('author')).optional(),
    tags: z.array(reference('tag')).optional(),
    related: relatedContentSchema.optional(),
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});