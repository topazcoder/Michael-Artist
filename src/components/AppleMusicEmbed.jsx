import React from 'react';
import styled from 'styled-components';

function AppleMusicEmbed() {
  return (
    <StyledIframe
      allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
      frameBorder="0"
      height="450"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src="https://embed.music.apple.com/us/album/a-place-in-my-mind-single/1648362173"
    />
  );
}

const StyledIframe = styled.iframe`
  width: 100%;
  max-width: 660px;
  overflow: hidden;
  background: transparent;
  border-radius: 12px;
  border: 1px solid #000;
`;
export default AppleMusicEmbed;
