import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const page = defineCollection({
    loader: glob({
        pattern: '**/*.{md, mdx}',
        base: './src/content/pages',
    }),
    schema: z.object({
        title: z.string().min(1).max(200),
        slug: z.string(),
        draft: z.boolean().default(false),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});

const doc = defineCollection({
    loader: glob({
        pattern: '**/*.{md, mdx}',
        base: './src/content/docs',
    }),
    schema: z.object({
        title: z.string().min(1).max(200),
        slug: z.string(),
        type: z.enum(['component', 'block', 'template']).default('component'),
        category: z.string(),
        subCategory: z.string().optional(),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.{md, mdx}',
        base: './src/content/blogs',
    }),
    schema: z.object({
        title: z.string().min(1).max(200),
        slug: z.string(),
        draft: z.boolean().default(false),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});


export const collections  = {
    page,
    doc,
    blog,
}