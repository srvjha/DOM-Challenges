const body = document.getElementById("body");
const toggle = document.getElementById("toggleButton");
const status = document.getElementById("status")
const bulb_off = document.querySelector(".bulb.off")

toggle.addEventListener("click",()=>{
    if(toggle.innerText === "Turn On"){
         toggle.innerText = "Turn Off"
         status.innerText = "Status: Off"
         bulb_off.classList.remove("off")
         body.classList.add("dark-mode")

    }
    else {
           toggle.innerText = "Turn On"
            status.innerText = "Status: ON"
            bulb_off.classList.add("off")
            body.classList.remove("dark-mode")

    }
})