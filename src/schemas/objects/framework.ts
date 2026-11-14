import { z } from 'astro/zod';
import { linkSchema } from '@/schemas/objects';

const frameworkTypeSchema = z.enum([
    'astro',
    'react',
    'next',
    'tanstack-start', 
    'tailwind',
    'gsap',
]).default('astro');

export const frameworkSchema = z.object({
    type: z.array(frameworkTypeSchema),
    version: z.string().optional(),
    minVersion: z.coerce.date().optional(),
    maxVersion: z.coerce.date().optional(),
    url: linkSchema,
    notes: z.array(z.string()).optional(),
});