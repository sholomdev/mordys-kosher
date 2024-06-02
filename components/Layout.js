import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import MobileNavbar from './MobileNavbar';

export default function Layout({
  title = "Mordy's Kosher",
  keywords = 'kosher, food, concessions, chicago, McCormick Place, Soldier Field, philadelphia',
  description = 'Kosher concessions serving locations in Chicago and Philadelphia',
  children,
}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
