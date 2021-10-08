const planChoiseContainer = document.querySelector('.plan-choise-container');
const scrollUpBtn = document.querySelector('.scroll-up-btn');
scrollUpBtn.style.display = 'none';
const scrollDown = document.querySelector('.arrow-down');
let scrollPoint = document.querySelector('.services-block').offsetTop;
const subscriptionEmail = document.querySelector('.subscription-email');
const subscriptionBtn = document.querySelector('.subscription-btn');
const burgerBtn = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.menu-box');

planChoiseContainer.addEventListener('click', e => {
  const target = e.target.closest('div');
  if (!target.classList.contains('active')) {
    planChoiseContainer.querySelector('.active').classList.remove('active');
    target.classList.add('active');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPoint) {
    scrollUpBtn.style.display = 'block';
  } else {
    scrollUpBtn.style.display = 'none';
  }
});

$(document).ready(function () {
  jQuery('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

});

scrollUpBtn.addEventListener('click', () => {
  document.querySelector('header').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

scrollDown.addEventListener('click', () => {
  document.querySelector('.services-block').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

subscriptionEmail.addEventListener('input', (e) => {
  const target = e.target;
  if (target.value === "") {
    subscriptionBtn.setAttribute("data-bs-toggle", "modal");
    subscriptionBtn.setAttribute("data-bs-target", "#errorModal")
  } else {
    subscriptionBtn.setAttribute("data-bs-toggle", "modal");
    subscriptionBtn.setAttribute("data-bs-target", "#exampleModal");
  }
});

window.addEventListener('click', e => {
  const target = e.target;
  if (burgerMenu.style.visibility == 'visible') {
    if (target !== burgerMenu) {
      burgerMenu.style.visibility = 'hidden';
      burgerMenu.style.opacity = 0;
    }
  }
  if (target.closest('.menu-btn')) {
    burgerMenu.style.visibility = 'visible';
    burgerMenu.style.opacity = 1;
  }
});
