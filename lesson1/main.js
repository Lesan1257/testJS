'use strict'
// js 
var time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
var money = +prompt('Ваш бюджет на месяц?', 100);

console.log(time);
console.log(money);

var appData = {
     cash: money,
     timeData: time,
     optionalExpenses: {},
     savings: false,
     income: []
}
var answer1 = prompt('как дела?');
var answer2 = prompt('Привет');

appData.expenses = {
   answer1: answer2
}

alert('Ваш бюджет на 1 день = ' + (money)/30 + ' рубля(ей)');


console.log(appData);