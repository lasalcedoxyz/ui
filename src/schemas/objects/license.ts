import { z } from 'astro/zod';

export const licenseSchema = z.object({
    name: z.string(),
    url: z.url(),
    commercial: z.boolean().default(false),
    attribution: z.boolean().default(false),
})