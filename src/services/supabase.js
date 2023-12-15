import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kjkoqlpycqdrbnzqfblx.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqa29xbHB5Y3FkcmJuenFmYmx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTg4MDMsImV4cCI6MjAxNzk3NDgwM30.wA6-L5Gcx4IV1dgXIy2Uu0y0O5PwH2w9P6M1RuYID9Y";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
