/**
 * include-footer.js
 * Injects centralized footer from /html/partials/footer.html into all pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // Fetch footer from partials
  fetch('../html/partials/footer.html?v=6')
  .then(response => response.text())
  .then(text => {
    document.body.insertAdjacentHTML('beforeend', text);

    const footerLogo = document.querySelector('.footer-logo');
    
    if (footerLogo) {
      let clickCount = 0;
      let clickTimer;
      
      footerLogo.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 1) {
          clickTimer = setTimeout(() => { 
            clickCount = 0; 
          }, 2000); 
        }
        
        if (clickCount === 4) {
          clearTimeout(clickTimer);
          window.location.href = '../admin/login.html';
        }
      });
    }
  })
  .catch(error => console.error('Error loading the footer:', error));
});
