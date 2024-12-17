import { ArrowRight, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AnimatedBackground } from '@/features/common/AnimatedBackground';
import { TypewriterEffect } from '@/components/ui/TypewriterEffect';

const imageUrls = [
  'https://mtgassetslads.s3.ap-southeast-2.amazonaws.com/hcms1.PNG',
  'https://mtgassetslads.s3.ap-southeast-2.amazonaws.com/hcms2.PNG',
  'https://mtgassetslads.s3.ap-southeast-2.amazonaws.com/hcms3.PNG',
  'https://mtgassetslads.s3.ap-southeast-2.amazonaws.com/hcms4.PNG',
];

export default function HomePage() {
  return (
    <AnimatedBackground className='h-full w-full'>
      <main className='container relative z-10 mx-auto px-4 py-16 pt-28 text-center'>
        <h3 className='mb-2 text-2xl text-white md:pt-10 md:text-4xl'>
          A sample project showcasing the power of{' '}
          <TypewriterEffect
            words={['Sanity CMS', 'Next.js', 'Tailwind CSS', 'Lucide Icons', 'Shadcn UI']}
            className='font-bold'
          />
        </h3>
        <p className='mb-8 text-sm text-white/80'>
          The article content and overall display is replicated from{' '}
          <Link
            href='https://dijgtal.com/'
            className='underline hover:text-white'
          >
            D/JGTAL
          </Link>
        </p>
        <p className='mb-8 text-sm text-white/80'>
          The project is built with Next.js, Tailwind CSS, Lucide Icons, Shadcn UI and Sanity CMS. The code is available
          on{' '}
          <Link
            href='https://github.com/NathansStuff/hcms'
            className='underline hover:text-white'
          >
            GitHub
          </Link>
          .
        </p>

        <div className='mb-12 flex justify-center space-x-4'>
          <div className='flex items-center space-x-2 text-white'>
            <Database size={24} />
            <span>Sanity CMS</span>
          </div>
        </div>

        <div className='mb-16 flex flex-col items-center justify-center gap-6'>
          <Carousel className='flex h-[300px] w-[300px] justify-center sm:h-[400px] sm:w-[400px]'>
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card className=''>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <Image
                          width={400}
                          height={400}
                          src={imageUrls[index]}
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
          See the Articles
          <ArrowRight className='ml-2 transition-transform group-hover:translate-x-1' />
        </Link>
      </main>
    </AnimatedBackground>
  );
}
