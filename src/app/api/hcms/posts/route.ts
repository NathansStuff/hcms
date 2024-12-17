import { NextResponse } from 'next/server';

import { getArticlesHandler } from '@/features/article/server/articleController';
import { TryCatchMiddleware } from '@/middleware/tryCatchMiddleware';

export async function GET(): Promise<NextResponse> {
  return await TryCatchMiddleware(() => getArticlesHandler());
}
