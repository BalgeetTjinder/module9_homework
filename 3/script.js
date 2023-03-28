const contantBoxInput = document.querySelector(".contantBox__input");
const contantBoxButton = document.querySelector(".contantBox__button");
const contantBoxResult = document.querySelector(".contantBox__result");
const contantBox = document.querySelector(".contantBox");

function useRequest (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(`Статус ответа: ${xhr.status}`);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        }
    };

    xhr.onerror = function() {
        console.log(`Ошибка! Статус выполнения: ${xhr.status}`);
    };

    xhr.send();
};

function displayResult(apiData) {
    let cards = "";

    apiData.forEach(item => {
        const cardblock = `
        <div class="card">
            <img src="${item.download_url}" class="card-image"/>
            <p>${item.author}</p>
        </div>
        `;
        cards += cardblock;
    })

    contantBoxResult.innerHTML = cards;
}



contantBoxButton.addEventListener("click", function() {
    const inputValue = parseInt(contantBoxInput.value);
    if (inputValue <= 10 && inputValue > 0) {
        useRequest(`https://picsum.photos/v2/list?limit=${inputValue}`, displayResult);
    } else {
        const exceptionMessage = `число ${inputValue} вне диапазона`;
        contantBoxResult.innerHTML = exceptionMessage;
    }
});




