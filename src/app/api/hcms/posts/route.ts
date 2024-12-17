import { getArticlesHandler } from '@/features/article/server/articleController';
import { TryCatchMiddleware } from '@/middleware/tryCatchMiddleware';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  return await TryCatchMiddleware(() => getArticlesHandler());
}

