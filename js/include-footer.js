/**
 * include-footer.js
 * Injects centralized footer from /html/partials/footer.html into all pages
 */

document.addEventListener('DOMContentLoaded', () => {
  // Fetch footer from partials
  fetch('../html/partials/footer.html?v=2')
    .then(response => response.text())
    .then(html => {
      // Find all existing footers or create a footer container if none exist
      const existingFooters = document.querySelectorAll('footer');
      
      if (existingFooters.length > 0) {
        // Replace the first footer found with the centralized one
        existingFooters[0].outerHTML = html;
        
        // Remove any duplicate footers
        document.querySelectorAll('footer').forEach((footer, idx) => {
          if (idx > 0) footer.remove();
        });
      } else {
        // If no footer exists, inject it before the closing body tag
        const footerContainer = document.createElement('div');
        footerContainer.innerHTML = html;
        document.body.appendChild(footerContainer.firstElementChild);
      }
    })
    .catch(err => console.warn('Failed to load footer:', err));
});
