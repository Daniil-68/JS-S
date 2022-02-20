// // Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег //
// class arrayOfObjects {
//     constructor(name, money) {
//         this.name = name;
//         this.money = money;
//     }
//
//     sayMoney() {
//         console.log(this.name);
//         console.log(this.money);
//         console.log(this.money.length);
//     }
// }
//
// const humOne = new arrayOfObjects ('Егор, Миша, Дима', '25, 17, 12');
// humOne.sayMoney();




// function userInfo(name, money) {
//     this.name = name;
//     this.money = money;
// }
// console.log(new userInfo('Вася', 25));
// console.log(new userInfo('Лена', 22));


// Как написать стрелочную и надо ли это вообще? //
// const UserInfoTwo = (name, age) => {
// 	this.name = name;
// 	this.age = age;
// }
//
// console.log(new UserInfoTwo('Вася', 23));
// console.log(new UserInfoTwo('Лена', 27));


//  Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег //
// Как вывести и имена??? //
// const USER_INFO = (name, money) => {
//     return {name:name, money:money};
// }
// const HUM_1 = USER_INFO('Вася', 200);
// const HUM_2 = USER_INFO('Дима', 150);
//
// const PLUS_MONEY = (obj1, obj2) => {
//     // return obj1.name, obj2.name;
//     return obj1.money + obj2.money;
// }
// console.log(PLUS_MONEY(HUM_1, HUM_2));




//  Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег у людей старше 18 лет//
// const USER_INFO = (name, money, age) => {
//     return {name:name, money:money, age:age};
// }
// const HUM_1 = USER_INFO('Вася', 200, 21);
// const HUM_2 = USER_INFO('Дима', 150, 17);
// const HUM_3 = USER_INFO('Дима', 150, 35);
//
// const SUM_AGE = (obj1, obj2, obj3, sum) => {
//     if ( > 18) {
//         return obj1.money + obj2.money + obj3.money;
//     }
// }
// console.log(SUM_AGE(HUM_1, HUM_2, HUM_3));



const HUM_1 = {name:'Иван', money:100, age:19};
const HUM_2 = {name:'Дмитрий', money:120, age:17};
const HUM_3 = {name:'Егор', money:210, age:21};

const HUMANS = [HUM_1, HUM_2, HUM_3];

const ARRAY_OF_AGE_SUM = (ar) => {

}

console.log(HUM_1.age);




// Повторение //

// Функция, которая считает сколько в массиве массивов с количеством элементов больше 2, с помощью reduce //
const c = [[1, 2], [3, 4, 5], [4, 6, 9], [1, 4]];

const SUM = c.reduce((prev, item) => {
    if (item.length > 2) {
        return prev + 1;
    }
    return prev;
}, 0);
console.log(SUM);


// Вернуть массив из true false из массива чисел, больше число 0 или нет //
const AR_ONE = [1, 3, -2, 2, -5];

const AR_ONE_ONE = AR_ONE.reduce((prev, item) => {
    if (item > 0) {
        prev.push(true);
    } else {
        prev.push(false);
    }
    return prev;
}, []);
console.log(AR_ONE_ONE);


// Считает количество чисел > 0 в массиве //
const ARR_TWO = [1, 3, -3, -6, 9, -3];

const ARR_TWO_TWO = ARR_TWO.reduce((prev, item) => {
    if (item > 0) {
        return prev + 1;
    }
    return prev;
}, 0);
console.log(ARR_TWO_TWO);


// Массив строк, чтобы reducom слить в одну //
const q2 = ['Привет', ', ', 'Даниил'].reduce((prev, item) => {
    return prev + item;
}, '');
console.log(q2);


// В массиве строк посчитать общую длину строк длиннее 3 //
const x11 = ['Молоко', 'Лампа', 'Малина', 'Сыр'].reduce((prev, item) => {
    if (item.length > 3) {
        return prev + item.length;
    }
    return prev;
}, 0);
console.log(x11);


// Вычислить строку //
// const STR = '5 + 10 - 7';
//
// const ARR_1 = STR.split(',');
// console.log(ARR_1);
//
// const ARR_2 = ARR_1.reduce((prev, item) => {
//
// }, 0);
// console.log(ARR_2);

