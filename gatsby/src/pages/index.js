import React from 'react';
import SEO from '../components/SEO';
import fallingVegies from '../assets/videos/vegetables-falling.mp4';
import styled from 'styled-components';
import ClearButton from '../components/ClearButton';

const VideoStyles = styled.video`
  object-fit: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: -1;
  filter: brightness(50%);
`;

const HeroStyles = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  text-align: center;
`;

const ButtonContainerStyles = styled.div`
  /* position: absolute;
  top: 70%;
  right: 50%;
  transform: translateX(50%); */
`;

const TaglineStyles = styled.h1`
  font-family: Bernier, Roboto, sans-serif;
  font-size: clamp(20px, 10vw, 80px);
  color: var(--orange);
  /* letter-spacing: 0; */
  font-display: block;
  padding-top: 20vh;
`;

export default function IndexPage() {
  return (
    <div>
      <SEO title="Mordy's Kosher" />
      <HeroStyles>
        <VideoStyles
          muted={true}
          autoPlay={true}
          playsinline={true}
          loop={true}
          preload="auto"
        >
          <source src={fallingVegies} type="video/mp4" />
        </VideoStyles>
        <TaglineStyles>The Hottest Dog In Town</TaglineStyles>
        <ButtonContainerStyles>
          <ClearButton text="View Locations" to="/locations"></ClearButton>
        </ButtonContainerStyles>
      </HeroStyles>
      <p>I'm below the video</p>
    </div>
  );
}
