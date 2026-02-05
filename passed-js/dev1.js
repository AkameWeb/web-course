/// Видео 1
//export const tabsYear = {year}
const year = 2026; 

if(year == 2026){
    console.log("Ура!");
    console.log("Новое начало");
}
else if(year > 2080){
    console.log("Создатель давно мёртв уже...");

}else{
    console.log("Сейчас не 2026 год");}

let message = 10 ? "message = 10" : message=10;
console.log(message);

const a = 0;
const b = 100;

const result1 = a ?? b;
const result2 = a || b;

console.log("Результат ИЛИ " + result2 + " Результат операнда " + result1);
console.log("a = 0, b = 10");


/// Видео 2


//alert("Всплывающее окно")

//message = prompt("Введите текст", 'null');
console.log('Полученный текст ' + message);

switch (message){
    case null: {
    console.log('Значение пустое');
    break;  
    }
    case 10:{
    console.log('Значение численное');
    break;
    }
    default :{
    console.log('Указано иное значение');
    break;
    }
}
/// Видео 4


function regDev(number1){
    let numberDev = 10+number1;
    return numberDev;
}
/// Видео 3

let number1 = 0;

while(number1<=10){
console.log(number1);
number1++;
}

do{
console.log(number1);
number1++;
}while(number1<=20)

for(let i = 0; i <= 4; i++){
 //alert(i);
}
console.log(regDev(number1));
//confirm('Подтеверждение действия');

/// Видео 5

const secondEndtyObject = new Object(); // объявление обьекта 

const user = {
    names: "Admin",
    password: "123qweasd",
    'age user': 18,
    'from-user': "Russian-Moscow",
    devUser: function (){
        console.log(this);
    }
};
console.log(user.names, user['age user']);
delete user['from-user'];

const PropName = prompt("Укажите название обьекта");
const ExtpxName = prompt("Укажите что хранит объект ");

const userName = {
    [PropName]: ExtpxName,
}

console.log(userName);
console.log('from-user' in user);
for(const key in user){
    console.log(key);
}

// Видео 6

function leng(user, userName){
    const userLeng = Object.keys(user);
    const UserNameLeng = Object.keys(userName)
    console.log("Длина первого массива: ",userLeng.length);

    if(userLeng.length !== 0){
        for(const key in user){
            if(user[key] !== userName[key]){
                console.log("Вы не администратор");
                return false;
            }
            else if(user[key] === userName[key]){
                console.log("Добро пожаловать");
                const objAdmin = Object.assign({}, userName);
                return true;
            }
        }
        return true;
    }else if(userLeng.length === UserNameLeng.length){
        console.log("Не полная информация");
        return true;
    }
    else{
        return false;
    }
    

}

function other(user){
    const{
        names, 
        ...OtherInfo
    }= user
    console.log("Вход выполнил ", names);
    console.log("Дополнительная информация ", OtherInfo);
}

other(user);
leng(user,userName);

// Видео 7
console.log("Информация по this", this);
user.devUser();


let sumbol;// = prompt("Введите или умножение * или сложение + : ");


const calculate = {
    read(){
        this.numA = Number(prompt("Введите первую переменную: ", 0 ));
        this.numB = Number(prompt("Введите вторую переменную: ", 0 ));
    },
    sum(){
        
        return this.numA + this.numB;
    },
    nul(){

       return this.numA * this.numB;
    }
}

calculate.read();
if(sumbol == '+'){
   // alert(calculate.sum());
}else if(sumbol == '*'){
   // alert(calculate.nul());
}

console.log(this.calculate);