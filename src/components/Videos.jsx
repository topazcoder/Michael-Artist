import React, { useMemo } from 'react';
import SectionTitle from './SectionTitle';
import useMediaQuery from './../hooks/useMediaQuery.hook';
import Carousel from './Carousel/Carousel';
import useSWR from 'swr';
import Video from './Video';

const playlistId = 'PLNtco_9UQb6Bjou8bGreCTnhrvnEjLvK_';
const urls = [
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.GATSBY_YOUTUBE_API_KEY}`, // playlist
  `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCALzl6bkWkTM9QZr3JeqAOw&maxResults=8&order=date&type=video&key=${process.env.GATSBY_YOUTUBE_API_KEY}`, // all
];

const fetchy = (...args) =>
  import(`node-fetch`).then(({ default: fetch }) => fetch(...args));

const fetcher = (...args) => fetchy(...args).then((res) => res.json());

function Videos() {
  const { data, isLoading } = useSWR(urls[0], fetcher);
  const isSmScreen = useMediaQuery('(max-width: 768px)');

  const vidPlayerOpts = useMemo(() => {
    const height = isSmScreen ? '440' : '660';
    return {
      height,
      width: '100%',
    };
  }, [isSmScreen]);

  return (
    <section className="page-section">
      <div className="inner-column">
        <SectionTitle
          title="Videos"
          subtitle={
            <span>
              Watch the latest videos and&nbsp;
              <a
                href="https://www.youtube.com/c/DanielMichael"
                target="_blank"
                rel="noreferrer"
                className="link">
                subscribe on youtube.
              </a>
            </span>
          }
        />
      </div>

      <Carousel
        visibleItemsCount={1}
        withIndicator
        infiniteLoop
        wrapperClassName={'inner-column'}>
        {isLoading || !data ? (
          <div>Loading...</div>
        ) : (
          data.items.map(({ snippet }) => (
            <Video
              title={snippet.title}
              key={snippet.resourceId.videoId}
              id={snippet.resourceId.videoId}
              iframeProps={vidPlayerOpts}
            />
          ))
        )}
      </Carousel>
    </section>
  );
}

export default Videos;
