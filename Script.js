import { createClient } from '@supabase/supabase-js'

// رابط مشروعك من Supabase
const SUPABASE_URL = 'https://yktmsrahgvepxjygavwe.supabase.co'

// المفتاح العام (anon public key) من صفحة API
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrdG1zcmFoZ3ZlcHhqeWdhdndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYxMzUsImV4cCI6MjA3MDQwMjEzNX0.zsaJYThHpRnb8rzXhzv4GkncoLuGSlhZ6A3VEBFOOWQ'

// إنشاء الاتصال بـ Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function fetchData() {
    let { data, error } = await supabase
        .from('products') // اسم الجدول
        .select('*')      // اجلب كل الأعمدة

    if (error) {
        console.error('حدث خطأ:', error)
    } else {
        console.log('البيانات:', data)
        // مثال لعرض البيانات في الموقع
        document.getElementById('data').innerHTML = JSON.stringify(data, null, 2)
    }
}

fetchData()
