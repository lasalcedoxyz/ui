import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';
import { 
    pageSchema,
    blogSchema,
    docSchema,
    changelogSchema,
    componentSchema, 
    blockSchema,
    templateSchema,
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

const block = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/blocks',
    }),
    schema: blockSchema,
});

const template = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/templates',
    }),
    schema: templateSchema,
});

export const collections  = {
    page,
    doc,
    blog,
    changelog,
    component,
    block,
    template,
}