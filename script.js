$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
  
  const header = document.querySelector('header');
const navMenu = document.querySelector('.nav_menu_ul');

window.addEventListener('scroll', function() {
  if (window.scrollY > header.offsetHeight) {
    navMenu.classList.add('header_scroll');
  } else {
    navMenu.classList.remove('header_scroll');
  }
});