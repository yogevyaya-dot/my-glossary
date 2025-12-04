import { defineCollection, z } from 'astro:content';

const glossaryCollection = defineCollection({
  type: 'content', // v2.5.0 requires this
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'glossary': glossaryCollection,
};