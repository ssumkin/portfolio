let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slide = document.querySelector(".slide"); 

let count = 0;
let move = 0;
  
prev.addEventListener("click", function(){
    if(count > 0) {
        move += 530;
        slide.style.left = move + "px";
        count--;
    } else if(count == 0) {
        move -= 530*2;
        slide.style.left = move + "px";
        count = 2;
    }
});
 
next.addEventListener("click", function(){
    if(count < 2) {
        move -= 530;
        slide.style.left = move + "px";
        count++; 
    } else if(count == 2) {
        move = 0;
        slide.style.left = move + "px";
        count = 0;
    }
    
}); 