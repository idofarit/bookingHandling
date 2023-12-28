import supabase from "./supabase";

export const getAuthUsers = async () => {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error(error);
    throw new Error("auth users not found");
  }

  return data;
};
