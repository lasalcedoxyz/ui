import { z } from 'astro/zod';

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
});