const name = document.querySelector("#nameInput");
const job = document.querySelector("#jobInput");
const age = document.querySelector("#ageInput");
const bio = document.querySelector("#bioInput");
const displayName = document.getElementById("nameDisplay");
const displayJob = document.getElementById("jobDisplay");
const displayAge = document.getElementById("ageDisplay");
const displayBio = document.getElementById("bioDisplay");

 
 name.addEventListener("input",()=>{
    if(name.value.length > 0){
        displayName.innerText = name.value
    }
    else {
        displayName.innerText = "Not Provided"
    }
 })
 
 job.addEventListener("input",()=>{
    if(job.value.length > 0){
        displayJob.innerText = job.value
    }
    else {
        displayJob.innerText = "Not Provided"
    }
 })
 age.addEventListener("input",()=>{
    if(age.value.length > 0){
        displayAge.innerText = age.value
    }
    else {
        displayAge.innerText = "Not Provided"
    }
 })
 bio.addEventListener("input",()=>{
    if(bio.value.length > 0){
        displayBio.innerText = bio.value
    }
    else {
        displayBio.innerText = "Not Provided"
    }
 })

