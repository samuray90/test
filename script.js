const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','blue'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    // bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.radndom()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}