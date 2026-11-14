import { z } from 'astro/zod'
import { componentSchema } from '@/schemas/collections';
import { 
    categorySchema,
    registryStatusSchema,
    dependencySchema,
    frameworkSchema,
    tagSchema 
} from '@/schemas/objects';

export const blockSchema = z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: registryStatusSchema,
    category: categorySchema,
    components: z.array(componentSchema).optional(),
    dependencies: z.array(dependencySchema).optional(),
    frameworks: z.array(frameworkSchema).optional(),
    tags: z.array(tagSchema).optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
});