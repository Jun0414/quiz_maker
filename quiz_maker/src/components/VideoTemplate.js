import React, { useState }from 'react';
import ReactPlayer from 'react-player';
import Vi from './VideoTemplate.module.css';
import VideoTitle from './VideoTitle';
import PlayTime from './PlayTime';

import CheckboxLabels from './CheckBox';

// div를 float으로 설정하는 법 https://ojji.wayful.com/2013/12/HTML-set-Two-Parallel-DIVs-columns.html
// 투명도 조절 맨뒤 0     background-color: rgba( 255, 255, 255, 0 );

const playerStyle = {
  //clear: "both", //(float로 둥둥 떠다니는 것을 다른 div에서 영향을 주기 싫을때 그 div에 style로 넣어주면 된다.)
  marginTop: "15px",
  border: "5px solid black",
  background: "black",
  flex: 0.5,
}

const tiStyle = {
  fleDirection: "row",
}


// 'https://www.youtube.com/watch?v=LzmdGtzby2s'
const VideoTemplate = () => {
  
  const [selectedFile, setSelectedFile] = useState(null)
  
  // 첨부하기 누른 후 취소누르면 에러뜸..
  const onChangeFile = event => {
    const { files } = event.target
    var reader = new FileReader()

    reader.readAsDataURL(files[0]);
  
    reader.onload = (e) => {
        setSelectedFile(e.target.result)
    }
  }
  
  return (
    <div style={tiStyle}>
      <div className={Vi.video1_template}>
        <VideoTitle/>
        <input className={Vi.input} type="file" name="file" onChange={onChangeFile} />
        <ReactPlayer style={playerStyle} width={650} height={370} 
                      url={selectedFile} playing controls/>
      </div>
      <div className={Vi.video2_template}>
        <PlayTime/>

        <div className={Vi.check}>
          <CheckboxLabels/>
        </div>

        <div className={Vi.blank}>
          <input/>
        <button variant="primary" type="submit">
          Submit
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTemplate;