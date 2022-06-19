import React from "react";
import videoSite from "../video.mp4";

function Particle() {
  return (
    
      <video className="object-cover h-full w-full absolute -z-10 cover" src={videoSite} autoPlay loop muted/>
    
  );
}

export default Particle;
