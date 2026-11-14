import { z } from 'astro/zod';
import { 
    componentSchema,
    blockSchema, 
} from '@/schemas/collections';
import { 
    registryStatusSchema,
    dependencySchema,
    frameworkSchema,
    categorySchema,
    tagSchema 
} from '@/schemas/objects';

export const templateSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: registryStatusSchema,
    category: categorySchema,
    subCategory: categorySchema.optional(),
    dependencies: z.array(dependencySchema).optional(),
    frameworks: z.array(frameworkSchema).optional(),
    features: z.array(z.string()).default([]),
    pages: z.array(z.string()).default([]),
    components: z.array(componentSchema).optional(),
    blocks: z.array(blockSchema).optional(),
    demoUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
    tags: z.array(tagSchema).optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});