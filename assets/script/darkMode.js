const darkmodeBtn = document.getElementById("darkmodeToggle"); 
 
const header = document.getElementById("header");
const main = document.getElementById("main");

const link = document.querySelectorAll(".section-title-link"); 

const aboutMe = document.querySelectorAll(".about-me-icon-img");



darkmodeBtn.addEventListener("click", function(){  
    if(darkmodeBtn.checked) { 
        header.classList.add("darkmode-header");
        main.classList.add("darkmode-main");
		for(let i = 0; i < link.length; i++) {
			const linkItem = link.item(i);
			linkItem.src = "./assets/images/white-link.png";

			const aboutMeItem = aboutMe.item(i);
			aboutMeItem.src = `./assets/images/about-me/white0${i+1}.svg`
		}
    } else {
        header.classList.remove("darkmode-header");
        main.classList.remove("darkmode-main");
		for(let i = 0; i < link.length; i++) {
			const item = link.item(i);
			item.src = "./assets/images/black-link.png";

			const aboutMeItem = aboutMe.item(i);
			aboutMeItem.src = `./assets/images/about-me/black0${i+1}.svg`
		}
    } 
});