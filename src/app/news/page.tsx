import ArticleList from '@/features/article/components/ArticleList';
import { AnimatedBackground } from '@/features/common/AnimatedBackground';
import PressEnquiry from './_components/PressEnquiry';
import { getAllArticles } from '@/features/article/api/getAllArticles';

async function NewsPage() {
  // const articles = mockArticleInfo;
  const articles = await getAllArticles();
  return (
    <div>
      <AnimatedBackground>
        <div className='relative z-10 flex h-full flex-col justify-center px-10 text-center text-white'>
          <h1 className='mb-4'>NEWS</h1>
          <h2 className='text-5xl font-bold sm:text-7xl md:text-8xl'>Catch up on our latest</h2>
        </div>
      </AnimatedBackground>
      <ArticleList articles={articles} />
      <AnimatedBackground className='h-[40vh] md:h-[60vh]'>
        <div className='relative z-10 flex h-full flex-col justify-center px-10 text-center text-white'>
          <h2 className='pb-20 text-5xl font-bold md:text-6xl'>Do you have a press enquiry?</h2>
          <div className='flex justify-center'>
            <PressEnquiry />
          </div>
        </div>
      </AnimatedBackground>
    </div>
  );
}

export default NewsPage;
