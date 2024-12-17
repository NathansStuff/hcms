import { z } from 'zod';

export const Article = z.object({
  createdAt: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  mainImage: z.string(),
  body: z.any(),
});

export type Article = z.infer<typeof Article>;
