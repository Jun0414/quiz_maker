import React, { useState } from 'react';
import { VideoSeekSlider } from 'react-video-seek-slider';


const VideoSeeker = ({curTime}) => {
    const [currentTime, setCurrentTime] = useState(10)

    return (
        <div>
            <VideoSeekSlider
                max={1152}
                currentTime={curTime}
                progress={400}
                onChange={(time) => {
                    setCurrentTime({time});
                }}
                offset={0}
                secondsPrefix="00:00:"
                minutesPrefix="00:"
            />
        </div>
    );
};

export default VideoSeeker;