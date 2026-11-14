import { z } from 'astro/zod'

export const versionSchema = z.object({
    number: z.number(),
    label: z.string(),
    releaseDate: z.coerce.date().optional(),
    prerelease: z.boolean().default(false),
});