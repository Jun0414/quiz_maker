import React from 'react';
import ViT from './VideoTitle.module.css';

const VideoTitle = ({children}) => {
  const inputStyle = {
    width: "400px",
    height: "35px",
    paddingLeft: "10px",
    fontSize: "25px",
  }

  return (
    <main className={ViT.video_title}>
      제목 : <input id= 'title' type= 'text' style= {inputStyle}/>
    </main>
  );
};

export default VideoTitle;