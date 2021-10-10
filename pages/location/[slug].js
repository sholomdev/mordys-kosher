import { API_URL } from '@/config/index';
import Image from 'next/image';
import Link from 'next/link';

import { FaClock, FaMapMarkerAlt, FaThLarge } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import styles from '@/styles/Location.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';

export default function LocationPage({ location, locations, menuItems }) {
  const otherLocations = locations
    ? locations.filter((loc) => loc.id !== location.id)
    : null;
  return (
    <Layout title={`Mordy's Kosher at ${location.name}`}>
      <Header title={`${location.name}`} bg={location.headerImage.url} />
      <div className={styles.location}>
        <div className={styles.details}>
          <h2>Find Us</h2>
          <ul>
            <li>
              <span className="highlight">
                <FaMapMarkerAlt />
              </span>
              <div>
                <span className="highlight">Cart Location:</span>{' '}
                {location.cartLocation}
              </div>
            </li>
            <li>
              <span className="highlight">
                <FaClock />
              </span>
              <div>
                <span className="highlight">Hours:&nbsp; </span>{' '}
                {location.hours}
              </div>
            </li>
            {location.phone && (
              <li>
                <span className="highlight">
                  <ImPhone />
                </span>
                <div>
                  <span className="highlight">Phone:&nbsp; </span>{' '}
                  {location.phone}
                </div>
              </li>
            )}
            <li>
              <div></div>
              <div>
                <span className="highlight">Manager:&nbsp; </span>{' '}
                {location.manager}
              </div>
            </li>

            <li>
              <div></div>
              <div>
                <span className="highlight">Operated By:&nbsp; </span>{' '}
                {location.operatedBy}
              </div>
            </li>
            <li>
              <div></div>
              <div>
                <span className="highlight">Kosher Supervision:&nbsp; </span>{' '}
                {location.kashrut}
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={location.detailsImage.url}
            width={350}
            height={350}
            alt={location.name}
          ></Image>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={location.aboutImage.url}
            width={350}
            height={350}
            alt={location.name}
          ></Image>
        </div>

        <div className={styles.details}>
          <h2>About Us</h2>
          <p>{location.about}</p>
        </div>
      </div>
      <div className={styles.parallax}></div>
      <div className={styles.menu}>
        <h1>Menu</h1>
        <h4>
          <span className="highlight">*</span>all prices include tax
        </h4>
        <Carousel menuItems={menuItems}></Carousel>
      </div>
      <div className={styles.toppings}>
        <Image
          src={location.toppingImage.url}
          layout="fill"
          objectFit="contain"
          alt=""
        ></Image>
      </div>
      {otherLocations && (
        <div className={styles.nextLocationLinks}>
          <Link href={otherLocations[0].slug}>
            <a>
              <span className="highlight">&lt;&nbsp;</span>{' '}
              {otherLocations[0].name}
            </a>
          </Link>

          <Link href="/gallery">
            <a
              title="Gallery"
              className="highlight"
              style={{ fontSize: '1.5rem', textAlign: '', margin: '0 .5rem' }}
            >
              <FaThLarge />
            </a>
          </Link>
          <Link href={otherLocations[1].slug}>
            <a>
              {otherLocations[1].name}
              <span className="highlight">&nbsp;&gt;</span>
            </a>
          </Link>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/locations`);
  const locations = await res.json();

  const paths = locations.map((location) => ({
    params: { slug: location.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/locations`);
  const locations = await res.json();
  const currentLocation = locations.find((location) => location.slug === slug);
  const locationId = currentLocation.id;

  const menuRes = await fetch(`${API_URL}/menus?_location=${locationId}`);
  const menuItems = await menuRes.json();

  return {
    props: {
      location: currentLocation,
      locations,
      menuItems,
    },
  };
}
