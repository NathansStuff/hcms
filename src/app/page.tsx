import Link from 'next/link';
import { ArrowRight, Newspaper, Database } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className='h-full flex-grow bg-gradient-to-br from-[#06031f] to-[#01001e]'>
      <main className='container mx-auto px-4 py-16 pt-28 text-center'>
        <p className='mb-2 text-xl text-gray-600'>A sample project showcasing the power of Sanity CMS and Next.js</p>
        <p className='mb-8 text-sm text-gray-600'>
          The article content and overall display is replicated from <Link href='https://dijgtal.com/'>D/JGTAL</Link>
        </p>

        <div className='mb-12 flex justify-center space-x-4'>
          <div className='flex items-center space-x-2 text-blue-600'>
            <Newspaper size={24} />
            <span>Dynamic Articles</span>
          </div>
          <div className='flex items-center space-x-2 text-green-600'>
            <Database size={24} />
            <span>Sanity CMS</span>
          </div>
        </div>

        <div className='mb-16 flex flex-col items-center justify-center gap-6'>
          <Carousel className='flex w-full max-w-md justify-center'>
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <Image
                          width={400}
                          height={400}
                          src={`/images/${index + 1}.png`}
                          alt={`Slide ${index + 1}`}
                          className='h-full w-full object-cover'
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Link
          href='/news'
          className='group inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-700'
        >
          Explore Our Articles
          <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
        </Link>
      </main>
    </main>
  );
}
