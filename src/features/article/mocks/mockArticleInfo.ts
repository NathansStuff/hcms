import { z } from 'zod';

export const ArticleInfo = z.object({
  date: z.date(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
});

export type ArticleInfo = z.infer<typeof ArticleInfo>;

export const mockArticleInfo: ArticleInfo[] = [
  {
    date: new Date('2023-12-05'),
    title: 'Mister Cartoon and Turtle Wax Partnership Launches in Australia and New Zealand via DIJGTAL',
    slug: 'mister-cartoon-turtle-wax-launch-australia-nz',
    description:
      'DIJGTAL launches ‘The Art of Car Care’, an exciting partnership between renowned LA street artist and icon, Mister Cartoon and Turtle Wax in Australia and New Zealand.',
  },
  {
    date: new Date('2020-07-01'),
    title: 'DIJGTAL x Enthusiast launches national brand campaign: Sunday Driver',
    slug: 'dijgtal-enthusiast-sunday-driver',
    description:
      'On the 1st July we launched Sunday Driver, an exciting new national brand campaign for Enthusiast Motor Insurance, celebrating real customers and their love of cars.',
  },
  {
    date: new Date('2020-04-27'),
    title: 'DIJGTAL Breaks Ground in Vancouver, Canada',
    slug: 'dijgtal-vancouver-expansion',
    description:
      'Our office doors are open! DIJGTAL is proudly playing its part in the Australian business community, and we’re excited to do the same for North America.',
  },
  {
    date: new Date('2020-02-10'),
    title: 'Linde Material Handling Australia appoints DIJGTAL as new Marketing Partner',
    slug: 'linde-material-handling-dijgtal-partnership',
    description:
      'Learn more about our new partnership with the world’s second largest industrial truck and supply chains solutions company.',
  },
  {
    date: new Date('2019-11-25'),
    title: 'DIJGTAL expands into North America with former News Corp native Adam Natiq at the helm',
    slug: 'dijgtal-north-america-adam-natiq',
    description:
      'We’re thrilled to announce the opening of our new office in Vancouver, Canada, with the help of the most recent addition to the DIJGTAL family, Adam Natiq.',
  },
];
