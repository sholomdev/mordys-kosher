import styles from '@/styles/Navbar.module.css';
import NavbarLinks from './NavbarLinks';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <nav>
        <NavbarLinks />
      </nav>
    </div>
  );
}
