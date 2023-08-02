import React, { memo } from 'react';

const Video = ({ id, title, iframeProps, wrapperProps }) => {
  const videoSrcUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="video" {...wrapperProps}>
      <iframe
        {...iframeProps}
        src={videoSrcUrl}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; controls"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  );
};
export default memo(Video);
