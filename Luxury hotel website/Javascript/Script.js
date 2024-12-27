const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.navbar img');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('solid');
    logo.src = 'Logo/logo-dark.png'; 
    navLinks.forEach(link => link.style.color = '#000'); 
  } else {
    navbar.classList.remove('solid');
    logo.src = 'Logo/logo.png'; 
    navLinks.forEach(link => link.style.color = '#fff');
  }
});


const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
     scrollToTopButton.classList.add('show');
  } else {
     scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
