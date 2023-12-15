import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCarSlot } from "../../services/apiCars";
import toast from "react-hot-toast";

export const useEditCarSlot = () => {
  const queryClient = useQueryClient();

  const { mutate: editCarSlot, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCarData, id }) => createEditCarSlot(newCarData, id),
    onSuccess: () => {
      toast.success("New carSlot successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["cars"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { editCarSlot, isEditing };
};
