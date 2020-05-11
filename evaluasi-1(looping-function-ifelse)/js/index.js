// let container2 = document.querySelector('.container2');
let container = document.querySelector('.container');


let newEl = function (element) {
    let el = document.createElement(element);
    // el.innerText = text;
    el.classList.add('box')
    return container.appendChild(el);
}

let looping = function (element, jumlah) {
    for (let a = 1; a <= jumlah; a++) {
        newEl(element);
    }
}


looping(`div`, 13);

// event onclick
let myDiv = container.querySelectorAll('div');
for (let i = 0; i < myDiv.length; i++) {

    for (let j = i; j <= i; j++) {

        myDiv[i].classList.add(`box${j +1}`);
        myDiv[i].innerText = `elemen ${j +1}`;
    }

}