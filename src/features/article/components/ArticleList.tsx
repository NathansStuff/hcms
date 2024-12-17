import Link from 'next/link';
import { ArticleInfo } from '../types/ArticleInfo';
import { formatDate } from '@/utils/dateFormat';

interface ArticleListProps {
  articles: ArticleInfo[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className='mx-auto max-w-4xl px-4 py-24'>
      {articles.map((article, index) => (
        <article
          key={article.slug}
          className={`relative ${index !== articles.length - 1 ? 'mb-16' : ''}`}
        >
          <div className='mb-4 flex items-center gap-4'>
            <time className='whitespace-nowrap text-sm text-gray-500'>{formatDate(article.createdAt)}</time>
            <div className='h-[1px] w-full flex-grow self-center bg-gray-400' />
          </div>
          <div className='md:flex md:items-start md:gap-8'>
            <h2 className='mb-4 text-2xl font-normal leading-tight md:mb-0 md:flex-1'>{article.title}</h2>
            <p className='mb-8 leading-relaxed text-gray-700 md:mb-0 md:flex-1'>{article.description}</p>
            <div className='md:flex-[0.5] md:pt-[1.25rem]'>
              <Link
                href={`/news/${article.slug}`}
                className='group relative inline-flex items-center pl-5 font-medium text-theme'
              >
                <span className='absolute left-0 top-[-1.25rem] h-[calc(100%+2.5rem)] w-[3px] bg-theme transition-all duration-300 group-hover:w-[calc(100%+1.25rem)]' />
                <span className='relative font-bold text-black'>READ MORE</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ArticleList;
