import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Vi from './VideoTemplate.module.css';
import VideoTitle from './VideoTitle';
import PlayTime from './PlayTime';

import CheckboxLabels from './CheckBox';
import VideoSeeker from './VideoSeeker';
import ChooseType from './ChooseType';

import video1 from './video';

// div를 float으로 설정하는 법 https://ojji.wayful.com/2013/12/HTML-set-Two-Parallel-DIVs-columns.html
// 투명도 조절 맨뒤 0     background-color: rgba( 255, 255, 255, 0 );

const playerStyle = {
  //clear: "both", //(float로 둥둥 떠다니는 것을 다른 div에서 영향을 주기 싫을때 그 div에 style로 넣어주면 된다.)
  marginTop: "15px",
  border: "5px solid black",
  background: "black",
  flex: 0.5,
}

// 'https://www.youtube.com/watch?v=LzmdGtzby2s'
const VideoTemplate = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [num, setNum] = useState(1)

  const onChangeFile = event => {
    const { files } = event.target
    var reader = new FileReader()

    if (files[0] != null)
      reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setSelectedFile(e.target.result)
    }
  }

  const onChangeCheck = (n) => {
    setNum(n)
  }

  return (
    <form className={Vi.form}>
      <div className={Vi.video1_template}>
        <VideoTitle />
        <input className={Vi.input_video} type="file" name="file" onChange={onChangeFile} />
        <ReactPlayer
          playing
          controls
          width='650px'
          height='370px'
          style={playerStyle}
          url={selectedFile} />
        <VideoSeeker currentTime="10" />
      </div>

      <div className={Vi.video2_template}>
        <PlayTime />
        <div className={Vi.currentTime}>
          시 <input id='hour' value='0' type='text' autocomplete="off" className={Vi.input_time} />  :
          분 <input id='minute' value='0' type='text' autocomplete="off" className={Vi.input_time} />  :
          초 <input id='second' value='0' type='text' autocomplete="off" className={Vi.input_time} />
        </div>
        <div className={Vi.check}>
          <CheckboxLabels onChange={onChangeCheck} />
        </div>
      </div>

      <div className={Vi.question}>
        <ChooseType type={num} />
        <input type='submit' className={Vi.submit} />
      </div>
    </form>
  );
};

export default VideoTemplate;