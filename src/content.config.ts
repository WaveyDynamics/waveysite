import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.string(),
    updated: z.string().optional(),
    originalUrl: z.string().optional(),
    coverImage: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    categories: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };