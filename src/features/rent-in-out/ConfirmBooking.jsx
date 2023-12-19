import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useSettings } from "../settings/useSettings";
import { useRent } from "./useRent";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

const ConfirmBooking = () => {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addInsurance, setAddInsurance] = useState(false);
  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { rented, isRented } = useRent();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    customers,
    totalPrice,
    numberCustomers,
    hasInsurance,
    numberDays,
  } = booking;

  const optionalInsurancePrice =
    settings.insurancePrice * numberDays * numberCustomers;

  const handleCompleteRent = () => {
    if (!confirmPaid) return;

    if (addInsurance) {
      rented({
        bookingId,
        insurance: {
          hasInsurance: true,
          extraPrice: optionalInsurancePrice,
          totalPrice: totalPrice + optionalInsurancePrice,
        },
      });
    } else {
      rented({ bookingId, insurance: {} });
    }
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Complete Rent for booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasInsurance && (
        <Box>
          <Checkbox
            checked={addInsurance}
            onChange={() => {
              setAddInsurance((add) => !add);
              setConfirmPaid(false);
            }}
            id="insurance"
          >
            Want to add insurance for {formatCurrency(optionalInsurancePrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isRented}
          id="confirm"
        >
          I confirm that {customers.fullName} has paid the total amount of{" "}
          {!addInsurance
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalInsurancePrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalInsurancePrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button
          onClick={handleCompleteRent}
          disabled={!confirmPaid || isRented}
        >
          Complete Rent #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ConfirmBooking;
