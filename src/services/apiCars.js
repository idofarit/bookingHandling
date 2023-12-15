import supabase, { supabaseUrl } from "./supabase";

export const getCars = async () => {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) {
    console.error("Car slot could not be loaded");
    throw new Error("Car slot couldn't be loaded");
  }

  return data;
};

export const createEditCarSlot = async (newCar, id) => {
  const hasImagePath = newCar.image?.startsWith?.(supabaseUrl);

  const imgName = `${Math.random()}-${newCar.image.name}`.replaceAll("/", "");

  const imgPath = hasImagePath
    ? newCar.image
    : `${supabaseUrl}/storage/v1/object/public/car-images/${imgName}`;

  // create/edit cars slot
  let query = supabase.from("cars");

  // create
  if (!id) query = query.insert([{ ...newCar, image: imgPath }]);

  // edit
  if (id) query = query.update({ ...newCar, image: imgPath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error("Car slot could not be created");
    throw new Error("Car slot couldn't be created");
  }

  // upload car image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("car-images")
    .upload(imgName, newCar.image);

  // delete carslot if error
  if (storageError) {
    await supabase.from("cars").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Car image not found");
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
