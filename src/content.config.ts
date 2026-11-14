import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { 
    pageSchema,
    blogSchema,
    docSchema,
    changelogSchema,
    componentSchema, 
} from '@/schemas/collections';

const page = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/pages',
    }),
    schema: pageSchema,
});

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/blogs',
    }),
    schema: blogSchema,
});

const doc = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/docs',
    }),
    schema: docSchema,
});

const changelog = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/changelog',
    }),
    schema: changelogSchema,
});

const component = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/components',
    }),
    schema: componentSchema,
});

export const collections  = {
    page,
    doc,
    blog,
    changelog,
    component,
}