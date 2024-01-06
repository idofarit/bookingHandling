import React from "react";
import styled from "styled-components";
import Stat from "../features/dashboard/Stat";

import { useRecentBookings } from "../features/dashboard/useRecentBookings";
import { useRecentRents } from "../features/dashboard/useRecentRents";

import { FaBriefcase } from "react-icons/fa";
import { formatCurrency } from "../utils/helpers";
import { BsCurrencyRupee } from "react-icons/bs";
import DurationChart from "../features/dashboard/DurationChart";
import TodayActivity from "../features/rent-in-out/TodayActivity";
import { MdOutlineCarRental } from "react-icons/md";

import SalesChart from "../features/dashboard/SalesChart";
import RecentBookings from "./RecentBookings";

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(120px, auto);
  grid-auto-flow: dense;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
    display: grid;
  }

  .box {
    padding: 20px 5px;

    border-radius: 10px;
    border: 2px solid $soft-bg;
  }

  .box1 {
    grid-column: span 1;
    grid-row: span 3;
    @media (max-width: 850px) {
      grid-column: span 4;
    }
  }
  .box2 {
    grid-column: span 2;

    @media (max-width: 850px) {
      grid-column: span 2/3;
    }
  }
  .box3 {
    grid-column: span 2;

    @media (max-width: 850px) {
      grid-column: span 2/3;
    }
  }
  .box5 {
    grid-column: span 2;
    @media (max-width: 850px) {
      grid-column: span 2/3;
    }
  }

  .box4 {
    grid-column: span 1;
    grid-row: span 3;
    @media (max-width: 1050px) {
      grid-column: span 4;
    }
  }
  .box6 {
    grid-column: span 4;
    grid-row: span 2;
    @media (max-width: 550px) {
      display: none;
    }
  }
  .box7 {
    grid-column: span 4;
    grid-row: span 2;
  }
  .box8 {
    grid-column: span 2;
    grid-row: span 1;
  }
`;

const Home = () => {
  const { isLoading: isLoadingBooking, bookings } = useRecentBookings();
  const {
    isLoading: isStayLoading,
    numDays,
    confirmedRents,
  } = useRecentRents();

  const numBookings = bookings?.length;

  const totalSales = bookings?.reduce(
    (acc, current) => acc + current.totalPrice,
    0
  );

  const rented = confirmedRents?.length;
  return (
    <Main>
      <div className="box box1">
        <TodayActivity />
      </div>
      <div className="box box2">
        <Stat
          value={numBookings}
          title="bookings"
          color="blue"
          icon={<FaBriefcase />}
        />
      </div>
      <div className="box box3">
        <Stat
          value={formatCurrency(totalSales)}
          title="Sales"
          color="green"
          icon={<BsCurrencyRupee />}
        />
      </div>
      <div className="box box4">
        <DurationChart confirmedRents={confirmedRents} />
      </div>
      <div className="box box5">
        <Stat
          value={rented}
          title="Rented"
          color="yellow"
          icon={<MdOutlineCarRental />}
        />
      </div>

      <div className="box box6">
        <SalesChart bookings={bookings} numDays={numDays} />
      </div>
      <div className="box box7">
        <RecentBookings />
      </div>
    </Main>
  );
};

export default Home;
