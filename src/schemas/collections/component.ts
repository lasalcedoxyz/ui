import { z } from 'astro/zod';
import {
    versionSchema,
    registryStatusSchema,
    dependencySchema,
    frameworkSchema,
    categorySchema,
    authorSchema,
    relatedContentSchema,
    tagSchema
} from '@/schemas/objects';

export const componentSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    version: versionSchema,
    status: registryStatusSchema,
    category: categorySchema,
    subCategory: categorySchema.optional(),
    dependencies: z.array(dependencySchema).optional(),
    frameworks: z.array(frameworkSchema).optional(),
    contributors: z.array(authorSchema).optional(),
    tags: z.array(tagSchema).optional(),
    related: relatedContentSchema,
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})