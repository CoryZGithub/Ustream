import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import Mux from "@mux/mux-node";
import Navbar from "./Navbar";

interface MuxPlayerProps {
  playbackId: string;
  metadata: {
    video_id: string;
    video_title: string;
    viewer_user_id: string;
  };
}

const MuxLivestreamPlayer: React.FC<MuxPlayerProps> = ({
  playbackId,
  metadata,
}) => {
  return (
    // Put navbar here    <Navbar />

    <MuxPlayer
      streamType='ll-live'
      playbackId={playbackId}
      metadata={metadata}
      className='relative h-[56.25vw]'
    />
  );
};

export default MuxLivestreamPlayer;
