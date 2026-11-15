import { z } from 'astro/zod';

const dependencyTypeSchema = z.enum([
    'dependency',
    'dev',
    'peer',
    'optional', 
]).default('dependency');

export const dependencySchema = z.object({
    id: z.string(),
    name: z.string(),
    version: z.string().default('latest'),
    type: dependencyTypeSchema,
    optional: z.boolean().default(false),
});