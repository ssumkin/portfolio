const wrap = document.querySelector(".jjanggu-move-field");
let wrapWidth = wrap.offsetWidth;
let wrapHeight = wrap.offsetHeight; 

const jjanggu = document.getElementById("jjanggu");
const jjangguImg = jjanggu.querySelector("img");
const whitey = document.getElementById("whitey");
const whiteyImg = whitey.querySelector("img");
const jjanga = document.getElementById("jjanga");
const jjangaImg = jjanga.querySelector("img");

let easterEggCheck = 0;

let jjangguTop = jjanggu.offsetTop;
let jjangguBottom = jjangguTop + jjanggu.offsetHeight;
let jjangguLeft = jjanggu.offsetLeft;
let jjangguRight = jjangguLeft + 40;
let jjangguSpeedX = 0.5;
let jjangguSpeedY = 0.2;
let jjangguLX = 0;
let jjangguLY = 0;
let jjangguStop = 0;
let jjangguClick = 0;

let whiteyTop = whitey.offsetTop;
let whiteyBottom = whiteyTop + whitey.offsetHeight;
let whiteyLeft = whitey.offsetLeft;
let whiteyRight = whiteyLeft + 40;
let whiteySpeedX = 0.5;
let whiteySpeedY = 0.2;
let whiteyLX = 0;
let whiteyLY = 0;
let whiteyStop = 0;
let whiteyClick = 0;

let jjangaTop = jjanga.offsetTop;
let jjangaBottom = jjangaTop + jjanga.offsetHeight;
let jjangaLeft = jjanga.offsetLeft;
let jjangaRight = jjangaLeft + 40;
let jjangaSpeedX = 0.5;
let jjangaSpeedY = 0.2;
let jjangaLX = 0;
let jjangaLY = 0;
let jjangaStop = 0;
let jjangaClick = 0;

 
let moving1, moving2, moving3;
let doridori1, doridori2, doridori3;
let revers1, revers2, revers3 = 0;

  

setInterval(function(){
    wrapWidth = wrap.offsetWidth;
    wrapHeight = wrap.offsetHeight; 
}, 1000);

function doridori(jjanggu_character) {
    if(jjanggu_character == jjanggu) {
        doridori1 = setInterval(function(){
            if(revers1 == 0) {
                jjangguImg.style.transform = `scaleX(${1})`;
                revers1 = 1;
            } else {
                jjangguImg.style.transform = `scaleX(${-1})`;
                revers1 = 0;
            }
        }, 500);
    } 
    else if(jjanggu_character == whitey) {
        doridori2 = setInterval(function(){
            if(revers2 == 0) {
                whiteyImg.style.transform = `scaleX(${1})`;
                revers2 = 1;
            } else {
                whiteyImg.style.transform = `scaleX(${-1})`;
                revers2 = 0;
            }
        }, 500);
    } 
    else {
        doridori3 = setInterval(function(){
            if(revers3 == 0) {
                jjangaImg.style.transform = `scaleX(${1})`;
                revers3 = 1;
            } else {
                jjangaImg.style.transform = `scaleX(${-1})`;
                revers3 = 0;
            }
        }, 500);
    }
 
}
 
 

function move(jjanggu_character) { 
    if(jjanggu_character == jjanggu) {
        moving1 = setInterval(function(){
            if(jjangguLX == 0) {
                jjangguLeft += jjangguSpeedX;
                jjangguRight += jjangguSpeedX; 
            } else {
                jjangguLeft -= jjangguSpeedX;
                jjangguRight -= jjangguSpeedX;
            }
            
            if(jjangguRight >= wrapWidth) {
                jjangguLX = 1;
            } else if(jjangguLeft <= 0) {
                jjangguLX = 0;
            }
        
            if(jjangguLY == 0) {
                jjangguTop += jjangguSpeedY;
                jjangguBottom += jjangguSpeedY;
            } else {
                jjangguTop -= jjangguSpeedY;
                jjangguBottom -= jjangguSpeedY;
            }
            
            if(jjangguBottom >= wrapHeight-2) {
                jjangguLY = 1;
            } else if(jjangguTop <= 0) {
                jjangguLY = 0;
            } 

            jjanggu_character.style.top = jjangguTop + "px";
            jjanggu_character.style.left = jjangguLeft + "px";
        }, 1);
    } 
    else if(jjanggu_character == whitey) {
        moving2 = setInterval(function(){
            if(whiteyLX == 0) {
                whiteyLeft += whiteySpeedX;
                whiteyRight += whiteySpeedX; 
            } else {
                whiteyLeft -= whiteySpeedX;
                whiteyRight -= whiteySpeedX;
            }
            
            if(whiteyRight >= wrapWidth) {
                whiteyLX = 1;
            } else if(whiteyLeft <= 0) {
                whiteyLX = 0;
            }
        
            if(whiteyLY == 0) {
                whiteyTop += whiteySpeedY;
                whiteyBottom += whiteySpeedY;
            } else {
                whiteyTop -= whiteySpeedY;
                whiteyBottom -= whiteySpeedY;
            }
            
            if(whiteyBottom >= wrapHeight-2) {
                whiteyLY = 1;
            } else if(whiteyTop <= 0) {
                whiteyLY = 0;
            } 

            jjanggu_character.style.top = whiteyTop + "px";
            jjanggu_character.style.left = whiteyLeft + "px";
        }, 1);
    } 
    else {
        moving3 = setInterval(function(){
            if(jjangaLX == 0) {
                jjangaLeft += jjangaSpeedX;
                jjangaRight += jjangaSpeedX; 
            } else {
                jjangaLeft -= jjangaSpeedX;
                jjangaRight -= jjangaSpeedX;
            }
            
            if(jjangaRight >= wrapWidth) {
                jjangaLX = 1;
            } else if(jjangaLeft <= 0) {
                jjangaLX = 0;
            }
        
            if(jjangaLY == 0) {
                jjangaTop += jjangaSpeedY;
                jjangaBottom += jjangaSpeedY;
            } else {
                jjangaTop -= jjangaSpeedY;
                jjangaBottom -= jjangaSpeedY;
            }
            
            if(jjangaBottom >= wrapHeight-2) {
                jjangaLY = 1;
            } else if(jjangaTop <= 0) {
                jjangaLY = 0;
            }
     
            jjanggu_character.style.top = jjangaTop + "px";
            jjanggu_character.style.left = jjangaLeft + "px";
        }, 1);
    } 
}
 



jjanggu.addEventListener("mouseover", function(){
    clearInterval(moving1);
    clearInterval(doridori1);
    jjangguImg.src = "./assets/images/jjanggu/move/jjangguStop.png"; 
});
jjanggu.addEventListener("mouseout", function(){
        
    if(jjangguStop == 1) return;
    jjangguImg.src = "./assets/images/jjanggu/move/jjanggu.png";
    move(jjanggu);
    doridori(jjanggu);
});
jjanggu.addEventListener("click", function(){ 
    jjangguSpeedX += 0.6;
    jjangguSpeedY += 0.3;  
    jjangguClick++;
    if(jjangguClick == 6) {
        clearInterval(moving1);
        clearInterval(doridori1);
        jjangguStop = 1;
        easterEggCheck++;
        easterEgg();
    }
});

whitey.addEventListener("mouseover", function(){
    clearInterval(moving2);
    clearInterval(doridori2);
    whiteyImg.src = "./assets/images/jjanggu/move/whiteyStop.png"; 
});
whitey.addEventListener("mouseout", function(){
        
    if(whiteyStop == 1) return;
    whiteyImg.src = "./assets/images/jjanggu/move/whitey.png";
    move(whitey);
    doridori(whitey);
});
whitey.addEventListener("click", function(){ 
    whiteySpeedX += 0.6;
    whiteySpeedY += 0.3;  
    whiteyClick++;
    if(whiteyClick == 6) {
        clearInterval(moving2);
        clearInterval(doridori2);
        whiteyStop = 1;
        easterEggCheck++;
        easterEgg();
    }
});

jjanga.addEventListener("mouseover", function(){
    clearInterval(moving3);
    clearInterval(doridori3);
    jjangaImg.src = "./assets/images/jjanggu/move/jjangaStop.png"; 
});
jjanga.addEventListener("mouseout", function(){
        
    if(jjangaStop == 1) return;
    jjangaImg.src = "./assets/images/jjanggu/move/jjanga.png";
    move(jjanga);
    doridori(jjanga);
});
jjanga.addEventListener("click", function(){ 
    jjangaSpeedX += 0.6;
    jjangaSpeedY += 0.3;  
    jjangaClick++;
    if(jjangaClick == 6) {
        clearInterval(moving3);
        clearInterval(doridori3);
        jjangaStop = 1;
        easterEggCheck++;
        easterEgg();
    }
});
 


function easterEgg() {
    if(easterEggCheck < 3) return;

    jjanggu.style.display = "none";
    whitey.style.display = "none";
    jjanga.style.display = "none";
    
    window.location.href = "../../subPage/stylePage/jjanggu-css.html";
}

function init() { 
    
    move(jjanggu);
    move(whitey);
    move(jjanga);

    doridori(jjanggu);
    doridori(whitey);
    doridori(jjanga); 
}

init();