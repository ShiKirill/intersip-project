const planChoiseContainer = document.querySelector('.plan-choise-container');
const scrollUpBtn = document.querySelector('.scroll-up-btn');
scrollUpBtn.style.display = 'none';
const scrollDown = document.querySelector('.arrow-down');
let scrollPoint = document.querySelector('.services-block').offsetTop;
const subscriptionEmail = document.querySelector('.subscription-email');
const subscriptionBtn = document.querySelector('.subscription-btn');

const sliderWrapper = document.querySelector('.slider-block-wrapper');
const sliderMain = document.querySelector('.slider-block-items');
const slides = document.querySelectorAll('.slider-block-item');
const dots = document.querySelectorAll('.dot');
const paginationBlock = document.querySelector('.slider-block-pagination');
let currentSlide = 0;

const prevSlide = (elem, index, strClass) => {
  if (elem[index].classList.contains('dot')) {
    elem[index].classList.remove(strClass);
  } else if (elem[index].classList.contains('.slider-block-item')) {
    elem[index].classList.remove(strClass);
  }
};

const nextSlide = (elem, index, strClass) => {
  if (elem[index].classList.contains('dot')) {
    elem[index].classList.add(strClass);
  } else if (elem[index].classList.contains('.slider-block-item')) {
    elem[index].classList.add(strClass);
  }
};

paginationBlock.addEventListener('click', e => {
  const target = e.target;

  prevSlide(dots, currentSlide, 'active');
  dots.forEach((item, index) => {
    if (item === target) {
      currentSlide = index;
    }
  });
  const widthSlide = slides[0].clientWidth;
  sliderMain.style.transform = `translateX(-${currentSlide * (widthSlide+30)}px)`;
  nextSlide(dots, currentSlide, 'active');
});


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

subscriptionEmail.addEventListener('input', (e)=>{
  const target = e.target;
  if (target.value === ""){
    subscriptionBtn.setAttribute("data-bs-toggle", "modal");
    subscriptionBtn.setAttribute("data-bs-target", "#errorModal")
  } else {
    subscriptionBtn.setAttribute("data-bs-toggle", "modal");
    subscriptionBtn.setAttribute("data-bs-target", "#exampleModal");
  }
})