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
            <span className="highlight">&lt;&nbsp;</span>{' '}
            {otherLocations[0].name}
          </Link>

          <Link
            title="Gallery"
            className="highlight"
            style={{ fontSize: '1.5rem', textAlign: '', margin: '0 .5rem' }}
            href="/gallery"
          >
            <FaThLarge />
          </Link>
          <Link href={`/location/${otherLocations[1].slug}`}>
            {otherLocations[1].name}
            <span className="highlight">&nbsp;&gt;</span>
          </Link>
        </div>
      )}
    </>
  );
}
