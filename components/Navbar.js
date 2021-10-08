import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import NavbarLinks from './NavbarLinks';

export default function Navbar({ locations }) {
  return (
    <div className={styles.navbar}>
      <nav>
        <NavbarLinks locations={locations} />
      </nav>
    </div>
  );
}
