//v2
// const accordionBtns = document.querySelectorAll(".accordion-button");
// const accordionContents = document.querySelectorAll(".accordion-content");
// const accordionItems = document.querySelectorAll(".accordion-item");

// let activeIndex = -1; 

// accordionBtns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         if (activeIndex === index) {
            
//             accordionContents[index].style.maxHeight = "0";
//             accordionItems[index].classList.remove("active");
//             activeIndex = -1; 
//         } else {
           
//             if (activeIndex !== -1) {
//                 accordionContents[activeIndex].style.maxHeight = "0";
//                 accordionItems[activeIndex].classList.remove("active");
//             }

//             // Open the clicked accordion
//             accordionContents[index].style.maxHeight = accordionContents[index].scrollHeight + "px";
//             accordionItems[index].classList.add("active");
//             activeIndex = index; // Update active index
//         }
//     });
// });

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


const accordionButton = document.querySelectorAll(".accordion-button");
accordionButton.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("initially value yeh hoga", element.parentElement.classList.value);
    console.log("initially yeh hoga", element.parentElement)
    accordionButton.forEach((element) => {
      element.parentElement.classList.remove("active");
      console.log("phele yeh hoga", element.parentElement)
     
    });

    console.log("phir yeh: ", element.parentElement)
    element.parentElement.classList.toggle("active");
    
  });
});