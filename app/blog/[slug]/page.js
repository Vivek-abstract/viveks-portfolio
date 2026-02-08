import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { getAllPosts, getPostById } from '../../../lib/contentful';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  if (posts.length === 0) {
    // Return a placeholder so static export doesn't fail without Contentful credentials
    return [{ slug: '_placeholder' }];
  }
  return posts.map((post) => ({ slug: String(post.id) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostById(slug);
  if (!post) return { title: 'Post Not Found' };
  return { title: `${post.title} | Vivek Gawande` };
}

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === 'blogPost') {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }
      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (
        <div className="d-flex justify-content-center" style={{ width: '100%' }}>
          <img
            src={`https://${node.data.target.fields.file.url}`}
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            alt={node.data.target.fields.description}
            className="img-fluid"
            style={{ maxWidth: '80%', marginTop: '12px', marginBottom: '12px' }}
          />
        </div>
      );
    },
  },
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostById(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = documentToReactComponents(post.content, renderOptions);

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <img
          src={post.img}
          alt={post.title}
          className="img-fluid"
          style={{ borderRadius: '12px', marginBottom: '32px', width: '100%' }}
        />
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }}>
          {post.title}
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
          {new Date(post.createdDate).toDateString()}
        </p>
        <div className="blog-content" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
          {contentHtml}
        </div>
      </div>
    </section>
  );
}
