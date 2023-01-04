import Image from 'next/image';

import styles from '@/styles/Location.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import LocationDetails from '@/components/LocationDetails';
import OtherLocationLinks from '@/components/OtherLocationsLinks';
import locationData from '../../locationData';

export default function LocationPage({ location, locations }) {
  if (!location || !locations) return <h1>Loading</h1>;
  const otherLocations = locations.filter((loc) => loc.slug !== location.slug);
  return (
    <Layout title={`Mordy's Kosher at ${location.name}`}>
      <Header title={`${location.name}`} bg={location.headerImage} />
      <LocationDetails location={location} />
      <div className={styles.parallax}></div>
      <div className={styles.menu}>
        <h1>Menu</h1>
        <h4>
          <span className="highlight">*</span>all prices include tax
        </h4>
        <Carousel menuItems={location.menuItems}></Carousel>
      </div>
      <div className={styles.toppings}>
        <Image
          src={location.toppingImage}
          layout="fill"
          objectFit="contain"
          alt=""
        ></Image>
      </div>

      <OtherLocationLinks otherLocations={otherLocations}></OtherLocationLinks>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = locationData.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const currentLocation = locationData.find(
    (location) => location.slug === slug
  );
  return {
    props: {
      location: currentLocation,
      locations: locationData,
    },
  };
}
