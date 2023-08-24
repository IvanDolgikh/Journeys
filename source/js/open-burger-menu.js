let button = document.querySelector('.main-header__button-open-menu');
let list = document.querySelector('.main-header__nav-list');
let closeIcon = document.querySelector('.main-header__button-close-menu-icon');
let openIcon = document.querySelector('.main-header__button-open-menu-icon');
let header = document.querySelector('.main-header__info-container');
let contact = document.querySelector('.main-header__contacts-container');
let logoFirst = document.querySelector('.main-header__logo-first');
let logoSecond = document.querySelector('.main-header__logo-second');
let listContainer = document.querySelector('.main-header__nav-list-container');
let body = document.querySelector('body');

const changeClasses = () => {
  list.classList.toggle('burger-menu__content');
  header.classList.toggle('main-header__info-container--active');
  contact.classList.toggle('main-header__contacts-container--active');
  openIcon.classList.toggle('main-header__button-open-menu-icon--active');
  closeIcon.classList.toggle('main-header__button-close-menu-icon--active');
  logoFirst.classList.toggle('main-header__logo-first--active');
  logoSecond.classList.toggle('main-header__logo-second--active');
  body.classList.toggle('burger-menu--active');
  listContainer.classList.toggle('burger-menu');
};

const onOpenMenu = () => {
  changeClasses();
};

const onClickLink = (evt) => {
  if (evt.target.closest('LI')) {
    changeClasses();
  }
};

const onClickOutside = (evt) => {
  if (evt.target.className === 'burger-menu--active') {
    changeClasses();
  }
};


button.addEventListener('click', onOpenMenu);

list.addEventListener('click', onClickLink);

body.addEventListener('click', onClickOutside);
