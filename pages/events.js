import Events from '@/components/Events';
import Layout from '@/components/Layout';
import styles from '../styles/EventsPage.module.css';
import bg from '../public/images/headerBGs/events-bg.jpg';
import Header from '@/components/Header';

export default function EventsPage({ events }) {
  return (
    <Layout title="Upcoming Events">
      <Header bg={bg} title="Upcoming Events"></Header>
      <Events events={events}></Events>
    </Layout>
  );
}

export async function getStaticProps() {
  const events = [];

  return {
    props: { events },
    revalidate: 60 * 60 * 24,
  };
}
