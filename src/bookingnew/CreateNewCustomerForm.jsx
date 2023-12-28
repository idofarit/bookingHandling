import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";

import FormRow from "../ui/FormRow";

import { useForm } from "react-hook-form";
import { addNewCsutomerDetails } from "../services/apiBookings";

function CreateNewCustomerForm({ onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: addNewCsutomerDetails,
    onSuccess: () => {
      toast.success("New Customer Details Created");
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      reset();
    },
    onError: (error) => toast.error(error.message),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      style={{ overflowY: "auto", height: "60vh" }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="ID" error={errors?.id?.message}>
        <Input
          type="number"
          id="id"
          disabled={isCreating}
          {...register("id", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Created At" error={errors?.created_at?.message}>
        <Input
          type="date"
          id="created_at"
          disabled={isCreating}
          {...register("created_at", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Full Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isCreating}
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isCreating}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="National ID" error={errors?.nationalID?.message}>
        <Input
          type="number"
          id="nationalID"
          disabled={isCreating}
          {...register("nationalID", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          type="text"
          id="nationality"
          disabled={isCreating}
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add New Customer</Button>
      </FormRow>
    </Form>
  );
}

export default CreateNewCustomerForm;
