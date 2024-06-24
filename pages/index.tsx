import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
import MuxVideoPlayer from "@/components/MuxVideoPlayer";
import GeneratePlayback from "@/components/GeneratePlayback";
import UserList from "@/components/UserList";
import useUsers from "@/hooks/useUsers";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();
  const { users } = useUsers();
  console.log(users);

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='pb-40'>
        <UserList users={users} />
        <MovieList
          title='Example of Streams (though, are videos in this case)'
          data={movies}
        />
        <MovieList title='My List' data={favorites} />
        {/* <MuxVideoPlayer
          playbackId='sEtqxHgJPMJu5NJa46JFXpR1a9JmsjOulNnaU19bbmc'
          metadata={{
            video_id: "video-id-54321",
            video_title: "Test video title",
            viewer_user_id: "user-id-007",
          }}
        /> */}

        {/*<GeneratePlayback />*/}
      </div>
    </>
  );
};

export default Home;
