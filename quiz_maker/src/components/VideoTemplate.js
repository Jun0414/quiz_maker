import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Vi from './VideoTemplate.module.css';
import VideoTitle from './VideoTitle';
import PlayTime from './PlayTime';

import CheckboxLabels from './CheckBox';
import VideoSeeker from './VideoSeeker';

// div를 float으로 설정하는 법 https://ojji.wayful.com/2013/12/HTML-set-Two-Parallel-DIVs-columns.html
// 투명도 조절 맨뒤 0     background-color: rgba( 255, 255, 255, 0 );

const playerStyle = {
  //clear: "both", //(float로 둥둥 떠다니는 것을 다른 div에서 영향을 주기 싫을때 그 div에 style로 넣어주면 된다.)
  marginTop: "15px",
  border: "5px solid black",
  background: "black",
  flex: 0.5,
}

const inputStyle = {
  width: "30px",
  height: "20px",
  paddingRight: "10px",
}


// 'https://www.youtube.com/watch?v=LzmdGtzby2s'
const VideoTemplate = () => {

  const [selectedFile, setSelectedFile] = useState(null)

  // 첨부하기 누른 후 취소누르면 에러뜸..
  const onChangeFile = event => {
    const { files } = event.target
    var reader = new FileReader()

    if (files[0] != null)
      reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setSelectedFile(e.target.result)
    }
  }

  return (
    <form className={Vi.form}>
      <div className={Vi.video1_template}>
        <VideoTitle />
        <input className={Vi.input} type="file" name="file" onChange={onChangeFile} />
        <ReactPlayer style={playerStyle} width={650} height={370}
          url={selectedFile} playing controls />
        <VideoSeeker currentTime="10" />
      </div>
      <div className={Vi.video2_template}>
        <PlayTime />
        <div className={Vi.currentTime}>
          시 <input id='hour' type='text' style={inputStyle} />  :
          분 <input id='minute' type='text' style={inputStyle} />  :
          초 <input id='second' type='text' style={inputStyle} />
        </div>

        <div className={Vi.check}>
          <CheckboxLabels />
        </div>
        <div className={Vi.blank}>
          <input />
          <button variant="primary" type="submit">
            Submit
        </button>
        </div>
      </div>
    </form>
  );
};

export default VideoTemplate;