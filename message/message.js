const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
    let content = messageIn.value;
    if (content ===''){
        alert('Please enter a valid message as you left the box empty')
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value ='';
    }
    messageOut.innerHTML = content;
    messageIn.value='';
}