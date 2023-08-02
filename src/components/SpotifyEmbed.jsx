import React from 'react';

function SpotifyEmbed() {
  return (
    <iframe
      title="spotify"
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/artist/0cfoqHIECHnCCGZo0pYAVk?utm_source=generator&theme=0"
      width="100%"
      height="450"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
  );
}

export default SpotifyEmbed;
