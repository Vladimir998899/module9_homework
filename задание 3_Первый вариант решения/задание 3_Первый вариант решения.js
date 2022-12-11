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

// Первый вариант решения:

function userMessage(url, callback) {
    //создаем XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //инициализируем его
    xhr.open("GET", url);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log("Статус ответа: ", xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log("Ошибка! Статус ответа: ", xhr.status);
    };
    //отсылка запроса
    xhr.send();
}

const resultNode = document.querySelector(".imageList");
const btnNode = document.getElementById("pressButt");

function displayResult(apiData) {
    for (let i = 0; i <= apiData.length; i++) {
        console.log(apiData[i])
        const cardBlock = `<img src = "${apiData[i].download_url}" />`;
        console.log(cardBlock)
        resultNode.innerHTML += cardBlock;
    }
}

btnNode.addEventListener("click", () => {
    const value = document.querySelector(".pic-number3").value;
    userMessage(
        `https://picsum.photos/v2/list?limit=${value}`,
        displayResult
    );
});


