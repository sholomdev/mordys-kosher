import Image from 'next/image';
import styles from '@/styles/Header.module.css';
export default function Header({ bg = "https://res.cloudinary.com/dsjy8ydj7/image/upload/mordys-kosher/headerBGs/mccormick-place-bg.jpg", title }) {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt=""
          src={bg}
          fill
          style={{ objectFit: 'cover' }}
          quality={90}
          priority={true}
        ></Image>
        <h1 className={styles.bgText}>{title}</h1>
      </div>
    </div>
  );
}
