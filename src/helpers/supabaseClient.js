import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const URL = 'https://yegoogizlbrbchnkfmwz.supabase.co'
const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZ29vZ2l6bGJyYmNobmtmbXd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2Njk3MzUsImV4cCI6MTk5OTI0NTczNX0.Fw9HOMG2ue15ZyuKzmHEcYStB4r4FnkQ5VGGG5Dr6hc'
export const supabase = createClient(URL, KEY)

// import.meta.env.VITE_KEY
