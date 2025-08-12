import { createClient } from '@supabase/supabase-js'

// ضع رابط مشروع Supabase ومفتاح API الخاص بك
const supabaseUrl = 'https://xxxx.supabase.co'   // استبدل xxxx برابط مشروعك
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY'      // ضع المفتاح العام من Supabase
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
