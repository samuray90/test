const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const color = ['yellow','red','blue','#3b4565'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor = colors[2];
    let radndom = Math.floor(Math.radndom()*colors.length)
    bodyBcg.style.backgroundColor = colors[radndom];
}