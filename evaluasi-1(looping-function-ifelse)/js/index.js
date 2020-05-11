// let container2 = document.querySelector('.container2');
let container = document.querySelector('.container');


let newEl = function (element, text) {
    let el = document.createElement(element);
    el.innerText = text;
    el.classList.add('box')
    return container.appendChild(el);
}

let looping = function (element, text, jumlah) {
    for (let a = 1; a <= jumlah; a++) {
        newEl(element, text);
    }
}


looping(`div`, `baru`, 10);

// event onclick
let myDiv = container.querySelectorAll('div');
for (let i = 0; i < myDiv.length; i++) {

    for (let j = i; j <= i; j++) {

        myDiv[i].classList.add(`box${j +1}`);
    }

}