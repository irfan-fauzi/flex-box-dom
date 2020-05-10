let container2 = document.querySelector('.container2');
let container = document.querySelector('.container');


let newEl = function (element, text) {
    let el = document.createElement(element);
    el.innerText = text;
    el.classList.add('kotak')
    return container2.appendChild(el);
}

let looping = function (element, text, jumlah) {
    for (let a = 1; a <= jumlah; a++) {
        newEl(element, text);
    }
}

looping(`div`, `ini adalah baru `, 5);

// event onclick
let myDiv = container2.querySelectorAll('div');
for (let i = 0; i < myDiv.length; i++) {

    for (let j = i; j < myDiv.length; j++) {

        myDiv[i].classList.add(`kotak${j}`);
    }

}