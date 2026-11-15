import { z } from 'astro/zod';
import {
  contentStatusSchema,
  relatedContentSchema,
} from '@/schemas/objects';
import { reference } from 'astro:content';

export const docSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  status: contentStatusSchema,
  category: reference('category').optional(),
  subCategory: reference('category').optional(),
  contributors: z.array(reference('author')).optional(),
  tags: z.array(reference('tag')).optional(),
  related: relatedContentSchema.optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
})
