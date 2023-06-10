const project1 = document.getElementById("project1"); 
const project1Top = project1.offsetTop*1;
const pro1content = project1.querySelector(".projects-content-wrap");
const pro1img = project1.querySelector(".projects-content-img");

const project2 = document.getElementById("project2"); 
const project2Top = project2.offsetTop*1;
const pro2content = project2.querySelector(".projects-content-wrap");
const pro2img = project2.querySelector(".projects-content-img");

const project3 = document.getElementById("project3"); 
const project3Top = project3.offsetTop*1;
const pro3content = project3.querySelector(".projects-content-wrap");
const pro3img = project3.querySelector(".projects-content-img");

const project4 = document.getElementById("project4"); 
const project4Top = project4.offsetTop*1;
const pro4content = project4.querySelector(".projects-content-wrap");
const pro4img = project4.querySelector(".projects-content-img");

 
 

window.addEventListener("scroll", function(){
    let scrollLocation = document.documentElement.scrollTop + window.innerHeight - 150;

    if(project1Top < scrollLocation) {
        pro1content.style.marginLeft = "0px";
        pro1img.style.marginRight = "0px";
    }

    if(project2Top < scrollLocation) {
        pro2content.style.marginLeft = "0px";
        pro2img.style.marginRight = "0px";
    }

    if(project3Top < scrollLocation) {
        pro3content.style.marginLeft = "0px";
        pro3img.style.marginRight = "0px";
    }

    if(project4Top < scrollLocation) {
        pro4content.style.marginLeft = "0px";
        pro4img.style.marginRight = "0px";
    }
});
 