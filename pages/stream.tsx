import { useRouter } from "next/router";
import MuxVideoPlayer from "@/components/MuxVideoPlayer";
import { useEffect, useState } from "react";
import NavbarStream from "@/components/NavbarStream";

//import prismadb from "@/libs/prismadb";
console.log("Before Stuff..");

const Stream = () => {
  const router = useRouter();
  const { username, user } = router.query as { username: string; user: string };
  console.log(router.query);

  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    if (username) {
      // Ensure username is available before making the API call
      fetch(`/api/playbackthings?name=${encodeURIComponent(username)}`)
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [username]);

  console.log("This is the", users);

  // Handle the case when users is null
  const playbackid = users ? users.playbackid : null;

  // Render the MuxVideoPlayer only if playbackid is available
  return (
    <div>
      <NavbarStream/>
      {playbackid ? (
        <MuxVideoPlayer
          playbackId={playbackid}
          metadata={{
            video_id: `${username}Stream`,
            video_title: `${username} Stream`,
            viewer_user_id: `${username}'s Stream`,
          }}
        />
      ) : (
        <p>Loading...</p> // Or any other fallback UI
      )}
    </div>
  );
};

export default Stream;
