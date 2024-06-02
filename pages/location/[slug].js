import Image from 'next/image';

import styles from '@/styles/Location.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import LocationDetails from '@/components/LocationDetails';
import OtherLocationLinks from '@/components/OtherLocationsLinks';
import { locations as allLocations } from '../../data';
import { useRouter } from 'next/router';

export default function LocationPage({ locations }) {
  const router = useRouter();
  const slug = router.query.slug;
  const location = locations.find((loc) => loc.slug === slug);
  const otherLocations = locations.filter((loc) => loc.slug !== slug);

  return (
    <Layout title={`Mordy's Kosher at ${location.name}`}>
      <Header title={`${location.name}`} bg={location.headerImage} />
      <LocationDetails location={location} />
      <div className={styles.parallax}></div>
      {location.menuItems && (
        <div className={styles.menu}>
          <h1>Menu</h1>
          <h4>
            <span className="highlight">*</span>all prices include tax
          </h4>
          <Carousel menuItems={location.menuItems}></Carousel>
        </div>
      )}
      {location.flyerImage && (
        <div
          style={{
            marginTop: '5rem',
            marginBottom: '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Image
            src={location.flyerImage}
            alt={location.name + ' flyer.'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          ></Image>

          {location.menuImage && (
            <Image
              src={location.menuImage}
              alt={location.name + ' menu.'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            ></Image>
          )}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'center',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Image
          src={location.toppingImage}
          alt="toppings"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        ></Image>
      </div>

      <OtherLocationLinks otherLocations={otherLocations}></OtherLocationLinks>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = allLocations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: { locations: allLocations },
  };
}
