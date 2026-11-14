import { z } from 'astro/zod';
import { 
    changeSchema,
    authorSchema,
} from "@/schemas/objects";

export const changelogSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    version: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    breaking: z.boolean().default(false),
    prerelease: z.boolean().default(false),
    changes: z.array(changeSchema).optional(),
    contributors: z.array(authorSchema).optional(),
    releaseUrl: z.url().optional(),
    lastUpdate: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})