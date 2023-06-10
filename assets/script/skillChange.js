const skillsBtn = document.getElementById("skillsToggle");

const currentSkills = document.getElementById("currentSkills");
const futureSkills = document.getElementById("futureSkills");
 

skillsBtn.addEventListener("click", function(){ 
    if(skillsBtn.checked) {
        currentSkills.classList.add("skills-hidden");
        futureSkills.classList.remove("skills-hidden");
    } else {
        currentSkills.classList.remove("skills-hidden");
        futureSkills.classList.add("skills-hidden");
    } 
});