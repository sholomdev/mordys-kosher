import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import NavStyles from '../styles/NavStyles';

export default function Nav() {
  const { settings } = useStaticQuery(graphql`
    query {
      settings: sanitySiteSettings(_id: { eq: "mordys-kosher" }) {
        name
        logo {
          asset {
            fixed(width: 175) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  `);

  return (
    <NavStyles>
      <ul>
        <li className="dropdown">
          <button
            type="button"
            className="dropdown__title"
            ariaExpanded="false"
            ariaControls="locations-dropdown"
          >
            Locations
          </button>
          <ul className="dropdown__menu" id="locations-dropdown">
            {/* grab list of locations and display here */}
            <li>
              <Link to="/">Soldier Field</Link>
            </li>
            <li>
              <Link to="/">McCormick Place</Link>
            </li>
            <li>
              <Link to="/">Wells Fargo Center</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li className="logo">
          <Link to="/">
            <Img fixed={settings.logo.asset.fixed}></Img>
          </Link>
        </li>
        <li>
          <Link to="/News">News</Link>
        </li>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
