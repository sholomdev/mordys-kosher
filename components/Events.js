import Image from 'next/image';
import styles from '@/styles/Events.module.css';
import { useRouter } from 'next/router';
export default function Events({ events }) {
  const router = useRouter();
  return (
    <div className={styles.events}>
      {router.pathname == '/' && <h1>Upcoming Events</h1>}
      <ul>
        {events ? (
          events.map((evt) => {
            let date = new Date(evt.date);
            let month = date.toLocaleDateString('en-US', {
              month: 'short',
            });
            let day = date.toLocaleDateString('en-US', { day: '2-digit' });
            return (
              <li key={evt.id}>
                <div className={styles.imageContainer}>
                  <Image
                    src={evt.image.formats.thumbnail.url}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt=""
                  />
                </div>
                <div className={styles.date}>
                  <div className={styles.month}>{month}</div>
                  <div className={styles.day}>{day}</div>
                </div>
                <div className={styles.eventInfo}>
                  <h3>{evt.title}</h3>
                  <h4>{evt.time}</h4>
                  <h4>{evt.location?.name}</h4>
                </div>
              </li>
            );
          })
        ) : (
          <p>No upcoming events, check back later!</p>
        )}
      </ul>
    </div>
  );
}
