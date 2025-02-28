const panel = document.querySelector(".panel");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const panelContent = document.querySelectorAll(".menu-item");

toggleBtn.addEventListener("click",()=>{  
    panel.classList.toggle("active")    
})

closeBtn.addEventListener("click",()=>{  
    panel.classList.toggle("active")    
})

panelContent.forEach((content)=>{
    content.addEventListener("click",()=>{
        alert(`You are now in ${content.textContent.toLowerCase()} page`)
    })
})


