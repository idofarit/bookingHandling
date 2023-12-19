import { useState } from "react";
import { isFuture, isPast, isToday } from "date-fns";
import supabase from "../services/supabase";
import Button from "../ui/Button";
import { subtractDates } from "../utils/helpers";

import { bookings } from "./data-bookings";
import { cars } from "./data-cars";
import { customers } from "./data-customers";

async function deleteCustomers() {
  const { error } = await supabase.from("customers").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteCars() {
  const { error } = await supabase.from("cars").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function deleteBookings() {
  const { error } = await supabase.from("bookings").delete().gt("id", 0);
  if (error) console.log(error.message);
}

async function createCustomers() {
  const { error } = await supabase.from("customers").insert(customers);
  if (error) console.log(error.message);
}

async function createCars() {
  const { error } = await supabase.from("cars").insert(cars);
  if (error) console.log(error.message);
}

async function createBookings() {
  const { data: customersIds } = await supabase
    .from("customers")
    .select("id")
    .order("id");
  const allCustomerIds = customersIds.map((car) => car.id);
  const { data: carsIds } = await supabase
    .from("cars")
    .select("id")
    .order("id");
  const allCarIds = carsIds.map((car) => car.id);

  const finalBookings = bookings.map((booking) => {
    const car = cars.at(booking.carId - 1);
    const numberDays = subtractDates(booking.endDate, booking.startDate);
    const carPrice = numberDays * (car.regularPrice - car.discount);
    const extraPrice = booking.hasInsurance
      ? numberDays * 15 * booking.numberCustomers
      : 0;
    const totalPrice = carPrice + extraPrice;

    let status;
    if (
      isPast(new Date(booking.endDate)) &&
      !isToday(new Date(booking.endDate))
    )
      status = "returned";
    if (
      isFuture(new Date(booking.startDate)) ||
      isToday(new Date(booking.startDate))
    )
      status = "unconfirmed";
    if (
      (isFuture(new Date(booking.endDate)) ||
        isToday(new Date(booking.endDate))) &&
      isPast(new Date(booking.startDate)) &&
      !isToday(new Date(booking.startDate))
    )
      status = "rented";

    return {
      ...booking,
      numberDays,
      carPrice,
      extraPrice,
      totalPrice,
      customerId: allCustomerIds.at(booking.customerId - 1),
      carId: allCarIds.at(booking.carId - 1),
      status,
    };
  });

  console.log(finalBookings);

  const { error } = await supabase.from("bookings").insert(finalBookings);
  if (error) console.log(error.message);
}

function Uploader() {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadAll() {
    setIsLoading(true);
    // Bookings need to be deleted FIRST
    await deleteBookings();
    await deleteCustomers();
    await deleteCars();

    // Bookings need to be created LAST
    await createCustomers();
    await createCars();
    await createBookings();

    setIsLoading(false);
  }

  async function uploadBookings() {
    setIsLoading(true);
    await deleteBookings();
    await createBookings();
    setIsLoading(false);
  }

  return (
    <div
      style={{
        marginTop: "auto",
        backgroundColor: "#e0e7ff",
        padding: "8px",
        borderRadius: "5px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h3>SAMPLE DATA</h3>

      <Button onClick={uploadAll} disabled={isLoading}>
        Upload ALL
      </Button>

      <Button onClick={uploadBookings} disabled={isLoading}>
        Upload bookings ONLY
      </Button>
    </div>
  );
}

export default Uploader;
