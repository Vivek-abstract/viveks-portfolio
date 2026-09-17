import HeroSection from "../components/HeroSection/HeroSection";
import Experience from "../components/Experience/Experience";
import Link from "next/link";
import { getAllPosts } from "../lib/contentful";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";

export default async function HomePage() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <HeroSection />
      <Experience />
      {latestPosts.length > 0 && (
        <section className="section">
          <div className="container">
            <ScrollReveal animation="fade-up">
              <p className="eyebrow">02 / Writing</p>
              <div className="section-heading">
                <h2>Notes from the work.</h2>
                <Link href="/blog">All writing &rarr;</Link>
              </div>
            </ScrollReveal>
            {latestPosts.map((post, i) => (
              <ScrollReveal
                key={post.id}
                animation="fade-up"
                stagger={150}
                staggerIndex={i}
              >
                <BlogDetails post={post} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
