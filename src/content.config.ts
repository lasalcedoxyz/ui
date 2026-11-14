import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const changeTypeSchema = z.enum([
    'added',
    'improved',
    'fixed',
    'removed',
    'deprecated',
    'security', 
]).default('added');

const frameworkTypeSchema = z.enum([
    'astro',
    'react',
    'next',
    'tanstack-start', 
    'tailwind',
    'gsap',
]).default('astro');

const dependencyTypeSchema = z.enum([
    'dependency',
    'dev',
    'peer',
    'optional', 
]).default('dependency');

//Objects
const tagSchema = z.object({
    name: z.string(),
    slug: z.string(), 
});

const linkSchema = z.object({
    label: z.string(),
    url: z.string(),
    external: z.boolean().default(false),
})

const authorSchema = z.object({
    name: z.string(),
    username: z.string().optional(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    links: z.array(linkSchema).optional(),
});

const categorySchema = z.object({
    name: z.string(),
    slug: z.string(),
    icon: z.string().optional(),
});

const versionSchema = z.object({
    version: z.int(),
    releaseDate: z.coerce.date(),
});

const changeSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    type: changeTypeSchema,
    breaking: z.boolean().default(false),
    links: z.array(z.url()).default([]),
});

const frameworkSchema = z.object({
    type: z.array(frameworkTypeSchema),
    version: z.string().optional(),
    minVersion: z.coerce.date().optional(),
    maxVersion: z.coerce.date().optional(),
});

const dependencySchema = z.object({
    name: z.string(),
    version: z.string().default('latest'),
    type: dependencyTypeSchema,
    optional: z.boolean().default(false),
});

//Collections
const page = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/pages',
    }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        draft: z.boolean().default(false),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});

const doc = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/docs',
    }),
    schema: z.object({
        title: z.string(),
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
        pattern: '**/*.{md,mdx}',
        base: './src/content/blogs',
    }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        draft: z.boolean().default(false),
        category: z.string().optional(),
        tags: z.array(tagSchema).optional(),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});

const changelog = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/changelog',
    }),
    schema: z.object({
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
});

const component = defineCollection({
    loader: glob({
        pattern: '**/*.{md,mdx}',
        base: './src/content/components',
    }),
    schema: z.object({
        name: z.string(),
        slug: z.string(),
        description: z.string().optional(),
        status: z.enum(['component', 'block', 'template']).default('component'),
        category: z.string(),
        subCategory: z.string().optional(),
        dependencies: z.array(dependencySchema).optional(),
        frameworks: z.array(frameworkSchema).optional(),
        tags: z.array(tagSchema).optional(),
        lastUpdate: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
    })
});


export const collections  = {
    page,
    doc,
    blog,
    changelog,
    component,
}