import '../styles/globals.css';
import '../styles/react-burger-menu.css';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

function MyApp({ Component, pageProps }) {
  return (
    <>   
      <Component {...pageProps} />
       <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}

export default MyApp;
