import Page from '../templates/Page.js';

export default class View {

  constructor() {
    this.root = document.querySelector('#root');
    this.root.innerHTML = Page();
    this.burger = document.querySelector('.burger');
    this.menu = document.querySelector('.menu');
  }

  setMenuOpen(isMenuOpen) {
    if (isMenuOpen) {
      this.menu.classList.remove('hidden');
      this.menu.classList.add('active-menu');
      this.burger.classList.add('active');
      this.burger.querySelectorAll('.burger-line').forEach((element) => element.classList.add('active'));
    } else {
      this.menu.classList.add('hidden');
      this.menu.classList.remove('active-menu');
      this.burger.classList.remove('active');
      this.burger.querySelectorAll('.burger-line').forEach((element) => element.classList.remove('active'));
    }
  }

  bindChangeMenuOpen(handler) {
    this.root.addEventListener('click', (event) => {
      if (!event.target.classList.contains('menu') && !this.menu.classList.contains('hidden')) {
        handler();
      } else if (event.target.classList.contains('burger') || event.target.classList.contains('burger-line')) {
        handler();
      }
    });
  }

}
