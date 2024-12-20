import { BaseApiClient } from '@/features/apiClient/lib/BaseApiClient';

import { ArticleInfo } from '../types/ArticleInfo';

export async function getAllArticles(): Promise<ArticleInfo[]> {
  try {
    const response = await BaseApiClient.get<ArticleInfo[]>('/api/hcms/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}
