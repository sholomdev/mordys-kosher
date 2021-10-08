import styles from '@/styles/AboutMordy.module.css';
import Image from 'next/image';
export default function AboutMordy() {
  return (
    <section className={styles.aboutMordy}>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/images/chicago.jpg"
        id="bgvid"
        className={styles.aboutVideo}
      >
        <source src="/videos/chicago.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h2>Who is Mordy?</h2>
        <p>
          Mordy Siegal grew up going to Bears games at the historic Soldier
          Field stadium in Chicago. But while noshing on kosher food from home,
          the other fans got to enjoy the mouthwatering stadium fare. Something
          had to be done! So he launched Mordy’s Kosher, the hottest dog in
          town. And now, kids in stadiums all over get to enjoy Chicago style
          hot dogs, celebrate an age-old culture, and America’s favorite
          past-time all at once.
        </p>
        <Image
          src="/images/mordy.jpg"
          alt="Mordy"
          width="170"
          height="170"
        ></Image>
        <h3>Mordy Siegal</h3>
        <p className={styles.subtitle}>Founder & CEO</p>
      </div>
    </section>
  );
}
