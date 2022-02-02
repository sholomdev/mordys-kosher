import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import defaultBg from '../public/images/headerBGs/mccormick-place-bg.jpg';
export default function Header({ bg = defaultBg, title }) {
  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          alt=""
          src={bg}
          layout="fill"
          objectFit="cover"
          quality={90}
          priority={true}
        ></Image>
        <h1 className={styles.bgText}>{title}</h1>
      </div>
    </div>
  );
}
