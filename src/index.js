import './styles.css';
import menu from './menu.json';
import template from './templates/color-template.hbs';
const THEME_KEY = null;
const refs = {
  switchCheckbox: document.querySelector('#theme-switch-toggle'),
  myBodyThem: document.querySelector('body'),
  menuTemplate: document.querySelector('.menu.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

startPage();
const markup = template(menu);
refs.menuTemplate.insertAdjacentHTML('beforeend', markup); //шаблонізація

refs.switchCheckbox.addEventListener('change', funCheckbox);

function funCheckbox(e) {
  if (refs.switchCheckbox.checked) {
    replaceTheme(Theme.DARK);
  } else {
    replaceTheme(Theme.LIGHT);
  }
}

function replaceTheme(Theme) {
  refs.myBodyThem.classList.remove(localStorage.getItem(THEME_KEY));
  localStorage.setItem(THEME_KEY, Theme);
  refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
}
function startPage() {
  if (localStorage.getItem(THEME_KEY) === 'dark-theme') {
    refs.switchCheckbox.checked = true;
  }
  if (localStorage.getItem(THEME_KEY)) {
    refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
  }
}
