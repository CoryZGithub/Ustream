// hooks/useUsers.ts
import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useUsers = () => {
  const { data, error } = useSWR("/api/users", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    users: data,
    error,
  };
};

export default useUsers;
