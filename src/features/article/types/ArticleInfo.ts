import { z } from 'zod';

export const ArticleInfo = z.object({
  createdAt: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
});

export type ArticleInfo = z.infer<typeof ArticleInfo>;
