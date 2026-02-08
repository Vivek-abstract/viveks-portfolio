import HeroSection from '../components/HeroSection/HeroSection';
import Experience from '../components/Experience/Experience';
import Link from 'next/link';
import { getAllPosts } from '../lib/contentful';
import BlogDetails from '../components/BlogDetails/BlogDetails';
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';

export default async function HomePage() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <Experience />
      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container" style={{ maxWidth: '900px' }}>
            <ScrollReveal animation="fade-up">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '32px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Latest Posts</h2>
                <Link href="/blog" style={{ fontWeight: 600 }}>View all &rarr;</Link>
              </div>
            </ScrollReveal>
            {latestPosts.map((post, i) => (
              <ScrollReveal key={post.id} animation="fade-up" stagger={150} staggerIndex={i}>
                <BlogDetails post={post} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
