import { z } from 'astro/zod';

const resourceTypeSchema = z.enum([
    'documentation',
    'github',
    'figma',
    'demo',
    'external',
]).default('documentation');

export const resourceSchema = z.object({
    label: z.string(),
    type: resourceTypeSchema,
    url: z.url().optional(),
});