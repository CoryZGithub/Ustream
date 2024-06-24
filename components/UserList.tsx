import React from "react";

//import { UserInterface } from "@/types";
import UserCard from "./UserCard";

interface UserListProps {
  users: {
    name: string;
    image: string;
  }[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    users && (
      <div className='flex overflow-x-auto space-x-4 p-4 scrollbar-hide'>
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
    )
  );
};

export default UserList;
