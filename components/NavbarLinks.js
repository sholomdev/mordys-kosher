import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import { locations } from '../data.js';

export default function NavbarLinks({ mobile }) {
  const logoStyle = mobile
    ? {
        display: 'none',
      }
    : {
        flexShrink: 0,
      };
  return (
    <ul>
      <li>
        <Link href="/#locations">Chicago</Link>
        <ul className="dropdown">
          {locations
            .filter((location) => location.city == 'Chicago')
            .map((location) => (
              <li key={location.slug}>
                <Link href={`/location/${location.slug}`}>{location.name}</Link>
              </li>
            ))}
        </ul>
      </li>
      <li>
        <Link href="/#locations">Philly</Link>
        <ul className="dropdown">
          {locations
            .filter((location) => location.city == 'Philadelphia')
            .map((location) => (
              <li key={location.slug}>
                <Link href={`/location/${location.slug}`}>{location.name}</Link>
              </li>
            ))}
        </ul>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>

      <div style={logoStyle} id="logo">
        <Link href="/">
          <Image src={logo} alt="logo" width={128} height={128} />
        </Link>
      </div>
      <li>
        <Link href="/media">Media</Link>
      </li>
      <li>
        <Link href="/about">Our Story</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}
