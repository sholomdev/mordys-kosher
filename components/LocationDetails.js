import Image from 'next/image';
import styles from '@/styles/Location.module.css';
import { FaClock, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
export default function LocationDetails({ location }) {
  return (
    <div className={styles.location}>
      <div className={styles.details}>
        <h2>Find Us</h2>
        <ul>
          <li>
            <span className="highlight">
              <FaMapMarkerAlt />
            </span>
            <div>
              <span className="highlight">Cart Location:</span>{' '}
              {location.cartLocation}
            </div>
          </li>
          <li>
            <span className="highlight">
              <FaClock />
            </span>
            <div>
              <span className="highlight">Hours:&nbsp; </span> {location.hours}
            </div>
          </li>
          {location.phone && (
            <li>
              <span className="highlight">
                <ImPhone />
              </span>
              <div>
                <span className="highlight">Phone:&nbsp; </span>{' '}
                {location.phone}
              </div>
            </li>
          )}
          {location.manager && (
            <li>
              <div></div>
              <div>
                <span className="highlight">Manager:&nbsp; </span>{' '}
                {location.manager}
              </div>
            </li>
          )}
          {location.email && (
            <li>
              <span className="highlight">
                <FaEnvelope />
              </span>
              <div>
                <span className="highlight">Email:&nbsp; </span>{' '}
                {location.email}
              </div>
            </li>
          )}
          {location.contact && (
            <li>
              <div></div>
              <div>
                <span className="highlight">Contact:&nbsp; </span>{' '}
                {location.contact}
              </div>
            </li>
          )}

          <li>
            <div></div>
            <div>
              <span className="highlight">Operated By:&nbsp; </span>
              {location.operatedBy}
            </div>
          </li>
          <li>
            <div></div>
            {location.kashrut && (
              <div>
                <span className="highlight">Kosher Supervision:&nbsp; </span>
                {location.kashrut}
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={location.detailsImage}
          width={350}
          height={350}
          alt={location.name}
        ></Image>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={location.aboutImage}
          width={350}
          height={350}
          alt={location.name}
        ></Image>
      </div>

      <div className={styles.details}>
        <h2>About Us</h2>
        <p>{location.about}</p>
      </div>
    </div>
  );
}
