import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addNewBooking } from "../services/apiBookings";

export const useEditBooking = () => {
  const queryClient = useQueryClient();

  const { mutate: editBooking, isLoading: isEditing } = useMutation({
    mutationFn: ({ newBookingData, id }) => addNewBooking(newBookingData, id),
    onSuccess: () => {
      toast.success("Booking successfully edited");
      queryClient.invalidateQueries({ queryKey: ["newBookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editBooking };
};
