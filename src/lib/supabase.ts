import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      registrations: {
        Row: {
          id: number
          created_at: string
          name: string
          email: string
          phone: string
          course: string
        }
        Insert: {
          id?: number
          created_at?: string
          name: string
          email: string
          phone: string
          course: string
        }
        Update: {
          id?: number
          created_at?: string
          name?: string
          email?: string
          phone?: string
          course?: string
        }
      }
    }
  }
}