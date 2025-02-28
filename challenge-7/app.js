//v2
const accordionBtns = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-content");
const accordionItems = document.querySelectorAll(".accordion-item");

let activeIndex = -1; 

accordionBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (activeIndex === index) {
            
            accordionContents[index].style.maxHeight = "0";
            accordionItems[index].classList.remove("active");
            activeIndex = -1; 
        } else {
           
            if (activeIndex !== -1) {
                accordionContents[activeIndex].style.maxHeight = "0";
                accordionItems[activeIndex].classList.remove("active");
            }

            accordionContents[index].style.maxHeight = accordionContents[index].scrollHeight + "px";
            accordionItems[index].classList.add("active");
            activeIndex = index; 
        }
    });
});

// v1
// const accordionBtn = document.querySelectorAll(".accordion-button");
// const accordionContent = document.querySelectorAll(".accordion-content");
// const accordionItem = document.querySelectorAll(".accordion-item")

// accordionBtn.forEach((btn, index) => {


//     btn.addEventListener("click", () => {
//         if (accordionContent[index].style.maxHeight !== "none") {
//             accordionContent.forEach((content)=>{
//                 content.style.maxHeight = 0
//             })
//             accordionContent[index].style.maxHeight = "none";
//             accordionItem[index].classList.toggle("active")
//         }
//     })


// })


