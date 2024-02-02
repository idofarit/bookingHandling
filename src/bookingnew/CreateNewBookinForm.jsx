import Input from "../ui/Input";
import Form from "../ui/Form";
import Button from "../ui/Button";
import FormRow from "../ui/FormRow";

import { useForm } from "react-hook-form";
import { useEditBooking } from "./useEditNewBooking";
import { useCreateNewBooking } from "./useCreateNewBooking";

function CreateNewBookinForm({ bookingToEdit = {}, onCloseModal }) {
  const { editBooking, isEditing } = useEditBooking();
  const { newBooking, isNewBookingCreating } = useCreateNewBooking();
  const { id: editBookingId, ...editBookingValues } = bookingToEdit;

  const isEditSession = Boolean(editBookingId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editBookingValues : {},
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    if (isEditSession)
      editBooking(
        {
          newBookingData: { ...data },
          id: editBookingId,
        },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      newBooking(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form
      style={{ overflowY: "auto", height: "68vh", width: "100%" }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Number of Days" error={errors?.numberDays?.message}>
        <Input
          type="number"
          id="numberDays"
          disabled={isNewBookingCreating}
          {...register("numberDays", {
            required: "This field is required",
            min: {
              value: 1,
              message: "should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Car Price" error={errors?.carPrice?.message}>
        <Input
          type="number"
          id="carPrice"
          disabled={isNewBookingCreating}
          {...register("carPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be atleast 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Extra Price" error={errors?.extraPrice?.message}>
        <Input
          type="number"
          id="extraPrice"
          disabled={isNewBookingCreating}
          // defaultValue={0}
          {...register("extraPrice", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Total Price" error={errors?.totalPrice?.message}>
        <Input
          type="number"
          id="totalPrice"
          disabled={isNewBookingCreating}
          {...register("totalPrice", {
            required: "This field is required",
            validate: (value) =>
              value >= getValues().carPrice + extraPrice ||
              "Total price should be greater than seat price with added extra price",
          })}
        />
      </FormRow>

      <FormRow label="Payment Status" error={errors?.isPaid?.message}>
        <Input
          type="text"
          id="isPaid"
          disabled={isNewBookingCreating}
          {...register("isPaid", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Status" error={errors?.status?.message}>
        <Input
          type="text"
          id="status"
          disabled={isNewBookingCreating}
          {...register("status", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="ObserVations" error={errors?.observations?.message}>
        <Input
          type="text"
          id="observations"
          disabled={isNewBookingCreating}
          {...register("observations", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Start Date" error={errors?.startDate?.message}>
        <Input
          type="date"
          id="startDate"
          disabled={isNewBookingCreating}
          {...register("startDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End Date" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          disabled={isNewBookingCreating}
          {...register("endDate", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Number of Customers"
        error={errors?.numberCustomers?.message}
      >
        <Input
          type="number"
          id="numberCustomers"
          disabled={isNewBookingCreating}
          {...register("numberCustomers", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Add Insurance" error={errors?.hasInsurance?.message}>
        <Input
          type="text"
          id="hasInsurance"
          disabled={isNewBookingCreating}
          {...register("hasInsurance", {
            required: "This field is required",
          })}
        />
      </FormRow>
      {!isEditSession && (
        <>
          <FormRow label="Select Car" error={errors?.carId?.message}>
            <Input
              type="number"
              id="carId"
              disabled={isNewBookingCreating}
              {...register("carId", {
                required: "This field is required",
              })}
            />
          </FormRow>

          <FormRow
            label="Select Customer ID"
            error={errors?.customerId?.message}
          >
            <Input
              type="number"
              id="customerId"
              disabled={isNewBookingCreating}
              {...register("customerId", {
                required: "This field is required",
              })}
            />
          </FormRow>
        </>
      )}

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isNewBookingCreating}>
          {isEditSession ? "Edit Booking" : "Add Booking"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateNewBookinForm;
