import Image from 'next/image';
import styles from '@/styles/Menu.module.css';

export default function LocationMenu({ location }) {
  if (!location.menuItems) return null;

  return (
    <section className={styles.menuSection}>
      {/* <h2 className={styles.menuTitle}>Menu</h2> */}
      <div className={styles.menuGrid}>
        {location.menuItems.map((item, index) => (
          <div key={index} className={styles.menuCard}>
            {/* 1. Standard Next.js Image with Cloudinary URL */}
            <div className={styles.imageWrapper}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: 'cover' }}
                // Load the first 4 images immediately for speed
                priority={index < 4}
              />
            </div>

            <div className={styles.cardContent}>
              <div className={styles.textGroup}>
                <h3 className={styles.itemName}>{item.name}</h3>
                {item.note && <p className={styles.itemNote}>{item.note}</p>}
              </div>
              <span className={styles.itemPrice}>
                ${item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {location.drinks && (
        <div className={styles.minimalDrinks}>
          <h3 className={styles.drinksTitle}>Beverages</h3>
          <ul className={styles.drinksList}>
            {location.drinks.map((drink, index) => (
              <li key={index} className={styles.drinkItem}>
                <span className={styles.drinkName}>{drink.name}</span>
                {drink.note && <span className={styles.drinkNote}>— {drink.note}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}