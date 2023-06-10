const typing = document.querySelector(".masthead-description-typing");
const typingContent = ["I want to be a Developer", "I love Coding", "I enjoy coding"];
 
 
let typingLoop = setInterval(loop, 200);
let index1 = 0;
let index2 = 0;
let indexLen;
let currentTyping = "";
 
function loop() {
    indexLen = typingContent[index1].length*1; 
    
    if(index2 < indexLen) {
        currentTyping += typingContent[index1][index2]; 
        typing.innerHTML = currentTyping; 
        index2++;  
        if(index2 == indexLen) { 
            clearInterval(typingLoop);
            setTimeout(function(){ 
                typingLoop = setInterval(loop, 50); 
            }, 2000); 
        }
    } else { 
        if(currentTyping.length > 0) {
            currentTyping = currentTyping.slice(0, -1);
            typing.innerHTML = currentTyping; 
        } else {

            index1++;
            if(index1 == 2) {
                index1 = 0;
            }
            index2 = 0;
            clearInterval(typingLoop);
            setTimeout(function(){ 
                typingLoop = setInterval(loop, 200); 
            }, 100);
        } 
    }
     
}

 