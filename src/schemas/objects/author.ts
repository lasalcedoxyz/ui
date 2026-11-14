import { z } from 'astro/zod';
import { linkSchema } from '@/schemas/objects';

export const authorSchema = z.object({
    name: z.string(),
    username: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    links: z.array(linkSchema).optional(),
});