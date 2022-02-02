import '../styles/globals.css';
import '../styles/react-burger-menu.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <NextNProgress height={4} color="#f16609" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
