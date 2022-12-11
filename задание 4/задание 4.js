/*
 Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»; Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота. Пример: если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200. После получения данных вывести ниже картинку на экран.
 */

const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
    const value1 = +document.getElementById('num1').value;
    const value2 = +document.getElementById('num2').value;

    let desired = document.getElementById('j-result');
    desired.textContent = '';
    if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
        desired.textContent = 'одно из чисел вне диапазона от 100 до 300';
        return;
    }
    // Делаем запрос за данными
    fetch(`https://picsum.photos/${value1}/${value2}`)
        .then((response) => {
            document.getElementById('result').src = response.url;
        });

});