import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export const useReturn = () => {
  const queryClient = useQueryClient();

  const { mutate: returned, isLoading: isReturned } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "returned",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully completed return`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { returned, isReturned };
};
