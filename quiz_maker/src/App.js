import React, { Component } from 'react';
import HomeBtn from './components/HomeBtn';
import VideoTemplate from './components/VideoTemplate';

// https://i.pinimg.com/originals/16/64/e8/1664e8bf44b7e8d52db4b24ca0bc401a.png
// https://images.wallpaperscraft.ru/image/gradient_razmytost_abstraktsiia_157512_1920x1080.jpg
function App() {
  const appStyle = {
    background: "url(https://i.pinimg.com/originals/16/64/e8/1664e8bf44b7e8d52db4b24ca0bc401a.png)",
    border: "3px solid black",
    paddingTop: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div style={appStyle}>
      <HomeBtn/>
      <VideoTemplate/>
    </div>
  );
}

export default App;