import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Button from './Button';
import { onContactButtonClick } from '../utils/onContactButtonClick';

function Hero() {
  return (
    <HeroContainer>
      <StaticImage
        src="../assets/images/hero-mobile.jpg"
        alt="Daniel Michael performing on stage"
        className="hero-img mobile"
        placeholder="blurred"
        layout="fullWidth"
      />

      <StaticImage
        src="../assets/images/hero.svg"
        alt="Daniel Michael performing on stage"
        className="hero-img desktop"
        placeholder="tracedSVG"
        layout="fullWidth"
      />

      <HeroBackground />

      <HeroTextContainer>
        <div className="hero-text">
          <h2>Introducing</h2>
          <h1>Daniel Michael</h1>
          <h4>Singer | Songwriter | Producer | Performer</h4>
        </div>
        <div className="hero-btn">
          <Button text="Contact Me" onClick={onContactButtonClick} />
        </div>
      </HeroTextContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  height: 100vh;
  position: relative;

  .hero-img {
    height: 100%;
    width: 100%;

    &.mobile {
      display: none;
    }

    &.desktop {
      display: block;
    }
  }

  @media screen and (max-width: 900px) {
    .hero-img {
      &.mobile {
        display: block;
      }

      &.desktop {
        display: none;
      }
    }
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #000000 31.15%, rgba(0, 0, 0, 0) 47.19%);
`;

const HeroTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .hero-text {
    color: #fff;

    h1 {
      font-size: 40px;
      text-align: left;
      text-transform: uppercase;

      font-size: clamp(22px, 10vw, 128px);
      max-width: 300px;
      padding: 0;
      margin: 0;

      margin-top: 12px;
      margin-bottom: 12px;
    }

    h4 {
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 24px;
      font-size: clamp(14px, 2vw, 24px);
    }

    h2 {
      margin: 0;
      padding: 0;
      font-family: 'Exo', sans-serif;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 300;
      line-height: 24px;
      font-size: clamp(14px, 2vw, 24px);
    }
  }

  .hero-btn {
    margin-top: 20px;
  }
`;

export default Hero;
