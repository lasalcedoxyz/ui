import { z } from 'astro/zod';
import { 
    dependencySchema,
    frameworkSchema,
    tagSchema 
} from '@/schemas/objects';

export const componentSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: z.enum(['component', 'block', 'template']).default('component'),
    category: z.string(),
    subCategory: z.string().optional(),
    dependencies: z.array(dependencySchema).optional(),
    frameworks: z.array(frameworkSchema).optional(),
    tags: z.array(tagSchema).optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})