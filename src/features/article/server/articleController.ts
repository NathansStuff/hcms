import { NextRequest } from 'next/server';

import { ResponseCode } from '@/types/ResponseCode';
import { NextResponse } from 'next/server';
import { getAllPosts, getPostBySlug } from './articleService';
import { getLastSegment } from '@/utils/getLastSegment';

export async function getArticlesHandler(): Promise<NextResponse> {
  const result = await getAllPosts();
  return NextResponse.json(result, { status: ResponseCode.OK });
}

export async function getArticleBySlugHandler(req: NextRequest): Promise<NextResponse> {
  const slug = getLastSegment(req.nextUrl.pathname);
  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: ResponseCode.BAD_REQUEST });
  }
  const result = await getPostBySlug(slug);
  return NextResponse.json(result, { status: ResponseCode.OK });
}
