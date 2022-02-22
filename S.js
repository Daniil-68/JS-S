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


// Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег //

// const userInfo = (name, money) => {
//     return {name:name, money:money};
// }
// const hum1 = userInfo('Вася', 200);
// const hum2 = userInfo('Дима', 150);
// const hum3 = userInfo('Игорь', 500);
// const hums = [hum1, hum2, hum3];
//
// const plusMoney = (ar) => {
//     const names = [];
//     let money = 0;
//    for (i = 0; i < ar.length; i++) {
//        names.push(ar[i].name);
//        money = money + ar[i].money;
//    }
//    return [names, money];
// }
// console.log(plusMoney(hums));


const userInfo = (name, money, age) => {
    return {name: name, money: money, age: age};
}
const hum1 = userInfo('Вася', 200, 19);
const hum2 = userInfo('Дима', 150, 17);
const hum3 = userInfo('Игорь', 500, 22);
const hums = [hum1, hum2, hum3];

const plusMoney = (ar) => {
    const names = [];
    let money = 0;
    for (i = 0; i < ar.length; i++) {
        if (ar[i].age > 18) {
            names.push(ar[i].name);
            money = money + ar[i].money;
        }
    }
    return [names, money];
}
console.log(plusMoney(hums));





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



// const HUM_1 = {name:'Иван', money:100, age:19};
// const HUM_2 = {name:'Дмитрий', money:120, age:17};
// const HUM_3 = {name:'Егор', money:210, age:21};
//
// const HUMANS = [HUM_1, HUM_2, HUM_3];
//
// const ARRAY_OF_AGE_SUM = (ar) => {
//
// }
//
// console.log(HUM_1.age);




// Вычислить строку //
// const STR = '5+10-7';
//
// const ARR_1 = STR.split(',');
// console.log(ARR_1);
//
// const ARR_2 = ARR_1.reduce((prev, item, index, array) => {
//     if(Number.isInteger(parseInt(item))) {
//         if (prev.op.length !== 0) {
//             prev.num2 =
//         }
//         prev.num = prev.num + item;
//     } else {
//         prev.op = item;
//     }
// }, {});
// console.log(ARR_2);


