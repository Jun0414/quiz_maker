import React, { Component } from 'react';
import HomeBtn from './components/HomeBtn';
import VideoTemplate from './components/VideoTemplate';
import { ViewColumn } from '@material-ui/icons';

function App() {
  const appStyle = {
    background: "pink",
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