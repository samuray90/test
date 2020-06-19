const quotes = [
  {
      name:'Johnny daniel',
      quote:'get busy coding'
  },
  {
      name:'John Kenedy',
      quote:'those who dare to fail miserably  can achieve greatly'
  },
  {
      name:'Abraham LIncoln',
      quote:'I`m a success today because I had a cucu caca friend who believed in me and I didn`t havethe heart to let him down'
  }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){

let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML = quotes[number].name;
quote.innerHTML = quotes[number].quote;
}



// const simpleQuotes = [
//   {
//     name:'author number 1',
//     quote:'quote number 1'
//   },
//   {
//     name:'author number 2',
//     quote:'quote number 2'
//   }
// ]