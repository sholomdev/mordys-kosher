import Image from 'next/image';
import styles from '@/styles/About.module.css';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import mordyImage from '../public/images/mordy-about.jpg';
import aaronImage from '../public/images/aaron-about.jpg';
import teamImage from '../public/images/team-about.jpg';
import headerBg from '../public/images/headerBGs/about-bg.jpg';
export default function AboutPage() {
  return (
    <Layout title="Our Story">
      <Header title="Our Story" bg={headerBg}></Header>
      <div className={styles.about}>
        <div className={styles.mordyImage}>
          <Image
            src={mordyImage}
            fill
            style={{ objectFit: 'cover' }}
            alt="Mordy"
            objectPosition="center top"
          />
        </div>
        <div>
          <h2> Mordy Siegal</h2> <h3>Founder & CEO</h3>
          <p>
            Mordy Siegal is a food enthusiast, community builder, and
            entrepreneur. Growing up in Chicago, he noticed that downtown was
            notoriously bare of kosher food options. That’s why he launched a
            kosher food cart at McCormick Place in 2010 and has since
            established dozens of carts all over the country.
          </p>
          <p>
            But Mordy’s food carts provide so much more than convenience. They
            provide access to a culinary experience shaped by millennia of
            history and tradition. It’s also about community. At Mordy’s Kosher,
            a Jew who keeps kosher could enjoy a meal with a Muslim observing
            halal.
          </p>
          <p>
            Mordy is also passionate about integrating the local flavor of a
            venue he’s in with the menu de jour. Whether a soft pretzel in
            Philly or matzah ball soup in the old “Vest Side” of Chicago, the
            flavor is simultaneously unique, authentic, and familiar.
          </p>
        </div>
        <div className={styles.chefImage}>
          <Image
            src={aaronImage}
            fill
            style={{ objectFit: 'cover' }}
            alt="Chef Aaron"
          />
        </div>

        <div>
          <h2>Aaron Gordon</h2>
          <h3>Executive Chef</h3>

          <p>
            Aaron began cooking professionally at sixteen. After all, his
            schoolmates deserved higher-quality nutrition than they were
            getting. He went on to cook in Israel, where he single handedly
            catered a wedding for a family in need.
          </p>
          <p>
            In 2010, Aaron graduated from the Kosher Culinary Center in
            Brooklyn. Soon after, he was hired at the world-renowned 92nd Street
            Y cultural center in Manhattan. Making his way to the midwest, he
            helped establish a restaurant in Detroit. Two years later, he joined
            the acclaimed culinary team at the Shallots Bistro in Chicago.
          </p>
          <p>
            If you ask Mordy, Aaron’s do-it-yourself manner and passion for
            serving food are what make him a great chef. In his spare time,
            Aaron loves tinkering with old cars.
          </p>
        </div>
        <div className={styles.teamImage}>
          <Image
            src={teamImage}
            fill
            style={{ objectFit: 'cover' }}
            alt="The Team"
          />
        </div>

        <div>
          <h2> The Team </h2>
          <p>
            The Mordy’s Kosher team model the values that make this company so
            exceptional. They’re a diverse group who love nothing more than
            watching a satisfied customer bite into a pastrami sandwich on rye.
            Just stop by one of the carts to feel the energy they bring to work
            every day. You’ll be greeted with a smile, fed the tastiest meal
            with the freshest ingredients, and the largest variety of toppings.
          </p>
        </div>
      </div>
    </Layout>
  );
}
