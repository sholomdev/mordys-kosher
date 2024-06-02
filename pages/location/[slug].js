import Image from 'next/image';

import styles from '@/styles/Location.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import LocationDetails from '@/components/LocationDetails';
import OtherLocationLinks from '@/components/OtherLocationsLinks';
import { locations } from '../../data';
import { useRouter } from 'next/router';

export default function LocationPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const location = locations.find((loc) => loc.slug === slug);
  const otherLocations = locations.filter((loc) => loc.slug !== slug);

  if (location.comingSoonImage) {
    return (
      <Layout title={`Mordy's Kosher at ${location.name}`}>
        <Header title={`${location.name}`} bg={location.headerImage} />
        <div className={styles.comingSoon}>
          <Image
            src={location.comingSoonImage}
            alt={location.name + ' coming soon.'}
            width={500}
            height={650}
            objectFit="contain"
          ></Image>
        </div>
      </Layout>
    );
  }
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
            margin: 'auto',
            gap: '5rem',
          }}
        >
          <Image
            src={location.flyerImage}
            alt={location.name + ' flyer.'}
            width={600}
            height={750}
            objectFit="contain"
          ></Image>

          {location.menuImage && (
            <Image
              src={location.menuImage}
              alt={location.name + ' menu.'}
              width={600}
              height={750}
              objectFit="contain"
            ></Image>
          )}
        </div>
      )}
      <div className={styles.toppings}>
        <Image
          src={location.toppingImage}
          fill
          objectFit="contain"
          alt=""
        ></Image>
      </div>

      <OtherLocationLinks otherLocations={otherLocations}></OtherLocationLinks>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = locations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
