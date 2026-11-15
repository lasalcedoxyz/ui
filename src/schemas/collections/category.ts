import { z } from 'astro/zod'

export const categorySchema = z.object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
    icon: z.string().optional(),
});