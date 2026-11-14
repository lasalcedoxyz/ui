import { z } from 'astro/zod';
import {
    changeSchema,
    authorSchema,
    tagSchema,
    versionSchema
} from '@/schemas/objects';

export const changelogSchema = z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    version: versionSchema,
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    breaking: z.boolean().default(false),
    prerelease: z.boolean().default(false),
    changes: z.array(changeSchema).optional(),
    releaseUrl: z.url().optional(),
    contributors: z.array(authorSchema).optional(),
    tags: z.array(tagSchema).optional(),
    updatedAt: z.coerce.date().optional(),
    createdAt: z.coerce.date().optional(),
})