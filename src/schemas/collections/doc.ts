import { z } from 'astro/zod';
import { 
    categorySchema,
    authorSchema,
    contentStatusSchema,
    relatedContentSchema,
    tagSchema 
} from '@/schemas/objects';

export const docSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    status: contentStatusSchema,
    category: categorySchema.optional(),
    subCategory: categorySchema.optional(),
    contributors: z.array(authorSchema).optional(),
    tags: z.array(tagSchema).optional(),
    related: relatedContentSchema,
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})