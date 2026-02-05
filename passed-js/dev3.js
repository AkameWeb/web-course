// Видео 11

const arr = ['Alex', 18];

const [names, age] = arr;
console.log('name: ', names, ' age: ', age);


// Перебор массива функцией 
arr.forEach((arr, index, aray) =>{
    console.log(arr);
});

arr.indexOf(18);


// Видео 12 

const user = {
    names: 'Alex',
    age: 18,
    city: 'Moskow'
}

const userObject = Object.values(user);
const userEntries = Object.entries(user);

userObject.forEach((element, index, arr) =>{
    console.log('Значение свойственное: ', element);
    console.log('Значение свойственное: ', index);
})

const data = new Map();

data.set(1,'123');
data.set(2,'342');

console.log(data.has(1));

data.forEach((values, key, map) =>{
    console.log(values);
})
data.size;
data.clear();

// Видео 13

class Student{
    #city = null;
    regions = 'Russian';
    constructor(name, age, numberPhone){
        this.name = name;
        this.age = age;
        this.numberPhone = numberPhone;
    }

    get city(){
        return this.#city
    }
    set city(value){
        
    }


    LogBase(){
        console.log(this.name, this.age);
    }
}

const baseInfoStudent = new Student('Alex', 25, '899309832486');

baseInfoStudent.LogBase();


class MedBook extends Student{
    constructor(name, age, numberPhone, INN, dataRod, medkart){
        super(this.name, this.age, this.numberPhone );
        this.INN = INN;
        this.dataRod = dataRod;
        this.medkart = medkart;
        
    }
}



// Видео 14 

const timeout = setTimeout(() => {
    alert('Задержка 2 секунды ')
}, 2000)

clearTimeout(timeout);

// setInterval() выполняет постоянно через определённое время

// clearInterval(); работает оналогично clearTimeout();
