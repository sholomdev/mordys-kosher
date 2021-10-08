import { slide as Menu } from 'react-burger-menu';
import NavbarLinks from './NavbarLinks';
import styles from '@/styles/MobileNavbar.module.css';

export default function MobileNavbar({ locations }) {
  return (
    <div className={styles.mobileNavbar}>
      <Menu>
        <NavbarLinks mobile locations={locations} />
      </Menu>
    </div>
  );
}
