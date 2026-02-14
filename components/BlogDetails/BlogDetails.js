import Link from 'next/link';
import { formatDate } from '../../lib/utils';
import styles from './BlogDetails.module.css';

export default function BlogDetails({ post }) {
  return (
    <div className={`d-flex mb-4 ${styles.card}`}>
      <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
        <img
          src={post.img}
          alt={post.title}
          className={`img-fluid ${styles.image}`}
        />
      </Link>
      <div className={styles.desc}>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          <h4 className={styles.title}>{post.title}</h4>
          <p className={styles.preview}>{post.preview}...</p>
        </Link>
        <span className={styles.date}>{formatDate(post.createdDate)}</span>
      </div>
    </div>
  );
}
