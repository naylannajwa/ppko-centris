// =============================================
// KO AWIS — App Logic & Navigation
// =============================================

// ---- DATA ----
const DATA = {
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
      { num: '07', title: 'Standardisasi dan Kualitas', desc: 'Aspek hukum, perizinan PIRT/BPOM, dan prosedur sertifikasi Halal untuk produk kakao olahan.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80' },
    ]
  },
  entrepreneur: {
    title: 'KO AWIS Entrepreneur',
    desc: 'Pembangunan model bisnis dan perencanaan usaha mandiri untuk wirausahawan kakao desa.',
    count: '7 Modul Tersedia',
    color: '#B8860B',
    icon: '💰',
    modules: [
      { num: '01', title: 'Kakao Entrepreneur', desc: 'Membangun mindset kewirausahaan kakao yang tangguh dan adaptif di era ekonomi digital.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=80' },
      { num: '02', title: 'Konsep Business Model', desc: 'Merancang 9 pilar bisnis menggunakan Business Model Canvas untuk usaha kakao yang berkelanjutan.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80' },
      { num: '03', title: 'Rencana Pasar Sederhana', desc: 'Analisis pasar lokal dan global untuk menentukan segmen dan positioning produk kakao.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80' },
      { num: '04', title: 'Rencana Produksi Sederhana', desc: 'Perencanaan kapasitas produksi, manajemen bahan baku, dan efisiensi proses manufaktur.', time: '75 Menit', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80' },
      { num: '05', title: 'Rencana Finansial Sederhana', desc: 'Dasar pembukuan dan arus kas untuk usaha mikro kakao, termasuk proyeksi untung-rugi.', time: '90 Menit', img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80' },
      { num: '06', title: 'Rencana Pemasaran Sederhana', desc: 'Strategi pemasaran kreatif dan teknik pitching untuk investor dan mitra strategis.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80' },
      { num: '07', title: 'Kakao Agility', desc: 'Kemampuan adaptasi bisnis dan inovasi produk berbasis riset pasar untuk keberlanjutan usaha.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80' },
    ]
  },
  digital: {
    title: 'KO AWIS Digital',
    desc: 'Literasi digital dan pemasaran online untuk jangkauan pemasaran yang lebih luas.',
    count: '6 Modul Tersedia',
    color: '#9A5F35',
    icon: '💻',
    modules: [
      { num: '01', title: 'Peluang dan Literasi Digital', desc: 'Memahami ekosistem digital dan peluang e-commerce untuk petani dan pengusaha kakao desa.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
      { num: '02', title: 'Content Creator', desc: 'Teknik mengambil foto dan membuat video produk yang menarik hanya menggunakan smartphone.', time: '90 Menit', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80' },
      { num: '03', title: 'Strategi Digital Marketing', desc: 'Pemasaran digital terarah melalui Instagram, TikTok, dan marketplace untuk produk kakao.', time: '75 Menit', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80' },
      { num: '04', title: 'Copywriting', desc: 'Menulis caption dan deskripsi produk yang persuasif untuk meningkatkan konversi penjualan.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80' },
      { num: '05', title: 'Manajemen Sosial Media', desc: 'Strategi pengelolaan akun media sosial secara konsisten untuk membangun brand awareness.', time: '75 Menit', img: 'https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=400&q=80' },
      { num: '06', title: 'Evaluasi Performa', desc: 'Membaca data penjualan dan analitik media sosial untuk pengambilan keputusan berbasis data.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
    ]
  },
  sirkular: {
    title: 'KO AWIS Sirkular',
    desc: 'Pengelolaan limbah dan ekonomi sirkular yang ramah lingkungan untuk keberlanjutan ekosistem desa.',
    count: '6 Modul Tersedia',
    color: '#C4885A',
    icon: '♻️',
    modules: [
      { num: '01', title: 'Ekonomi Sirkular', desc: 'Prinsip ekonomi sirkular dan penerapannya dalam industri kakao untuk nilai tambah berkelanjutan.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80' },
      { num: '02', title: 'Limbah dan Hasil Samping', desc: 'Identifikasi jenis limbah kakao dan peluang pengolahannya menjadi produk bernilai ekonomi.', time: '75 Menit', img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400&q=80' },
      { num: '03', title: 'Peluang Sirkular', desc: 'Memetakan peluang bisnis dari limbah kulit kakao, pulp, dan biji afkir untuk produk baru.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80' },
      { num: '04', title: 'Kakao di Kehidupan Kedua', desc: 'Inovasi produk dari limbah kakao: pupuk kompos, biogas, pakan ternak, dan produk kecantikan.', time: '90 Menit', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80' },
      { num: '05', title: 'Limbah Akhir', desc: 'Pengelolaan limbah akhir yang tidak dapat didaur ulang dengan metode yang ramah lingkungan.', time: '45 Menit', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { num: '06', title: 'Evaluasi Lingkungan', desc: 'Penilaian dampak lingkungan dan perhitungan carbon footprint dalam usaha pengolahan kakao.', time: '60 Menit', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80' },
    ]
  }
};

const ARTICLES = [
  { cat: 'pertanian', catLabel: 'PERTANIAN', date: '24 Mei 2024', readTime: '5 min baca', title: 'Teknik Fermentasi Kakao Unggulan untuk Kualitas Ekspor', excerpt: 'Pelajari langkah-langkah fermentasi yang tepat untuk menghasilkan biji kakao dengan aroma dan profil rasa terbaik.', author: 'Agus Hidayat', img: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?w=400&q=80' },
  { cat: 'program', catLabel: 'PROGRAM DESA', date: '22 Mei 2024', readTime: '8 min baca', title: 'Program Digitalisasi Desa: Akses Pasar Global untuk Petani', excerpt: 'Inisiatif terbaru KO AWIS dalam memperkenalkan platform digital untuk memotong rantai pasok dan meningkatkan pendapatan petani.', author: 'Siti Maryam', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80' },
  { cat: 'komunitas', catLabel: 'KOMUNITAS', date: '20 Mei 2024', readTime: '4 min baca', title: 'Penyaluran 50.000 Bibit Kakao Unggul Gratis ke Petani', excerpt: 'KO AWIS kembali mendistribusikan bibit berkualitas untuk mendukung peremajaan kebun kakao rakyat di wilayah Sulawesi.', author: 'Budi Pratama', img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80' },
  { cat: 'pasar', catLabel: 'PASAR KAKAO', date: '18 Mei 2024', readTime: '6 min baca', title: 'Update Harga Kakao Dunia: Peluang di Tengah Kelangkaan Stok', excerpt: 'Analisis pergerakan harga komoditas kakao di bursa global dan dampaknya terhadap harga beli di tingkat petani lokal.', author: 'Rina Kusuma', img: 'https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&q=80' },
  { cat: 'komunitas', catLabel: 'KOMUNITAS', date: '15 Mei 2024', readTime: '10 min baca', title: 'Ekspedisi Jelajah Kakao: Menemukan Potensi Tersembunyi di Timur', excerpt: 'Tim ahli KO AWIS melakukan perjalanan ke pelosok Papua untuk mengidentifikasi varietas kakao lokal yang tahan hama.', author: 'Andi Maulana', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80' },
  { cat: 'pertanian', catLabel: 'PERTANIAN', date: '12 Mei 2024', readTime: '7 min baca', title: 'Sekolah Lapang: Edukasi Manajemen Hama Terpadu (PHT)', excerpt: 'Membekali petani dengan pengendalian biologis untuk mengatasi penggerek buah kakao tanpa menggunakan bahan kimia berbahaya.', author: 'Dedi Nugroho', img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80' },
];

// ---- STATE ----
let currentTrack = 'hilir';
let currentModulIdx = 0;
let completedModuls = new Set();

// ---- PAGE NAVIGATION ----
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const pageMap = {
    home: 'page-home',
    modul: 'page-modul',
    modullist: 'page-modullist',
    isimodul: 'page-isimodul',
    informasi: 'page-informasi',
    tentang: 'page-tentang'
  };

  const navMap = {
    home: 'nav-home',
    modul: 'nav-modul',
    informasi: 'nav-informasi',
    tentang: 'nav-tentang'
  };

  const el = document.getElementById(pageMap[page]);
  if (el) {
    el.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerReveal();
  }

  const navEl = document.getElementById(navMap[page] || 'nav-' + page);
  if (navEl) navEl.classList.add('active');

  // Init articles on informasi page
  if (page === 'informasi') renderArticles('semua');
}

// ---- MODUL LIST ----
function showModulList(track) {
  currentTrack = track;
  const data = DATA[track];
  
  document.getElementById('modullist-breadcrumb').textContent = data.title;
  document.getElementById('modullist-title').textContent = data.title;
  document.getElementById('modullist-desc').textContent = data.desc;
  document.getElementById('modullist-count').innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> ${data.count}`;

  const grid = document.getElementById('modullist-grid');
  grid.innerHTML = data.modules.map((m, i) => `
    <div class="modul-card-item" onclick="openModul('${track}', ${i})">
      <div class="modul-card-img">
        <img src="${m.img}" alt="${m.title}" loading="lazy">
        <div class="modul-badge">MODUL ${m.num}</div>
      </div>
      <div class="modul-card-body">
        <div class="modul-card-title">${m.title}</div>
        <div class="modul-card-desc">${m.desc}</div>
        <div class="modul-meta">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${m.time}
          ${completedModuls.has(track + '-' + i) ? '<span style="color:var(--green-500);margin-left:0.5rem;">✅ Selesai</span>' : ''}
        </div>
        <button class="btn-buka">
          Buka Materi →
        </button>
      </div>
    </div>
  `).join('');

  showPage('modullist');
  document.getElementById('nav-modul').classList.add('active');
}

// ---- OPEN MODUL ----
function openModul(track, idx) {
  currentTrack = track;
  currentModulIdx = idx;
  renderIsiModul();
  showPage('isimodul');
  document.getElementById('nav-modul').classList.add('active');
}

function renderIsiModul() {
  const track = currentTrack;
  const data = DATA[track];
  const modul = data.modules[currentModulIdx];
  const total = data.modules.length;
  const progress = Math.round(((currentModulIdx + 1) / (total + 1)) * 100);

  // Sidebar
  document.getElementById('sidebar-track-name').textContent = data.title;
  document.getElementById('sidebar-progress-text').textContent = progress + '% Selesai';
  document.getElementById('sidebarProgressFill').style.width = progress + '%';

  const sidebarNav = document.getElementById('sidebarNav');
  sidebarNav.innerHTML = `
    <div class="sidebar-item ${currentModulIdx === -1 ? 'active' : ''}">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
      Pendahuluan
    </div>
    ${data.modules.map((m, i) => `
      <div class="sidebar-item ${i === currentModulIdx ? 'active' : ''} ${i > currentModulIdx && !completedModuls.has(track+'-'+i) && i !== currentModulIdx ? '' : ''}" onclick="openModul('${track}', ${i})">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">${completedModuls.has(track+'-'+i) ? '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>' : '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'}</svg>
        Modul ${m.num}: ${m.title}
      </div>
    `).join('')}
    <div class="sidebar-item locked">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
      Evaluasi Akhir
    </div>
  `;

  // Progress bar bottom
  document.getElementById('progressBarBottom').style.width = progress + '%';

  // Buttons
  document.getElementById('btnPrev').style.display = currentModulIdx <= 0 ? 'none' : 'flex';
  document.getElementById('btnNext').textContent = currentModulIdx >= total - 1 ? '✅ Selesaikan Track' : 'Selesai & Lanjut ke Modul Berikutnya →';

  // Main content
  const content = document.getElementById('modulContent');
  content.innerHTML = `
    <div class="modul-breadcrumb">
      <a onclick="showPage('modul')" style="cursor:pointer;">Modul KO AWIS</a>
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      <a onclick="showModulList('${track}')" style="cursor:pointer;">${data.title}</a>
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      <span>Modul ${modul.num}</span>
    </div>

    <h1>Modul ${modul.num}: ${modul.title}</h1>
    <p class="modul-desc">${modul.desc}</p>

    <div class="video-player" onclick="showToast('Video akan segera tersedia! Sedang diunggah...')">
      <img src="${modul.img}" alt="${modul.title}">
      <div class="video-play-btn">
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div class="video-progress"><div class="video-progress-fill"></div></div>
      <div class="video-time">05:24 / ${modul.time.replace(' Menit', ':00')}</div>
    </div>

    ${getModulContent(track, currentModulIdx)}
  `;

  content.style.animation = 'none';
  content.offsetHeight; // reflow
  content.style.animation = 'fadeUp 0.4s ease';
}

function getModulContent(track, idx) {
  // Generic rich content for each module
  const contents = {
    hilir: [
      `<h2 class="content-section-title"><span>1.</span> Pengantar Hilirisasi</h2>
      <p class="content-text">Hilirisasi kakao adalah proses pengolahan biji kakao (raw material) menjadi produk setengah jadi maupun produk jadi. Strategi ini sangat penting bagi petani dan pengusaha lokal untuk meningkatkan nilai ekonomi dari hasil panen. Tanpa hilirisasi, kita hanya mengekspor bahan mentah dengan harga komoditas yang fluktuatif.</p>
      <div class="info-cards-row">
        <div class="info-card"><div class="info-card-icon">📈</div><div class="info-card-title">Peningkatan Nilai</div><p class="info-card-desc">Transformasi dari biji kering menjadi bubuk atau lemak kakao dapat meningkatkan nilai jual hingga 3–4 kali lipat.</p></div>
        <div class="info-card"><div class="info-card-icon">👥</div><div class="info-card-title">Peluang Lapangan Kerja</div><p class="info-card-desc">Industri pengolahan menciptakan lebih banyak lapangan kerja di tingkat lokal dibanding sekadar bertani.</p></div>
      </div>
      <h2 class="content-section-title"><span>2.</span> Rantai Nilai (Value Chain)</h2>
      <p class="content-text">Rantai nilai kakao mencakup seluruh rangkaian aktivitas, mulai dari penyediaan bibit, penanaman, pemanenan, fermentasi, hingga distribusi produk akhir ke konsumen.</p>
      <div class="tahapan-box">
        <div class="tahapan-title">TAHAPAN UTAMA RANTAI NILAI</div>
        <div class="tahapan-list">
          <div class="tahapan-item"><div class="tahapan-num">1</div><div class="tahapan-content"><strong>Budidaya & Panen</strong><span>Pemilihan klon unggul dan teknik pemanenan buah matang sempurna.</span></div></div>
          <div class="tahapan-item"><div class="tahapan-num">2</div><div class="tahapan-content"><strong>Pasca Panen (Fermentasi)</strong><span>Kunci pembentukan aroma dan rasa cokelat yang khas.</span></div></div>
          <div class="tahapan-item"><div class="tahapan-num">3</div><div class="tahapan-content"><strong>Pengolahan Sekunder</strong><span>Pemanggangan, pemampatan, dan pengolahan menjadi pasta atau lemak.</span></div></div>
        </div>
      </div>
      <div class="key-takeaway">
        <div class="key-takeaway-header">🔑 POIN KUNCI</div>
        <p>Hilirisasi bukan sekadar membangun pabrik, melainkan membangun ekosistem nilai tambah yang berkelanjutan. Semakin jauh produk diolah ke tahap hilir, semakin besar dampak pengganda (multiplier effect) yang dihasilkan bagi perekonomian desa.</p>
      </div>`,
    ],
    entrepreneur: [],
    digital: [],
    sirkular: []
  };

  // Generic content for modules not specifically defined
  const genericContent = `
    <h2 class="content-section-title"><span>1.</span> Pendahuluan</h2>
    <p class="content-text">Modul ini dirancang untuk memberikan pemahaman mendalam dan praktis bagi peserta program KO AWIS. Materi disusun secara sistematis dari konsep dasar hingga penerapan langsung di lapangan, disesuaikan dengan konteks usaha kakao di Desa Merak.</p>
    <div class="info-cards-row">
      <div class="info-card"><div class="info-card-icon">🎯</div><div class="info-card-title">Tujuan Pembelajaran</div><p class="info-card-desc">Peserta mampu memahami dan menerapkan konsep utama dalam aktivitas usaha kakao sehari-hari.</p></div>
      <div class="info-card"><div class="info-card-icon">⏱️</div><div class="info-card-title">Durasi Belajar</div><p class="info-card-desc">Modul ini dirancang untuk diselesaikan dalam 1 pertemuan (60–90 menit) di Pojok Literasi Desa.</p></div>
    </div>
    <div class="quote-block">
      <p>"Ilmu tanpa amal adalah pohon tanpa buah. Mari jadikan setiap pelajaran sebagai langkah nyata untuk kemajuan desa kita."</p>
      <cite>— Prinsip KO AWIS</cite>
    </div>
    <h2 class="content-section-title"><span>2.</span> Materi Inti</h2>
    <p class="content-text">Pemahaman mendalam tentang topik ini akan membantu Anda mengambil keputusan yang lebih baik dalam menjalankan usaha dan berkontribusi pada ekosistem kakao yang lebih sehat dan produktif.</p>
    <div class="stage-cards">
      <div class="stage-card"><div class="stage-num">01</div><div class="stage-title">Konsep Dasar</div><p class="stage-desc">Memahami fondasi dan prinsip utama yang menjadi landasan modul ini.</p></div>
      <div class="stage-card"><div class="stage-num">02</div><div class="stage-title">Penerapan</div><p class="stage-desc">Cara mengimplementasikan konsep dalam kegiatan usaha kakao sehari-hari.</p></div>
      <div class="stage-card"><div class="stage-num">03</div><div class="stage-title">Evaluasi</div><p class="stage-desc">Mengukur keberhasilan penerapan dan mengidentifikasi area perbaikan.</p></div>
    </div>
    <div class="key-takeaway">
      <div class="key-takeaway-header">🔑 POIN PENTING</div>
      <p>Setiap peserta diharapkan dapat menerapkan minimal satu konsep dari modul ini dalam kegiatan usaha atau pertanian kakao mereka dalam 30 hari ke depan. Konsistensi adalah kunci keberhasilan.</p>
    </div>
  `;

  if (contents[track] && contents[track][idx]) {
    return contents[track][idx];
  }
  return genericContent;
}

function navigateModul(dir) {
  const total = DATA[currentTrack].modules.length;
  if (dir === 1) {
    completedModuls.add(currentTrack + '-' + currentModulIdx);
    if (currentModulIdx >= total - 1) {
      showToast('🎉 Selamat! Anda telah menyelesaikan track ' + DATA[currentTrack].title + '!');
      setTimeout(() => showModulList(currentTrack), 1500);
      return;
    }
    currentModulIdx++;
  } else {
    if (currentModulIdx <= 0) return;
    currentModulIdx--;
  }
  renderIsiModul();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---- ARTICLES ----
function renderArticles(filter) {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;
  const filtered = filter === 'semua' ? ARTICLES : ARTICLES.filter(a => a.cat === filter);
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-light);">
      <div style="font-size:3rem;margin-bottom:1rem;">📭</div>
      <p>Belum ada artikel untuk kategori ini.</p>
    </div>`;
    return;
  }

  grid.innerHTML = filtered.map(a => `
    <div class="article-card" onclick="showToast('Membuka artikel: ${a.title.substring(0,30)}...')">
      <div class="article-img">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <span class="article-cat-badge">${a.catLabel}</span>
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span>📅 ${a.date}</span>
          <span>⏱️ ${a.readTime}</span>
        </div>
        <div class="article-title">${a.title}</div>
        <p class="article-excerpt">${a.excerpt}</p>
        <div class="article-footer">
          <div class="article-author">
            <div class="author-avatar">${a.author.charAt(0)}</div>
            <span>${a.author}</span>
          </div>
          <span class="article-link">Selengkapnya ›</span>
        </div>
      </div>
    </div>
  `).join('');
}

function filterArticles(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderArticles(cat);
}

// ---- FORM SUBMIT ----
function handleFormSubmit() {
  const name = document.querySelector('.form-input[placeholder="Masukkan nama Anda"]').value;
  const email = document.querySelector('.form-input[placeholder="nama@email.com"]').value;
  const msg = document.querySelector('.form-textarea').value;

  if (!name || !email || !msg) {
    showToast('⚠️ Mohon isi semua field terlebih dahulu.');
    return;
  }
  showToast('✅ Pesan berhasil dikirim! Tim kami akan menghubungi Anda segera.');
  document.querySelectorAll('.form-input, .form-textarea').forEach(el => el.value = '');
}

// ---- TOAST ----
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ---- MOBILE MENU ----
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

// ---- NAVBAR SCROLL ----
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  triggerReveal();
});

// ---- REVEAL ON SCROLL ----
function triggerReveal() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  renderArticles('semua');
  setTimeout(triggerReveal, 100);
});