import React from 'react';
import ViT from './VideoTitle.module.css';

const VideoTitle = ({children}) => {
  return (
    <main className={ViT.video_title}>
      마마무 - 딩가딩가
    </main>
  );
};

export default VideoTitle;