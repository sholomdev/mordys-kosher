import '../styles/globals.css';
import '../styles/react-burger-menu.css';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>   
       <Script
        id="gtm"
        strategy="afterInteractive"
      >
        {`         
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KW5NWSW3');
        `
        }
      </Script>
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
