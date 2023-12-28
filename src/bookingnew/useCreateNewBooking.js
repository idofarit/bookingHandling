import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewBooking } from "../services/apiBookings";

export const useCreateNewBooking = () => {
  const queryClient = useQueryClient();

  const { mutate: newBooking, isLoading: isNewBookingCreating } = useMutation({
    mutationFn: addNewBooking,
    onSuccess: () => {
      toast.success("New booking successfully created");
      queryClient.invalidateQueries({ queryKey: ["newBookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isNewBookingCreating, newBooking };
};
