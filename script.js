
const replyArray = ['hello', 'hi', 'awesome', 'welcome', 'what is your name', 'who build you', ]

const replyObj = {
    hello : 'welcome to google chat',
    hi : 'welcome to google chat',
    awesome : 'yaah ! I am awesome',
    welcome : 'thank you ! you too are welcome',
    'what is your name' : 'my name is Google bot',
    'who build you' : 'Niraj have build me'
}

function replyFunction() {
    document.querySelector("#sendReply").addEventListener('click', () => {
        
        const sendMessage = document.querySelector("#sendMessage").value;
        const lowerMesage = sendMessage.toLowerCase();
        
        if (replyArray.indexOf(lowerMesage) != -1) {
            let replyBack = replyObj[`${lowerMesage}`];
            // document.querySelector("#reply").innerHTML += `${lowerMesage}`;
            document.querySelector("#reply").innerHTML += `${replyBack}<br>`;
            
        } else {
            let replyErr = 'Please type me a relevent message';
            document.querySelector("#reply").innerHTML += `${replyErr}<br>`;
        }
    });
}

replyFunction()


// document.querySelector("#show").addEventListener('click', () => {
//     const showMenu = document.querySelector("#showMenu");
//     const position = showMenu.getBoundingClientRect()
//     if (position.left == -400) {
//         showMenu.style.left = '0px';
//     } else {
//         showMenu.style.left = '-400px';
//     }
// })


//? show chat coding
const showChat = document.querySelector("#showChat");
showChat.addEventListener('click', () => {
   if (showChat.className == 'fa fa-caret-down') {
        showChat.className = 'fa fa-caret-right';
        
   } else {
        showChat.className = 'fa fa-caret-down';
   }
})
//? show chat coding
const showSpaces = document.querySelector("#showSpaces");
showSpaces.addEventListener('click', () => {
   if (showSpaces.className == 'fa fa-caret-down') {
        showSpaces.className = 'fa fa-caret-right';
        
   } else {
        showSpaces.className = 'fa fa-caret-down';
   }
})
