import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const YouTubeVideo = ({ videoId, title }) => {
  return (
    <VideoContainer>
      <iframe

        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        border="0"
        allowFullScreen
        title={title}
      ></iframe>
      <h4>{title}</h4>
    </VideoContainer>
  );
};

export default YouTubeVideo;
