import { z } from 'astro/zod';

const changeTypeSchema = z.enum([
    'added',
    'improved',
    'fixed',
    'removed',
    'deprecated',
    'security', 
]).default('added');

export const changeSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    type: changeTypeSchema,
    breaking: z.boolean().default(false),
    links: z.array(z.url()).default([]),
});
