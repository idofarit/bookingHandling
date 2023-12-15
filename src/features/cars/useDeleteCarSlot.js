import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCar as deleteCarSlotAPI } from "../../services/apiCars";

export const useDeleteCarSlot = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCarSlot } = useMutation({
    mutationFn: deleteCarSlotAPI,
    onSuccess: () => {
      toast.success("Car slot successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteCarSlot };
};
