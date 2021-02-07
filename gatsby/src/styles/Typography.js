import { createGlobalStyle } from 'styled-components';

import bernier from '../assets/fonts/bernier.woff';
import blacklite from '../assets/fonts/blacklite.woff';

const Typography = createGlobalStyle`

  @font-face {
    font-family: Bernier;
    src: url(${bernier});
  }

  @font-face {
    font-family: Blacklite;
    src: url(${blacklite});
  }

  html {
    font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: white;
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }


  .center {
    text-align: center;
  }


`;

export default Typography;
