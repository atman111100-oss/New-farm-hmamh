import { createClient } from '@supabase/supabase-js'

// ضع رابط Supabase ومفتاح API الخاص بك
const supabaseUrl = 'https://yktmsrahgvepxjygavwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrdG1zcmFoZ3ZlcHhqeWdhdndlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MjYxMzUsImV4cCI6MjA3MDQwMjEzNX0.zsaJYThHpRnb8rzXhzv4GkncoLuGSlhZ6A3VEBFOOWQ'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getProducts() {
  const { data, error } = await supabase
    .from('منتجات') // اسم الجدول
    .select('*')    // اختر كل الأعمدة

  if (error) {
    console.error('حدث خطأ:', error)
  } else {
    const container = document.getElementById('products')
    container.innerHTML = '' // مسح المحتوى القديم

    data.forEach(product => {
      const item = document.createElement('div')
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>السعر: ${product.price} ريال</p>
      `
      container.appendChild(item)
    })
  }
}

getProducts()
