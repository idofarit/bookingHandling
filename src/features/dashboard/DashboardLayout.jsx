import styled from "styled-components";
import { useRecentRents } from "./useRecentRents";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../rent-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  grid-template-rows: auto 34rem auto;
  grid-auto-rows: 32px;
  gap: 2.4rem;
`;

const DashboardLayout = () => {
  const { bookings, isLoading: isLoadingRecentBookings } = useRecentBookings();
  const {
    confirmedRents,
    isLoading: isLoadingRecentRents,
    numDays,
  } = useRecentRents();

  if (isLoadingRecentBookings || isLoadingRecentRents) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedRents={confirmedRents} />
      <TodayActivity />
      <DurationChart confirmedRents={confirmedRents} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
};

export default DashboardLayout;
