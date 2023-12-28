import { useQuery } from "@tanstack/react-query";
import { getAuthUsers } from "../../services/apiAuthUsers";

export const useAuthUsers = () => {
  const { isLoading, data: authUsers } = useQuery({
    queryKey: ["authUsers"],
    queryFn: getAuthUsers,
  });

  return { isLoading, authUsers };
};
