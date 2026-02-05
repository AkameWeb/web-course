// Видео 8

const prise = 99.9990;
// toFixed
console.log("toFixed ", prise.toFixed(1));
console.log((54.78329793).toFixed());

//toPrecision
console.log("toPrecision ", prise.toPrecision(3));
console.log((54.78329793).toPrecision(3));

//toString
console.log("toString ", prise.toString());
console.log((54.78329793).toString(16));
//Math
console.log(Math);
//parseInt
console.log("parseInt ", parseInt(prise))

// видео 9 
//length
let names = 'Hello world';
console.log("Длина строки метод length ",names.length); 

//at
console.log("метод at ",names.at(-3));

//toLowerCase, toUpperCase
console.log("toLowerCase, toUpperCase");
console.log(names.toLowerCase());
console.log(names.toUpperCase());
// Обрезает пробелы в начале и конце 
//trimStart(), trimEnd() обрезает в начале только а второй только в конце 
console.log(names.trim());

console.log(names.indexOf('w'));

console.log(names.substring(0,5));
console.log(names.slice(-6));

// Замена слова в строке 
// replaceAll заменяет всё похожие указанные строки а не первую найденную
console.log(names.replace('Hello', 'Evil'));

// Получить строку в вкиде массива split
console.log(names.split(''));

console.log(names.includes('Hello'))

// Видео 10 

const arr= [1,2,3,4,5,6,7];

console.log(arr.join(', '));

arr.shift(); // удаляет в начале 
arr.pop(); //удаляет в конце

for(let i =0; i <= arr.length-1; i++){
    console.log(arr[i]);
}