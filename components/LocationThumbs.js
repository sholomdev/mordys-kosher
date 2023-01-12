// import Image from 'next/image';
import styles from '@/styles/LocationThumbs.module.css';
import LocationThumb from './LocationThumb';
// import mcCormickImg from '../public/images/mccormick-place.jpg';
// import wellsFargoImg from '../public/images/wells-fargo.jpg';
// import soldierFieldImg from '../public/images/soldier-field-1.jpg';
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
        {/* 
        <LocationThumb
          img={soldierFieldImg}
          title="Soldier Field"
          link="/location/soldier-field"
        ></LocationThumb>
        <LocationThumb
          img={wellsFargoImg}
          title="Wells Fargo Center"
          link="/location/wells-fargo-center"
        ></LocationThumb> */}
      </div>
    </section>
  );
}
