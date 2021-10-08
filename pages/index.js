import Layout from '@/components/Layout';
import styles from '../styles/Home.module.css';
import Hero from '@/components/Hero';
import AboutMordy from '@/components/AboutMordy';
import LocationThumbs from '@/components/LocationThumbs';
import { API_URL } from '../config';
import Events from '@/components/Events';
import getLocationSlugs from '../lib/locationSlugs';

export default function Home({ locations, events }) {
  return (
    <Layout>
      <div className={styles.homePage}>
        <Hero></Hero>
        <AboutMordy />
        <LocationThumbs locations={locations}></LocationThumbs>
        <Events events={events}>Upcoming Events</Events>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const resLocations = await fetch(`${API_URL}/locations`);
  const locations = await resLocations.json();

  const locationSlugs = await getLocationSlugs();

  const resEvents = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await resEvents.json();

  return {
    props: { locations, events },
    revalidate: 60 * 60 * 24,
  };
}
