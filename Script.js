
import { createClient } from '@supabase/supabase-js'

// ضع هنا رابط مشروع Supabase الخاص بك
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co'
// ضع هنا المفتاح العام (anon key)
const SUPABASE_KEY = 'YOUR-ANON-KEY'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function fetchData() {
  let { data, error } = await supabase
    .from('اسم_الجدول')
    .select('*')

  if (error) {
    console.error('حدث خطأ:', error)
  } else {
    console.log('البيانات:', data)
  }
}

fetchData()
