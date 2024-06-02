import Layout from '@/components/Layout';
import styles from '../styles/Home.module.css';
import Hero from '@/components/Hero';
import AboutMordy from '@/components/AboutMordy';
import LocationThumbs from '@/components/LocationThumbs';
import Events from '@/components/Events';

export default function Home({ locations, events }) {
  return (
    <Layout>
      <div className={styles.homePage}>
        <Hero></Hero>
        <AboutMordy />
        <LocationThumbs></LocationThumbs>
        {/* <Events events={events}>Upcoming Events</Events> */}
      </div>
    </Layout>
  );
}
