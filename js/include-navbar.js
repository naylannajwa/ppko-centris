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
    // Desktop
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
      const btnAdmin = document.createElement('a');
      btnAdmin.href = '../admin/login.php'; // Sesuaikan path login admin
      btnAdmin.className = 'btn-masuk'; // Gunakan style yang sama agar konsisten
      btnAdmin.textContent = 'Login Admin';
      btnAdmin.style.marginLeft = '0.5rem';
      navActions.appendChild(btnAdmin);
    }

    // Mobile
    if (mobileMenu) {
      const linkAdmin = document.createElement('a');
      linkAdmin.href = '../admin/login.php';
      linkAdmin.textContent = 'Login Admin';
      linkAdmin.style.color = 'var(--brown-700)';
      linkAdmin.style.fontWeight = '700';
      mobileMenu.appendChild(linkAdmin);
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
