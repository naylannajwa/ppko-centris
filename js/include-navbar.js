(async function(){
  try{
    const mobileResp = await fetch('../html/partials/mobile-menu.html?v=2');
    const mobileHtml = await mobileResp.text();
    const navResp = await fetch('../html/partials/navbar.html?v=2');
    const navHtml = await navResp.text();

    // 1. Hapus navbar/mobile-menu hardcoded jika ada (agar navbar satu aja)
    const existingNav = document.querySelector('.navbar');
    if (existingNav) existingNav.remove();
    const existingMobile = document.getElementById('mobileMenu');
    if (existingMobile) existingMobile.remove();

    // insert so order is: nav then mobile
    document.body.insertAdjacentHTML('afterbegin', mobileHtml);
    document.body.insertAdjacentHTML('afterbegin', navHtml);

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        if (typeof toggleMobile === 'function') {
          toggleMobile();
        } else if (mobileMenu) {
          mobileMenu.classList.toggle('open');
        }
      });
    }

    // 2. Inject Tombol Login Admin (Desktop & Mobile)
    // --- PERBAIKAN: Render tombol langsung (jangan tunggu cek login) ---
    const renderButton = (text, url) => {
        // Desktop
        let navActions = document.querySelector('.nav-actions');
        // Buat container jika hilang
        if (!navActions) {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navActions = document.createElement('div');
                navActions.className = 'nav-actions';
                const hamburger = document.querySelector('.hamburger');
                if (hamburger) navbar.insertBefore(navActions, hamburger);
                else navbar.appendChild(navActions);
            }
        }

        if (navActions) {
            // Cari tombol lama atau buat baru
            let btn = navActions.querySelector('#btn-login-dynamic');
            if (!btn) {
                btn = document.createElement('a');
                btn.id = 'btn-login-dynamic';
                btn.className = 'btn-masuk';
                btn.style.marginLeft = '0.5rem';
                navActions.appendChild(btn);
            }
            btn.textContent = text;
            btn.href = url;
        }

        // Mobile
        if (mobileMenu) {
            let link = mobileMenu.querySelector('#link-login-dynamic');
            if (!link) {
                link = document.createElement('a');
                link.id = 'link-login-dynamic';
                link.style.color = 'var(--brown-700)';
                link.style.fontWeight = '700';
                mobileMenu.appendChild(link);
            }
            link.textContent = text;
            link.href = url;
        }
    };

    // 1. Render Default "Login Admin" SEGERA
    renderButton('Login Admin', '/admin/login');

    // 2. Cek Supabase (Async) -> Update jadi "Dashboard" kalau login
    if (typeof supabase !== 'undefined' && supabase.auth) {
        supabase.auth.getSession().then(({ data }) => {
            if (data?.session) {
                renderButton('Dashboard', '/admin/index');
            }
        });
    }

    // mark active link based on pathname (works for static pages)
    const path = location.pathname;
    const page = path.split('/').pop(); // Ambil nama file (misal: modul.html)

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    if (page.includes('modul') || page.includes('isimodul')) document.getElementById('nav-modul')?.classList.add('active');
    else if (page.includes('informasi')) document.getElementById('nav-informasi')?.classList.add('active');
    else if (page.includes('tentang')) document.getElementById('nav-tentang')?.classList.add('active');
    else document.getElementById('nav-home')?.classList.add('active'); // Default home

  } catch(e) { console.error('include-navbar failed', e); }
})();
