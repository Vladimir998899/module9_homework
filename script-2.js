// JavaScript Практика Задание 2.

/*
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JS-объект:

{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/

const jsonString = `{
"list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`;
const working = JSON.parse(jsonString);
console.log(working);






