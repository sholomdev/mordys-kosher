import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import MobileNavbar from './MobileNavbar';

export default function Layout({
  title,
  keywords,
  description,
  children,
  locations,
}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar locations={locations} />
      <MobileNavbar locations={locations} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Mordy's Kosher",
  description:
    'Kosher concessions serving McCormick Place, Soldier Field, and Wells Fargo Center',
  keywords:
    'kosher, food, concessions, chicago, McCormick Place, Soldier Field',
  locations: [
    { slug: 'mccormick-place', name: 'McCormick Place', id: 1 },
    { slug: 'wells-fargo-center', name: 'Wells Fargo Center', id: 2 },
    { slug: 'soldier-field', name: 'Soldier Field', id: 3 },
    { slug: 'united-center', name: 'United Center', id: 4 },
    { slug: 'citizens-bank-park', name: 'Citizens Bank Park', id: 5 },
  ],
};
