(async function(){
  try{
    const mobileResp = await fetch('../html/partials/mobile-menu.html?v=3');
    if (!mobileResp.ok) throw new Error(`Gagal load mobile-menu: ${mobileResp.status}`);
    const mobileHtml = await mobileResp.text();
    
    const navResp = await fetch('../html/partials/navbar.html?v=3');
    if (!navResp.ok) throw new Error(`Gagal load navbar: ${navResp.status}`);
    const navHtml = await navResp.text();

    // 1. Hapus navbar/mobile-menu hardcoded jika ada
    const existingNav = document.querySelector('.navbar');
    if (existingNav) existingNav.remove();
    const existingMobile = document.getElementById('mobileMenu');
    if (existingMobile) existingMobile.remove();

    // Insert
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

    // 2. Tandai Menu Aktif
    const path = location.pathname;
    const page = path.split('/').pop(); 

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    
    if (page.includes('modul') || page.includes('isimodul')) document.getElementById('nav-modul')?.classList.add('active');
    else if (page.includes('informasi')) document.getElementById('nav-informasi')?.classList.add('active');
    else if (page.includes('tentang')) document.getElementById('nav-tentang')?.classList.add('active');
    else if (page.includes('luaran')) document.getElementById('nav-luaran')?.classList.add('active');
    else document.getElementById('nav-home')?.classList.add('active'); 

  } catch(e) { console.error('include-navbar failed', e); }
})();