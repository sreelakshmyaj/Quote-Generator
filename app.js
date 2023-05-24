const quotes = document.querySelectorAll('.quotes');
var quote = quotes[0];
const btn = document.querySelector('button');

function selectRandom() {
    return Math.floor(Math.random()*quotes.length);
}

function display() {
    quote.classList.remove('display-quote');
    quote = quotes[selectRandom()];
    console.log(quote);
    quote.classList.add('display-quote');
}

btn.addEventListener("click", display);