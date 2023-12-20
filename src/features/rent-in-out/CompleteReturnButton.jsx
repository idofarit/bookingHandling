import Button from "../../ui/Button";
import { useReturn } from "./useReturn";

const CompleteReturnButton = ({ bookingId }) => {
  const { returned, isReturned } = useReturn();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => returned(bookingId)}
      disabled={isReturned}
    >
      Complete Return
    </Button>
  );
};

export default CompleteReturnButton;
