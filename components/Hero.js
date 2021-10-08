import Link from 'next/link';
import styles from '../styles/Hero.module.css';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/images/freshVeg.jpg"
        id="bgvid"
      >
        <source src="/videos/fallingVeg.mp4" type="video/mp4" />
      </video>
      <h1>The Hottest Dog in Town</h1>
      <Link href="#locations">
        <a className={styles.btn}>View Locations</a>
      </Link>
    </section>
  );
}
