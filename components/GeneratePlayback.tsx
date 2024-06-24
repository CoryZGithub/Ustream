import React, { useEffect, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';

interface MuxPlayerProps {
  metadata: {
    video_id: string,
    video_title: string,
    viewer_user_id: string,
  }
}

const MuxLivestreamPlayer: React.FC<MuxPlayerProps> = ({metadata}) => {
  const [playbackId, setPlaybackId] = useState<string>('');

  useEffect(() => {
    const createLiveStream = async () => {
      const res = await fetch('/api/createStream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Error creating live stream');
      }

      const data = await res.json();
      console.log(data)
      setPlaybackId(data.playback_ids[0].id);
    };

    createLiveStream();
  }, []);

  return (
    <>
      <div>
        setPlaybackId: {playbackId}
      </div>
    </>
  );
}

export default MuxLivestreamPlayer;
