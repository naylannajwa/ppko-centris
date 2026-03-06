const SUPABASE_URL = 'https://cpwasxmabuixklvudzji.supabase.co'; 
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwd2FzeG1hYnVpeGtsdnVkemppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3OTI3MjEsImV4cCI6MjA4ODM2ODcyMX0.zOIKu6jnrnqdLrI45B7iK0vtNSV7engrDK2quHOyM-w'; // Ganti dengan Anon Key Anda

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);