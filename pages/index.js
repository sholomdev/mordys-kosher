import Layout from '@/components/Layout';
import styles from '../styles/Home.module.css';
import Hero from '@/components/Hero';
import AboutMordy from '@/components/AboutMordy';
import LocationThumbs from '@/components/LocationThumbs';

export default function Home({ locations }) {
  return (
    <Layout>
      <div className={styles.homePage}>
        <Hero></Hero>
        <AboutMordy />
        <LocationThumbs></LocationThumbs>
      </div>
    </Layout>
  );
}
