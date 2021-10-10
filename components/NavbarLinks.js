import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
export default function NavbarLinks({ mobile, locations }) {
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
        <Link href="/#locations">
          <a>Locations</a>
        </Link>
        <ul className="dropdown">
          {locations &&
            locations.map((location) => (
              <li key={location.id}>
                <Link href={`/location/${location.slug}`}>
                  <a>{location.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </li>
      <li>
        <Link href="/events">
          <a>Events</a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </li>

      <div style={logoStyle} id="logo">
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" width={128} height={128} />
          </a>
        </Link>
      </div>
      <li>
        <Link href="/media">
          <a>Media</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Our Story</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  );
}
