import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

export default function MusicCard({ title, imageSrc }) {
  return (
    <ItemContainer>
      <Card>
        <GatsbyImage image={imageSrc} alt={title || 'Music Card'} />
        <WishListButton>
          <StaticImage src="../assets/icons/wishlist.svg" />
        </WishListButton>
      </Card>

      <SongTitle>{title}</SongTitle>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SongTitle = styled.h1`
  font-family: 'Exo' !important;
  font-size: 30px;
  font-weight: 600;
  color: #000;
`;

const WishListButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: -20px;
  cursor: pointer;
  z-index: 1;
`;
