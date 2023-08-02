import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SocialLinks from './SocialLinks';
import Button from './Button';
import { onContactButtonClick } from '../utils/onContactButtonClick';

function Footer() {
  return (
    <StyledFooter>
      <div className="footer__inner">
        <StaticImage
          src="../assets/images/footer.svg"
          layout="fullWidth"
          placeholder="tracedSVG"
          className="footer-img"
        />

        <FooterBackground />

        <FooterContent className="inner-column">
          <div>
            <h1>Daniel Michael</h1>
          </div>

          <div className="center">
            <SocialLinks />
          </div>

          <div className="center">
            <Button text="Say Hello!" onClick={onContactButtonClick} />
          </div>
        </FooterContent>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  .footer__inner {
    height: 800px;
    position: relative;

    .footer-img {
      height: 100%;
    }
  }
`;

const FooterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: #fff;
    font-size: 72px;
    padding: 0;
    margin: 0;
    text-align: center;

    font-size: clamp(22px, 10vw, 72px);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .center {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #000000 63.12%,
    #000000 70.92%,
    rgba(0, 0, 0, 0) 73.52%,
    rgba(0, 0, 0, 0) 100.62%
  );
`;

export default Footer;
