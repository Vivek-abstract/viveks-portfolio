import { getAllPosts } from '../../lib/contentful';
import BlogDetails from '../../components/BlogDetails/BlogDetails';
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal';

export const metadata = {
  title: 'Blog',
  description:
    'Blog posts by Vivek Gawande on software engineering, .NET, React, and web development.',
  alternates: { canonical: '/blog/' },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <ScrollReveal animation="fade-up">
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '40px' }}>
            Latest Blog Posts
          </h1>
        </ScrollReveal>
        {posts.map((post, i) => (
          <ScrollReveal key={post.id} animation="fade-up" stagger={120} staggerIndex={i}>
            <BlogDetails post={post} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
