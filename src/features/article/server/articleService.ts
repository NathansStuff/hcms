import sanity from '@/lib/sanity';

export async function getAllPosts() {
  const results = await sanity.fetch(
    `*[_type =="post"]{
   _id,
   description,
   slug {
    current
   }
  } | order(date asc)`
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
   mainImage,
   slug,
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
