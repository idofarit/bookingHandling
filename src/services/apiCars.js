import supabase from "./supabase";

export const getCars = async () => {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error("Car slot could not be created");
    throw new Error("Cars couldn't be loaded");
  }

  return data;
};

export const deleteCar = async (id) => {
  const { data, error } = await supabase.from("cars").delete().eq("id", id);

  if (error) {
    console.error("Car slot could not be deleted");
    throw new Error("Cars couldn't be deleted");
  }

  return data;
};
