import { BaseApiClient } from '@/features/apiClient/lib/BaseApiClient';
import { Article } from '../types/Article';

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await BaseApiClient.get<Article | null>(`/api/hcms/posts/${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
}
