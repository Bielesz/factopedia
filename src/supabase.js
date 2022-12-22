import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://syxfmsbfgvksnnocnhzy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5eGZtc2JmZ3Zrc25ub2NuaHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE0NzAyNzUsImV4cCI6MTk4NzA0NjI3NX0.FtIK1vjhfxSd4gi2_6Zl6TzXc3WIBRhDwyVQyQ1bgxM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
