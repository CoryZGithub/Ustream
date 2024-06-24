import React from "react";
import { useRouter } from "next/router";
//import { UserInterface } from '@/types';

interface UserCardProps {
  user: {
    name: string;
    image: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: `/stream`,
      query: {
        username: user.name,
        user: JSON.stringify(user),
      },
    });
  };

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4'>
      <div
        onClick={handleClick}
        // className='bg-gray-800 p-2 rounded-md flex items-center'
        className='bg-cyan-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
      >
        <img
          className='h-40 rounded w-full object-cover mb-6'
          src={
            user.image ||
            "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU="
          }
          alt={user.name}
        />
        <div className='flex justify-between items-center mt-auto'>
          <h3 className='text-xl text-gray-900 font-semibold mb-4'>
            {user.name}
          </h3>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300'>
            View Stream
          </button>
          {/* <p className='text-white'>{user.name}</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
