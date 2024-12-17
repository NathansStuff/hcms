import { env } from '@/app/constants/env';
import sanityClient from '@sanity/client';

const config = {
  dataset: env.SANITY_DATASET || 'production',
  projectId: env.SANITY_PROJECT_ID,
  apiVersion: '2021-04-20',
  useCdn: env.NEXT_PUBLIC_ENVIRONMENT === 'production',
  token: env.SANITY_API_TOKEN,
};

const sanity = sanityClient(config);

export default sanity;
