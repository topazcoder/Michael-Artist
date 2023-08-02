import React from 'react';
import styled from 'styled-components';
// import { StaticImage } from 'gatsby-plugin-image';
import {
  FaYoutube,
  FaFacebook,
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
} from 'react-icons/fa';

function SocialLinks({
  hidden = {
    soundcloud: false,
    spotify: false,
  },
}) {
  return (
    <Ul>
      {/* youtube */}
      <li>
        <a
          className="youtube"
          href="https://www.youtube.com/c/DanielMichael"
          target="_blank"
          rel="noreferrer">
          {/* <StaticImage src="../assets/icons/youtube.svg" layout="fixed" /> */}
          <FaYoutube />
        </a>
      </li>
      {/* facebook */}
      <li>
        <a
          href="https://www.facebook.com/DanielVocals"
          target="_blank"
          rel="noreferrer">
          {/* <StaticImage src="../assets/icons/facebook.svg" layout="fixed" /> */}
          <FaFacebook />
        </a>
      </li>

      {/* instagram */}
      <li>
        <a
          href="https://www.instagram.com/_dannymichaels/"
          target="_blank"
          rel="noreferrer">
          {/* <StaticImage src="../assets/icons/instagram.svg" layout="fixed" /> */}
          <FaInstagram />
        </a>
      </li>

      {/* spotify */}
      {!hidden.spotify && (
        <li>
          <a
            href="https://open.spotify.com/artist/0cfoqHIECHnCCGZo0pYAVk?si=AHARgj_7T5Cwk8ZbLY1o6g"
            target="_blank"
            rel="noreferrer">
            <FaSpotify />
          </a>
        </li>
      )}

      {/* soundcloud */}
      {!hidden.soundcloud && (
        <li>
          <a
            href="https://soundcloud.com/danielvocals"
            target="_blank"
            rel="noreferrer">
            <FaSoundcloud />
          </a>
        </li>
      )}
    </Ul>
  );
}

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;

  li {
    margin-left: 10px;
  }

  a {
    color: #fff;
    font-size: 48px;

    &.youtube {
      font-size: ;
    }
  }
`;
export default SocialLinks;
