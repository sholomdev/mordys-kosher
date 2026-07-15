import Image from 'next/image';
import styles from '@/styles/LocationThumb.module.css';
import Link from 'next/link';
import { pushEvent } from '@/lib/gtm';
export default function LocationThumb({ img, name, slug }) {
  return (
    <Link
      href={`/location/${slug}`}
      onClick={() =>
        pushEvent('location_card_click', {
          location_name: name,
          location_slug: slug,
        })
      }
    >
      <div className={styles.locationThumb}>
        <div className={styles.thumb}>
          <Image
            alt={name}
            src={img}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>
        <p className={styles.thumbTitle}>{name}</p>
      </div>
    </Link>
  );
}
