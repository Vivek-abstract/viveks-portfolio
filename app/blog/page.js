import { getAllPosts } from '../../lib/contentful';
import BlogDetails from '../../components/BlogDetails/BlogDetails';

export const metadata = {
  title: 'Blog | Vivek Gawande',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '40px' }}>
          Latest Blog Posts
        </h1>
        {posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
