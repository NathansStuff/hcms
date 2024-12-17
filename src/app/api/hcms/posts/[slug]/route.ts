import { getArticleBySlugHandler } from '@/features/article/server/articleController';
import { TryCatchMiddleware } from '@/middleware/tryCatchMiddleware';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  return await TryCatchMiddleware(() => getArticleBySlugHandler(req));
}
