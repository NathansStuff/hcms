import ArticleList from '@/features/article/components/ArticleList';
import { mockArticleInfo } from '@/features/article/mocks/mockArticleInfo';
import { AnimatedBackground } from '@/features/common/AnimatedBackground';

function NewsPage() {
  const articles = mockArticleInfo; // TODO: get from API
  return (
    <div>
      <AnimatedBackground>
        <div className='relative z-10 flex h-full flex-col justify-center px-10 text-center text-white'>
          <h1 className='mb-4'>NEWS</h1>
          <h2 className='text-5xl font-bold sm:text-7xl md:text-8xl'>Catch up on our latest</h2>
        </div>
      </AnimatedBackground>
      <ArticleList articles={articles} />
      {/* Latest Articles */}
      {/* Contact Form */}
      {/* Footer */}
    </div>
  );
}

export default NewsPage;
