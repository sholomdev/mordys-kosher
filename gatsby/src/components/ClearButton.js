import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 1.3rem 3.5rem 1.1rem 3.5rem;
  border-radius: 10rem;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.8rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;
  z-index: 1;
  border: 1px solid white;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 10rem;
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--orange);
    filter: brightness(10%);
    transition: all 1s ease;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
      filter: brightness(100%);
    }
  }
`;
export default function ClearButton({ text, to }) {
  return <StyledButton to={to}>{text + ' »'}</StyledButton>;
}
