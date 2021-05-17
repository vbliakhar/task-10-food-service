import menu from './menu.json';
import template from './templates/color-template.hbs';
const THEME_KEY = 'myTheme';
const CHECK_BOX = 'myCheckbox';

const refs = {
  switchCheckbox: document.querySelector('#theme-switch-toggle'),
  myBodyThem: document.querySelector('body'),
  menuTemplate: document.querySelector('.menu.js-menu'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem(THEME_KEY) == 'dark-theme') {
  refs.switchCheckbox.checked = true;
}

const markup = template(menu);
refs.menuTemplate.insertAdjacentHTML('beforeend', markup); //шаблонізація
refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
refs.switchCheckbox.addEventListener('change', funCheckbox);

function funCheckbox(e) {
  if (refs.switchCheckbox.checked) {
    funCheckboxTrue();
  } else {
    funCheckboxFalse();
  }
}
function funCheckboxTrue() {
  refs.myBodyThem.classList.remove(localStorage.getItem(THEME_KEY));
  localStorage.setItem(THEME_KEY, Theme.DARK);
  refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
  refs.switchCheckbox.checked = true;
}
function funCheckboxFalse() {
  refs.myBodyThem.classList.remove(localStorage.getItem(THEME_KEY));
  localStorage.setItem(THEME_KEY, Theme.LIGHT);
  refs.myBodyThem.classList.add(localStorage.getItem(THEME_KEY));
}
// localStorage.setItem(THEME_KEY, checkSwitch);
// console.log(localStorage.getItem(THEME_KEY));
// const myThem = localStorage.getItem('changeThem');
// refs.myBodyThem.classList.add(myThem);

// // console.log('Test2');
// // const user = {
// //   name: 'Mango',
// //   age: 2,
// //   live: 'Lviv',
// // };

// // // console.log(JSON.stringify(user));
// // const saveUserData = `{"name":"Mango","age":2}`;
// // // console.log(JSON.parse(saveUserData));
// // // console.log(localStorage);
// // // localStorage.setItem('my-local', JSON.stringify(user));
// // // console.log(localStorage.getItem('my-local'));

// // localStorage.setItem('myNameLocal', JSON.stringify(user));
// // const myStringJSON = localStorage.getItem('myNameLocal');
// // const myObjectParse = JSON.parse(myStringJSON);
// // console.log(myObjectParse);
// //////////////////////////////////
// import myShablon from './templates/color-tamle.hbs';
// import throttle from 'lodash.throttle';
// import test from './test.json';
// const STORAGE_KEY = 'test';
// const TASK_KEY = 'homework';

// const formMack = myShablon(test);
// console.log(formMack);
// const formData = {};

// const refs = {
//   textarea: document.querySelector('.myForm textarea'),
//   form: document.querySelector('.myForm'),
// };
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', myDelegirovan);
// onAfterResetPage();

// function myDelegirovan(e) {
//   formData[e.target.name] = e.target.value;
//   const convertString = JSON.stringify(formData);
//   localStorage.setItem(TASK_KEY, convertString);
//   const receiveResult = localStorage.getItem(TASK_KEY);
//   const convertResult = JSON.parse(receiveResult);
//   console.log(convertResult);
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }

// function onTextareaInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onAfterResetPage(e) {
//   const myReset = localStorage.getItem(STORAGE_KEY);
//   if (myReset) {
//     console.log(myReset);
//     refs.textarea.value = myReset;
//   }
// }
/////////////////
// import menu from './menu.json';
// import template from './templates/color-template.hbs';

// const gallaryRef = document.querySelector('.myForm');

// const markup = template(menu);
// console.log(markup);
// gallaryRef.insertAdjacentHTML('beforebegin', markup);
