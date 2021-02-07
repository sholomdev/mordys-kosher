import styled from 'styled-components';

const NavStyles = styled.nav.attrs({
  'aria-label': 'Main Navigation',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;

    li {
      /* padding: 1.8rem 1.5rem; */
      padding: 0;
      position: relative;
    }
  }

  & > ul {
    // top- evel ul
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-gap: 1rem;
    grid-template-columns: repeat(7, auto);
    & > li {
      // top level li

      a,
      .dropdown__title {
        text-decoration: none;
        font-size: 1.2rem;
        display: inline-block;
        font-weight: 400;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: white;
        &:hover {
          color: var(--orange);
        }
     
      }
      
      & > a,
      & > .dropdown__title {
        //top level links and button
        padding: 1.8rem 1.5rem;
      }
    }
  }

  .dropdown {
    // Pop-out hover menu
    position: relative;
    .dropdown__menu {
      background-color: #fff;
      position: absolute;
      transform: rotateX(-90deg);
      transform-origin: top center;
      opacity: 0.3;
      transition: 280ms all 120ms ease-out;

      visibility: hidden;
      a {
        text-transform: capitalize;
        letter-spacing: 1px;
        color: #222222;
        font-weight: 600;
        display: block;
        padding: 1.8rem;
        padding-right: 3rem;
        white-space: nowrap;
        text-align: left;
        &:hover {
          background-color: var(--offWhite);
          color: var(--orange);
        }
      }
    }
    &:hover,
    &:focus-within {
      .dropdown__menu {
        opacity: 1;
        transform: rotateX(0);
        visibility: visible;
      }
    }

    // caret down
     .dropdown__title {
    display: inline-flex;
      align-items: center;
     &:after {
        content: "";
        border: 0.35rem solid transparent;
        border-top-color: white;
        margin-left: 0.25em;
        transform: translateX(0.2em) translateY(0.1em);
      }
  }

  @media (max-width: 880px) {
    --columns: 3;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);

      & .logo {
        grid-column: 1 / -1;
        order: -1;
      }
    }
  }

  @media (max-width: 500px) {
    --columns: 2;
  }
`;
export default NavStyles;
