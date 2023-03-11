
// Burger toggle

var burger = document.querySelector('.navbar__burger')
var burgerClose = document.querySelector('.hidden__close')
var hiddenMenu =  document.querySelector('.hidden')
var hiddenLinks = document.querySelectorAll('.hidden__link')

burger.addEventListener('click', () => {
    hiddenMenu.classList.toggle('active')
})

burgerClose.addEventListener('click', () => {
    hiddenMenu.classList.remove('active')
})

hiddenLinks.forEach(link => {
    link.addEventListener('click', () => {
        hiddenMenu.classList.remove('active')
    })
})


// Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 10,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });