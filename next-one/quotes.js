const quotes = [
    {
        name:'Johnny Travolta',
        quote:'Get busy coding.'
    },
    {
        name:'John F. Kennedy',
        quote:'Those who dare to fail miserably can achieve greatly.'
    },
    {
        name:'Abraham Lincoln',
        quote:' I`m a success today because I had a friend who believed in me and I didn t have the heart to let him down'
    },
    {
        name:'Leonardo Da Vinci',
        quote:'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name:'Leo Tolstoy',
        quote:'If you want to be happy, be.'
    },
    {
        name:'Johnny Travolta',
        quote:'Get busy coding.'
    }
]



const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    // quotes from the top list just made you dobitoc de pus la plural asa cum este si lista
    quote.innerHTML = quotes[number].quote;
}