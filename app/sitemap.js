import { getAllPosts } from '../lib/contentful';

export const dynamic = 'force-static';

const SITE_URL = 'https://vivekgawande.in';

export default async function sitemap() {
  const posts = await getAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: post.createdDate ? new Date(post.createdDate) : new Date(),
  }));

  const staticEntries = [
    { url: `${SITE_URL}/`, lastModified: new Date() },
    { url: `${SITE_URL}/about/`, lastModified: new Date() },
    { url: `${SITE_URL}/blog/`, lastModified: new Date() },
  ];

  return [...staticEntries, ...postEntries];
}
