import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fvbfytipsnzrevqtbcta.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2YmZ5dGlwc256cmV2cXRiY3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIyMDI5MzIsImV4cCI6MjA0Nzc3ODkzMn0.xiqJzxu5PJZXNg0DPxeeOltk6dUFmHjlnd6B9Rw0s0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
