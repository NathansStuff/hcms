import { z } from 'zod';

export const ArticleInfo = z.object({
  date: z.date(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
});

export type ArticleInfo = z.infer<typeof ArticleInfo>;
