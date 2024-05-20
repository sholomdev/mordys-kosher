import styles from '@/styles/LocationThumbs.module.css';
import LocationThumb from './LocationThumb';

export default function LocationThumbs({ locations }) {
  return (
    <section className={styles.LocationThumbs} id="locations">
      <h1>Locations</h1>

      <div className={styles.thumbContainer}>
        {locations.map((location) => (
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
