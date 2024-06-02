import { slide as Menu } from 'react-burger-menu';
import NavbarLinks from './NavbarLinks';
import styles from '@/styles/MobileNavbar.module.css';

export default function MobileNavbar() {
  return (
    <div className={styles.mobileNavbar}>
      <Menu>
        <NavbarLinks mobile />
      </Menu>
    </div>
  );
}
