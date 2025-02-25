const button = document.querySelectorAll("button")
const heading = document.getElementById("mainHeading")


button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        switch(btn.innerText.toLowerCase()){
            case "red": 
            heading.style.color = " #e74c3c";
            break;

            case "green": 
            heading.style.color = " #2ecc71";
            break;

            case "blue": 
            heading.style.color = " #3498db";
            break;

            case "purple": 
            heading.style.color = " #9b59b6";
            break;

            case "reset": 
            heading.style.color = " #34495e";
            break;


        }
    })
})
