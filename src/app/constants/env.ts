import { createEnv } from '@t3-oss/env-nextjs';
import { z, ZodError } from 'zod';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export const env = createEnv({
  server: {
    SANITY_DATASET: z.string().optional(),
    SANITY_PROJECT_ID: z.string().optional(),
    SANITY_API_TOKEN: z.string(),
  },
  client: {
    NEXT_PUBLIC_ENVIRONMENT: z.nativeEnum(Environment),
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_SANITY_DATASET: z.string(),
    NEXT_PUBLIC_SANITY_PROJECT_ID: z.string(),
  },
  onValidationError: (error: ZodError) => {
    console.error('❌ Invalid environment variables:', error.flatten().fieldErrors);
    process.exit(1);
  },

  runtimeEnv: {
    // Server-side environment variables
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    // Client-side environment variables
    NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  },
  emptyStringAsUndefined: true,
});