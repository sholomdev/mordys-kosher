import styles from '@/styles/Footer.module.css';
import NavbarLinks from './NavbarLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <NavbarLinks></NavbarLinks>
      <div className={styles.copyright}>
        <span>
          &copy; Copyright {currentYear}, Mordy&apos;s Kosher. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
