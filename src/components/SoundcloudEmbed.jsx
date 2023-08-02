import React from 'react';

function SoundcloudEmbed() {
  return (
    <iframe
      title="soundcloud"
      style={{ borderRadius: '12px', border: '1px solid #000' }}
      width="100%"
      height="450"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1511862688&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
  );
}

export default SoundcloudEmbed;
