import { NextRequest, NextResponse } from 'next/server';

import { getArticleBySlugHandler } from '@/features/article/server/articleController';
import { TryCatchMiddleware } from '@/middleware/tryCatchMiddleware';

export async function GET(req: NextRequest): Promise<NextResponse> {
  return await TryCatchMiddleware(() => getArticleBySlugHandler(req));
}
