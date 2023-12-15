import React from "react";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
  const { isUpdating, updateSetting } = useUpdateSetting();
  const {
    isLoading,
    settings: {
      minOperationLength,
      maxOperationLength,
      maxNumCustomer,
      insurancePrice,
    } = {},
  } = useSettings();

  const handleUpdate = (e, field) => {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Form>
      <FormRow label="Minimum days/booking">
        <Input
          type="number"
          id="min-days"
          defaultValue={minOperationLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minOperationLength")}
        />
      </FormRow>

      <FormRow label="Maximum days/booking">
        <Input
          type="number"
          id="max-days"
          defaultValue={maxOperationLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxOperationLength")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-customers"
          defaultValue={maxNumCustomer}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "maxNumCustomer")}
        />
      </FormRow>

      <FormRow label="Insurance price">
        <Input
          type="number"
          id="insurance-price"
          defaultValue={insurancePrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "insurancePrice")}
        />
      </FormRow>
    </Form>
  );
};

export default UpdateSettingsForm;
