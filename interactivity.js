// Add scroll event listener
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Change navbar style when scrolling
    if (window.scrollY > 50) {
      navbar.classList.add('scroll-active');
    } else {
      navbar.classList.remove('scroll-active');
    }
  });
  