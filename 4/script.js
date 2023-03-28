const Input1 = document.getElementById("input1");
const Input2 = document.getElementById("input2");
const ContantResult = document.querySelector(".contant__result")
const ContantButton = document.querySelector(".contant__button");

ContantButton.addEventListener("click", () => {
    let inputValue1 = parseInt(Input1.value);
    let inputValue2 = parseInt(Input2.value);
    if (inputValue1 < 100 || inputValue1 > 300 || inputValue2 < 100 || inputValue2 > 300) {
        const exceptionMessage = `одно из чисел вне диапазона от 100 до 300`;
        ContantResult.innerHTML = exceptionMessage;
    } else {
        fetch(`https://picsum.photos/${inputValue1}/${inputValue2}`)
            .then(response => {
            const img = document.createElement('img');
            img.src = response.url;
            ContantResult.appendChild(img);
            console.log(response);
    });
    }
})



