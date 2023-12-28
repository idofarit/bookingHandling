import { FaBriefcase } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import { MdOutlineCarRental } from "react-icons/md";

const Stats = ({ bookings, confirmedRents }) => {
  const numBookings = bookings?.length;

  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const rents = confirmedRents?.length;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<FaBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<BsCurrencyRupee />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Rents"
        color="indigo"
        icon={<MdOutlineCarRental />}
        value={rents}
      />
    </>
  );
};

export default Stats;
