import { z } from 'astro/zod';

const resourceTypeSchema = z.enum([
    'documentation',
    'github',
    'figma',
    'demo',
    'external',
]).default('documentation');

export const resourceSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    type: resourceTypeSchema,
    url: z.url().optional(),
    icon: z.string().optional(),
});