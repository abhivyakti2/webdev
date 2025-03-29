
//MOUSE EVENTS

let h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', () => {
    console.log("Mouse entered");
})

h1.addEventListener('mouseleave', () => {
    console.log("Mouse left");
})

h1.addEventListener('mousedown', () => {
    console.log("Mouse is pressed");
})

h1.addEventListener('mouseup', () => {
    console.log("Mouse is pressed and released");
})


//KEYBOARD EVENTS

let input = document.querySelector('#input');
let showKeys = document.querySelector('.showKeys');

input.addEventListener('keypress', (event) => {
    // console.log('Key pressed');
    console.log(event.key)
    showKeys.innerText += event.key;
})

//FORM EVENTS

let yahooForm = document.querySelector('#yahooForm');

yahooForm.addEventListener('submit', (ev) => {
    ev.preventDefault(); // Form ko by default submit hone se rokk dega
    console.log("Form submitted");
    console.log(ev.target.children[0].value)
    
    window.location = `https://search.yahoo.com/search?p=${ev.target.children[0].value}`
})