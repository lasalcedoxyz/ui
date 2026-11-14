import { z } from 'astro/zod';

export const contentStatusSchema = z.enum([
    'draft',
    'published',
    'archived',
]).default('published');

export const registryStatusSchema = z.enum([
    'experimental',
    'beta',
    'stable',
    'deprecated', 
    'archived',
]).default('stable');