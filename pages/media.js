import styles from '@/styles/MediaPage.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import bg from '../public/images/headerBGs/news-bg.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '../config';
export default function MediaPage({ articles }) {
  return (
    <Layout>
      <Header title="News" bg={bg} />
      <div className={styles.media}>
        <h1>Look, we&apos;re famous!</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <div className={styles.imageContainer}>
                <Image
                  src={article.image.url}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={article.link}
                  className={styles.btn}
                >
                  Read More
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles`);
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 60 * 60 * 24,
  };
}