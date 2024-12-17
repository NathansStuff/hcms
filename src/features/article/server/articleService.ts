import sanity from '@/lib/sanity';

export async function getAllPosts() {
  const results = await sanity.fetch(
    `*[_type == "post"] {
  _id,
  description,
  title,
  "createdAt": createdAt,
  "slug": slug.current
} | order(createdAt asc)
`
  );
  return results;
}

export async function getPostBySlug(slug: string) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
   _id,
   createdAt,
   title,
   description,
   "mainImage": mainImage.asset->url,
   "slug": slug.current,
   body
  }
  `,
    {
      slug,
    }
  );
  if (!post) {
    return {
      notFound: true,
    };
  }
  return post;
}
