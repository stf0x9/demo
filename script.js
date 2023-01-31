const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.body;
const navItems = nav.querySelectorAll('.a');

burger.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger-active');
  nav.classList.toggle('show');
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger-active');
    nav.classList.remove('show');
  })
})

// const accordion = document.getElementsByClassName('prices-element');

// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//   });
// }