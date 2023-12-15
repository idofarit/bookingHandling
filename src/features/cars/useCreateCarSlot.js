import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCarSlot } from "../../services/apiCars";
import toast from "react-hot-toast";

export const useCreateCarSlot = () => {
  const queryClient = useQueryClient();

  const { mutate: createCarSlot, isLoading: isCreating } = useMutation({
    mutationFn: createEditCarSlot,
    onSuccess: () => {
      toast.success("New carSlot successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isCreating, createCarSlot };
};
