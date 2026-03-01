// Shared site data (extracted from app.js)
const SITE_DATA = {
  DATA: {
    hilir: {
      title: 'KO AWIS Hilir',
      desc: 'Daftar modul pembelajaran kategori Hilir yang dirancang khusus untuk penguatan kompetensi pengolahan pasca panen dan rantai nilai kakao.',
      count: '7 Modul Tersedia',
      color: '#7B4520',
      icon: '🏭',
      modules: [
        { num: '01', title: 'Konsep Hilirisasi dan Value Chain Kakao', desc: 'Memahami dasar dan urgensi hilirisasi industri untuk peningkatan nilai tambah kakao dari biji hingga produk jadi.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&q=80' },
        { num: '02', title: 'Kakao Pasca Panen', desc: 'Teknik fermentasi, pengeringan, dan sangrai yang optimal untuk menghasilkan biji kakao berkualitas ekspor.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?w=400&q=80' },
        { num: '03', title: 'Perlakuan Pra-Olah', desc: 'Standarisasi kualitas biji kakao sebelum masuk proses pengolahan lanjutan untuk hasil yang konsisten.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1549492423-400259a2e574?w=400&q=80' },
        { num: '04', title: 'Mendapatkan Kakao Bubuk', desc: 'Proses ekstraksi lemak kakao dan penggilingan bungkil menjadi bubuk cokelat siap pakai.', time: '75 Menit', img: 'https://images.unsplash.com/photo-1587394887879-5cba4c68745f?w=400&q=80' },
        { num: '05', title: 'Mengolah Kakao Pasta', desc: 'Teknik penghalusan biji kakao roasted menjadi pasta cokelat premium dengan standar kualitas internasional.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80' },
        { num: '06', title: 'Desain Produk Kemasan', desc: 'Membangun brand produk hilir dan strategi desain kemasan yang menarik dan kompetitif.', time: '90 Menit', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' },
        { num: '07', title: 'Standardisasi dan Kualitas', desc: 'Aspek hukum, perizinan PIRT/BPOM, dan prosedur sertifikasi Halal untuk produk kakao olahan.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80' }
      ]
    },
    entrepreneur: {
      title: 'KO AWIS Entrepreneur',
      desc: 'Pembangunan model bisnis dan perencanaan usaha mandiri untuk wirausahawan kakao desa.',
      count: '7 Modul Tersedia',
      color: '#B8860B',
      icon: '💰',
      modules: []
    },
    digital: { title: 'KO AWIS Digital', desc: 'Literasi digital dan pemasaran online untuk jangkauan pemasaran yang lebih luas.', count: '6 Modul Tersedia', color: '#9A5F35', icon: '💻', modules: [] },
    sirkular: { title: 'KO AWIS Sirkular', desc: 'Pengelolaan limbah dan ekonomi sirkular yang ramah lingkungan untuk keberlanjutan ekosistem desa.', count: '6 Modul Tersedia', color: '#C4885A', icon: '♻️', modules: [] }
  },
  ARTICLES: [
    { cat: 'pertanian', catLabel: 'PERTANIAN', date: '24 Mei 2024', readTime: '5 min baca', title: 'Teknik Fermentasi Kakao Unggulan untuk Kualitas Ekspor', excerpt: 'Pelajari langkah-langkah fermentasi yang tepat untuk menghasilkan biji kakao dengan aroma dan profil rasa terbaik.', author: 'Agus Hidayat', img: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?w=400&q=80' },
    { cat: 'program', catLabel: 'PROGRAM DESA', date: '22 Mei 2024', readTime: '8 min baca', title: 'Program Digitalisasi Desa: Akses Pasar Global untuk Petani', excerpt: 'Inisiatif terbaru KO AWIS dalam memperkenalkan platform digital untuk memotong rantai pasok dan meningkatkan pendapatan petani.', author: 'Siti Maryam', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80' },
    { cat: 'komunitas', catLabel: 'KOMUNITAS', date: '20 Mei 2024', readTime: '4 min baca', title: 'Penyaluran 50.000 Bibit Kakao Unggul Gratis ke Petani', excerpt: 'KO AWIS kembali mendistribusikan bibit berkualitas untuk mendukung peremajaan kebun kakao rakyat di wilayah Sulawesi.', author: 'Budi Pratama', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80' },
    { cat: 'pasar', catLabel: 'PASAR KAKAO', date: '18 Mei 2024', readTime: '6 min baca', title: 'Update Harga Kakao Dunia: Peluang di Tengah Kelangkaan Stok', excerpt: 'Analisis pergerakan harga komoditas kakao di bursa global dan dampaknya terhadap harga beli di tingkat petani lokal.', author: 'Rina Kusuma', img: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&q=80' },
    { cat: 'komunitas', catLabel: 'KOMUNITAS', date: '15 Mei 2024', readTime: '10 min baca', title: 'Ekspedisi Jelajah Kakao: Menemukan Potensi Tersembunyi di Timur', excerpt: 'Tim ahli KO AWIS melakukan perjalanan ke pelosok Papua untuk mengidentifikasi varietas kakao lokal yang tahan hama.', author: 'Andi Maulana', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80' },
    { cat: 'pertanian', catLabel: 'PERTANIAN', date: '12 Mei 2024', readTime: '7 min baca', title: 'Sekolah Lapang: Edukasi Manajemen Hama Terpadu (PHT)', excerpt: 'Membekali petani dengan pengendalian biologis untuk mengatasi penggerek buah kakao tanpa menggunakan bahan kimia berbahaya.', author: 'Dedi Nugroho', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80' }
  ]
};

// Export for older browsers: attach to window
window.SITE_DATA = SITE_DATA;
