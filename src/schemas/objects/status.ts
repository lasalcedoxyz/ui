import { z } from 'astro/zod';

export const registryStatusSchema = z.enum([
    'experimental',
    'beta',
    'stable',
    'deprecated', 
    'archived',
]).default('stable');