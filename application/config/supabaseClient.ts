// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vzmsetaygfhxhiclwrnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bXNldGF5Z2ZoeGhpY2x3cm53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MjQ5MTksImV4cCI6MjA0MTIwMDkxOX0.aNigsRjUa914jkcLbP5PGjWbD4P80S0GC0Ez0ZG1U0M";
export const supabase = createClient(supabaseUrl, supabaseKey);
