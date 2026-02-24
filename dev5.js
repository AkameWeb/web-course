// Видео 16

//import { tabsYear } from "./program/dev1";

//console.log(tabsYear);

// import * as constants ftom "./program/dev1"; ко всем импортируемым файлам можно обрашатся можно будет через точку 
// Пример constants.a

// Видео 29

const boxElement = document.querySelector('.box');


console.log(boxElement.offsetWidth);

console.log(boxElement.offsetHeight);

// Видео 31

const firstParagraf = document.getElementById('paragraf');
const button = document.getElementById('click');

// создание объекта
const createEl = document.createElement('p');

createEl.textContent = 'Text';
createEl.classList.add('prTest');

//клонирование 
const firstParagrafClone = firstParagraf.cloneNode();
boxElement.after(firstParagrafClone);



//boxElement.prepend(createEl);
//boxElement.after(createEl);


button.addEventListener('click', () => {
    firstParagraf.textContent = 'Click';
    
});

// Видео 35 
 document.addEventListener('keydown', (event) => {
    console.log('keydown event:', event);
 })

  document.addEventListener('keyup', (event) => {
    console.log('keyup event:', event);
 })