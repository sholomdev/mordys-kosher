import styles from '@/styles/LocationThumbs.module.css';
import LocationThumb from './LocationThumb';
import { locations } from '../data';

export default function LocationThumbs() {
  return (
    <section className={styles.LocationThumbs} id="locations">
      <h1>Chicago</h1>

      <div className={styles.thumbContainer}>
        {locations
          .filter((location) => location.city === 'Chicago')
          .map((location) => (
            <LocationThumb
              key={location.slug}
              img={location.aboutImage}
              name={location.name}
              slug={location.slug}
            ></LocationThumb>
          ))}
      </div>
      <h1>Philadelphia</h1>
      <div className={styles.thumbContainer}>
        {locations
          .filter((location) => location.city === 'Philadelphia')
          .map((location) => (
            <LocationThumb
              key={location.slug}
              img={location.aboutImage}
              name={location.name}
              slug={location.slug}
            ></LocationThumb>
          ))}
      </div>
    </section>
  );
}
