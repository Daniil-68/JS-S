// Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег //

const userInfo = (name, money) => {
    return {name:name, money:money};
}
const hum1 = userInfo('Вася', 200);
const hum2 = userInfo('Дима', 150);
const hum3 = userInfo('Игорь', 500);
const hums = [hum1, hum2, hum3];

const plusMoney = (ar) => {
    const names = [];
    let money = 0;
   for (i = 0; i < ar.length; i++) {
       names.push(ar[i].name);
       money = money + ar[i].money;
   }
   return [names, money];
}
console.log(plusMoney(hums));




//  Функция, которая принимает массив объектов с полями name и money, возвращает числом общее количество денег у людей старше 18 лет//
// const userInfo = (name, money, age) => {
//     return {name: name, money: money, age: age};
// }
// const hum1 = userInfo('Вася', 200, 19);
// const hum2 = userInfo('Дима', 150, 17);
// const hum3 = userInfo('Игорь', 500, 22);
// const hums = [hum1, hum2, hum3];
//
// const plusMoney = (ar) => {
//     const names = [];
//     let money = 0;
//     for (i = 0; i < ar.length; i++) {
//         if (ar[i].age > 18) {
//             names.push(ar[i].name);
//             money = money + ar[i].money;
//         }
//     }
//     return [names, money];
// }
// console.log(plusMoney(hums));





