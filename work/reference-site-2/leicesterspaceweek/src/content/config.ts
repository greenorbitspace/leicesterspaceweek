import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    audience: z.string(),
    summary: z.string(),
    date: z.string().optional(),
    venue: z.string().optional(),
    href: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.string(),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    blurb: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  events,
  partners,
  pages,
};
