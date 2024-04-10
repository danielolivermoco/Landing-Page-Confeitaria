const menuList = document.querySelector('.menu-list');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links a li');

menuList.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  links.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('active');
    })
  })