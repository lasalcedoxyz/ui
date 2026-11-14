import { z } from 'astro/zod'

export const versionSchema = z.object({
    version: z.int(),
    releaseDate: z.coerce.date(),
});