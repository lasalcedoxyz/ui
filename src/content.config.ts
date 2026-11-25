import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import {
  pageSchema,
  blogSchema,
  docSchema,
  componentSchema,
  blockSchema,
  templateSchema,
  changelogSchema,
  tagSchema,
  categorySchema,
  authorSchema,
  frameworkSchema,
  dependencySchema,
} from "@/src/schemas/collections/index";

//Content Collections
const page = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: pageSchema,
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blogs",
  }),
  schema: blogSchema,
});

const doc = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/docs",
  }),
  schema: docSchema,
});

const component = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/components",
  }),
  schema: componentSchema,
});

const block = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blocks",
  }),
  schema: blockSchema,
});

const template = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/templates",
  }),
  schema: templateSchema,
});

const changelog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/changelog",
  }),
  schema: changelogSchema,
});

//Collection Objects
const tag = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/data/tags",
  }),
  schema: tagSchema,
});

const category = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/data/categories",
  }),
  schema: categorySchema,
});

const author = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/data/authors",
  }),
  schema: authorSchema,
});

const framework = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/data/frameworks",
  }),
  schema: frameworkSchema,
});

const dependency = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/data/dependencies",
  }),
  schema: dependencySchema,
});

export const collections = {
  page,
  blog,
  doc,
  component,
  block,
  template,
  changelog,
  tag,
  category,
  author,
  framework,
  dependency,
};

