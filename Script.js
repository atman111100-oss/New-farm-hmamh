import { createClient } from '@supabase/supabase-js'

// ضع رابط مشروع Supabase ومفتاح API الخاص بك
const supabaseUrl = 'https://yktmsrahgvepxjygavwe.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrdG1zcmFoZ3ZlcHhqeWdhdndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYxMzUsImV4cCI6MjA3MDQwMjEzNX0.zsaJYThHpRnb8rzXhzv4GkncoLuGSlhZ6A3VEB
const supabase = createClient(supabaseUrl, supabaseKey)

async function getProducts() {
  const { data, error } = await supabase
    .from('منتجات') // اسم الجدول
    .select('*')    // اختر كل الأعمدة

  if (error) {
    console.error('حدث خطأ:', error)
  } else {
    console.log('المنتجات:', data)
  }
}

getProducts()
