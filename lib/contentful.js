import * as contentful from 'contentful';

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_READ_API_KEY;

const client =
  space && accessToken
    ? contentful.createClient({ space, accessToken })
    : null;

function formatPost(post) {
  return {
    id: post.fields.id,
    title: post.fields.title,
    img: post.fields.image.fields.file.url,
    preview: post.fields.preview,
    content: post.fields.content,
    createdDate: post.fields.createdDate,
  };
}

export async function getAllPosts() {
  if (!client) return [];

  const posts = await client.getEntries({
    content_type: 'blogPost',
  });

  return posts.items
    .map(formatPost)
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
}

export async function getPostById(id) {
  if (!client) return null;

  const posts = await client.getEntries({
    content_type: 'blogPost',
  });

  const post = posts.items.map(formatPost).find((p) => p.id == id);
  return post || null;
}
