import { z } from 'astro/zod';
import { reference } from 'astro:content';
import {
  registryStatusSchema,
  licenseSchema
} from '@/schemas/objects';

export const templateSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  status: registryStatusSchema,
  category: reference('category'),
  subCategory: reference('category').optional(),
  frameworks: z.array(reference('framework')).optional(),
  features: z.array(z.string()).default([]),
  pages: z.array(z.string()).default([]),
  components: z.array(reference('component')).optional(),
  blocks: z.array(reference('block')).optional(),
  dependencies: z.array(reference('dependency')).optional(),
  demoUrl: z.url().optional(),
  repositoryUrl: z.url().optional(),
  license: licenseSchema.optional(),
  tags: z.array(reference('tag')).optional(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
});
