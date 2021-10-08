import Image from 'next/image';
import styles from '@/styles/LocationThumb.module.css';
import Link from 'next/link';
export default function LocationThumb({ img, name, slug }) {
  return (
    <Link href={`/location/${slug}`}>
      <a>
        <div className={styles.locationThumb}>
          <div className={styles.thumb}>
            <Image
              alt="McCormick Place"
              src={img}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <p className={styles.thumbTitle}>{name}</p>
        </div>
      </a>
    </Link>
  );
}
