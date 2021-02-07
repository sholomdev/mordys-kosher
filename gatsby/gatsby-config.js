import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
export default {
  siteMetadata: {
    title: "Mordy's Kosher",
    siteURL: `https://mordyskosher.com`,
    description: `The Hottest Dog In Town`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'q7yhgvqd',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
