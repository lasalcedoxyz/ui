import { z } from 'astro/zod';
import { 
    registryStatusSchema,
    dependencySchema,
    frameworkSchema,
    categorySchema,
    tagSchema 
} from '@/schemas/objects';

export const componentSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: registryStatusSchema,
    category: categorySchema,
    subCategory: categorySchema.optional(),
    dependencies: z.array(dependencySchema).optional(),
    frameworks: z.array(frameworkSchema).optional(),
    tags: z.array(tagSchema).optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})