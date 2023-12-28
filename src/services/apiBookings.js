import { getToday } from "../utils/helpers";
import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export const getBookings = async ({ filter, sortBy, page }) => {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at,startDate, endDate, numberDays, numberCustomers, status, totalPrice, cars(name),customers(fullName, email) ",
      { count: "exact" }
    );

  if (filter !== null)
    query = query[filter.method || "eq"](filter.field, filter.value);

  // sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error("Car slot could not be loaded");
  }
  return { data, count };
};

export const getBooking = async (id) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cars(*), customers(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
};

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export const getBookingsAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalPrice, extraPrice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
};

export const getRentsAfterDate = async (date) => {
  const { data, error } = await supabase
    .from("bookings")

    .select("*, customers(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
};

export const getRentsTodayActivity = async () => {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, customers(fullName, nationality)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.rented,endDate.eq.${getToday()})`
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
};

export const updateBooking = async (id, obj) => {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
};

export const deleteBooking = async (id) => {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
};

export const addNewBooking = async (newBooking, id) => {
  let query = supabase.from("bookings");

  if (!id) query = query.insert([{ ...newBooking }]);

  if (id) query = query.update({ ...newBooking }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("New Booking could not be created");
  }

  return data;
};

export const addNewCsutomerDetails = async (newCustomer, id) => {
  let query = supabase.from("customers");

  if (!id) query = query.insert([{ ...newCustomer }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("New Customer Details could not be created");
  }

  return data;
};
