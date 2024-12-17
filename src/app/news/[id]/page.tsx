/* eslint-disable @typescript-eslint/no-explicit-any */
import PortableText from 'react-portable-text';

import Image from 'next/image';

import { env } from '@/app/constants/env';
import { getArticleBySlug } from '@/features/article/api/getArticleBySlug';
import { formatDate } from '@/utils/dateFormat';

type tParams = Promise<{ id: string }>;

export default async function SlugPage({ params }: { params: tParams }) {
  const { id } = await params;
  const article = await getArticleBySlug(id);

  if (!article) {
    return <div>Article not found</div>; // todo: add 404 page
  }
  console.log(article);

  return (
    <div>
      <div className='relative h-[50vh] w-full'>
        {/* Hero */}
        <Image
          width={1000}
          height={1000}
          src={article.mainImage}
          alt={article.title}
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40' /> {/* Overlay for better text visibility */}
        <div className='absolute inset-0 flex flex-col items-start justify-center px-4 md:px-20'>
          <h3 className='mb-2 text-left text-lg font-medium text-white'>NEWS</h3>
          <h1 className='text-left text-3xl font-bold text-white md:text-6xl'>{article.title}</h1>
        </div>
      </div>
      {/* Content */}
      <div className='container mx-auto px-4 py-20 pb-4'>
        <p className='pb-10 text-base text-gray-500'>{formatDate(article.createdAt)}</p>
        <PortableText
          dataset={env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={article.body}
          serializers={{
            h1: (props: any) => {
              return (
                <h1
                  className='my-5 text-2xl font-bold'
                  {...props}
                />
              );
            },
            h2: (props: any) => {
              return (
                <h2
                  className='my-5 text-xl font-bold'
                  {...props}
                />
              );
            },
            // normal is p tag
            normal: (props: any) => {
              return (
                <p
                  className='pb-4'
                  {...props}
                />
              );
            },
            li: ({ children }: any) => {
              return <li className='ml-4 list-disc'>{children}</li>;
            },
            link: ({ href, children }: any) => {
              return (
                <a
                  href={href}
                  className='text-blue-500 hover:underline'
                >
                  {children}
                </a>
              );
            },
            image: ({ asset }: any) => {
              return (
                <div className='my-8'>
                  <Image
                    src={`https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/${asset._ref.replace('image-', '').replace('-jpg', '.jpg')}`}
                    alt='Article image'
                    width={800}
                    height={500}
                    className='mx-auto'
                  />
                </div>
              );
            },
            url: ({ children }: any) => {
              return <a href={children}>{children}</a>;
            },
            youtube: ({ url }: { url: string }) => {
              return (
                <div className='relative my-8 aspect-video w-full'>
                  <iframe
                    src={url}
                    className='absolute left-0 top-0 h-full w-full'
                    frameBorder='0'
                    allow='autoplay; fullscreen; picture-in-picture'
                    allowFullScreen
                  />
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
