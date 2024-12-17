import { BaseApiClient } from '@/features/apiClient/lib/BaseApiClient';
import { ArticleInfo } from '../mocks/mockArticleInfo';

export async function getAllArticles(): Promise<ArticleInfo[]> {
  try {
    const response = await BaseApiClient.get<ArticleInfo[]>(`/api/hcms/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
}
