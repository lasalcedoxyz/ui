import { z } from 'astro/zod'

export const versionSchema = z.object({
    number: z.number(),
    releaseDate: z.coerce.date().optional(),
    prerelease: z.boolean().default(false),
});