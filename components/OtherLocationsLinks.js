import Image from 'next/image';
import styles from '@/styles/Location.module.css';
import Link from 'next/link';
import { FaThLarge } from 'react-icons/fa';

export default function OtherLocationLinks({ otherLocations }) {
  return (
    <>
      {otherLocations.length > 0 && (
        <div className={styles.nextLocationLinks}>
          <Link href={`/location/${otherLocations[0].slug}`}>
            <a>
              <span className="highlight">&lt;&nbsp;</span>{' '}
              {otherLocations[0].name}
            </a>
          </Link>

          <Link href="/gallery">
            <a
              title="Gallery"
              className="highlight"
              style={{ fontSize: '1.5rem', textAlign: '', margin: '0 .5rem' }}
            >
              <FaThLarge />
            </a>
          </Link>
          <Link href={`/location/${otherLocations[1].slug}`}>
            <a>
              {otherLocations[1].name}
              <span className="highlight">&nbsp;&gt;</span>
            </a>
          </Link>
        </div>
      )}
    </>
  );
}
