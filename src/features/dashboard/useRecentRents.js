import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getRentsAfterDate } from "../../services/apiBookings";

export function useRecentRents() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: rents } = useQuery({
    queryFn: () => getRentsAfterDate(queryDate),
    queryKey: ["rents", `last-${numDays}`],
  });

  const confirmedRents = rents?.filter(
    (stay) => stay.status === "rented" || stay.status === "returned"
  );

  return { isLoading, rents, confirmedRents, numDays };
}
