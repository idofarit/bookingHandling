import { useQuery } from "@tanstack/react-query";
import { getRentsTodayActivity } from "../../services/apiBookings";

export const useTodayActivity = () => {
  const { isLoading, data: activities } = useQuery({
    queryFn: getRentsTodayActivity,
    queryKey: ["today-activity"],
  });

  return { activities, isLoading };
};
