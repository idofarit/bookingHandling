import React, { useEffect, useState } from "react";

import supabase from "../services/supabase";
import RecentBookingTable from "./RecentBookingTable";
import Heading from "./Heading";

const RecentBookings = () => {
  const [fetchError, setFetchError] = useState(null);
  const [lastBookings, setLastBookings] = useState(null);

  const tableHeaders = [
    "Customer Name",
    "CustomerID",
    "Booking Date",
    "Return Date",
    "Paid",
  ];
  useEffect(() => {
    const fetchLastBookings = async () => {
      const { data, error } = await supabase
        .from("bookings") //table name
        .select("*,customers(fullName)") //columns to select from the database

        .order("created_at", { ascending: false })
        .limit(5);
      if (error) {
        setFetchError("Could not fetch bookings");
        setLastBookings(null);
        console.log(error);
      }
      if (data) {
        setLastBookings(data);
        console.log(data);
        setFetchError(null);
      }
    };

    fetchLastBookings();
  }, []);

  return (
    <>
      <Heading as="h2">Last 5 Bookings</Heading>
      <hr style={{ width: "25%", margin: "auto" }} />
      <RecentBookingTable headers={tableHeaders} data={lastBookings} />
    </>
  );
};

export default RecentBookings;
