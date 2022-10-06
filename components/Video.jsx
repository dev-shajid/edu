import React, { useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"
import '../node_modules/plyr-react/esm'

export default function Video({ id }) {
  const ref = useRef()
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: id,
        provider: "youtube",
      },
    ],
    autoplay: true,
    clickToPlay:true
  };

  return (
    <>
      <div className="video_container">
        <Plyr ref={ref} source={videoSrc} />
      </div>
    </>
  );
}