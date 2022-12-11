/*Напишите код приложения, интерфейс которого представляет собой input и кнопку.
 В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне
 диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по 
URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.
Подсказка: получение данных из input.
const value = document.querySelector('input').value;
 */

// Второй вариант решения

const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
    const value = +document.getElementById('num').value;

    let randome = document.getElementById('j-result');
    randome.textContent = '';
    if (!(value >= 1 && value <= 10)) {
        randome.textContent = 'число вне диапазона от 1 до 10';
        return;
    }
    // Делаем запрос за данными
    fetch(`https://picsum.photos/v2/list?limit=10${value}`)
        .then((response) => {
            document.getElementById('result').src = response.url;
        });

});