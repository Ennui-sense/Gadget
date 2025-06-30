export const getAllCards = () => Array.from(document.querySelectorAll('.catalog-cart'))
      .filter(card => window.getComputedStyle(card).display !== 'none');
