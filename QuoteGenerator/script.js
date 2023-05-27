//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"If you want to live a happy life,tie it to a goal,not
    to people or things."`,
    person: ` Albert Einstein`
},{
    quote: `" Your time is limited,so dont waste it living someone else's life."`,
    person: `Steve Jobs`
},{
    quote: `"Tell me and I forget.Teach me and I remember.Involve me
    and I learn."`,
    person: `Benjamin Franklin`
},{
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
},{
    quote: `"t does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
},];

function generateQuote(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
}

btn.addEventListener('click',generateQuote);