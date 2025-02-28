
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


const carosuel = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const previousBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");

const imageToAdd = document.createElement("img");
const indicator = document.getElementById("carouselNav");
const slide = document.getElementById("autoPlayButton");
const timer = document.getElementById("timerDisplay")
let i = 0;


function carosuelGallery(index){
   //console.log(index)
    //const imageToAdd = document.createElement("img");
    imageToAdd.src = images[index].url
   // console.log(imageToAdd)
    imageToAdd.classList.add("carousel-slide");
    caption.innerText = images[index].caption;
    carosuel.appendChild(imageToAdd)  

}


  images.forEach((_,index)=>{
    const individualIndicator = document.createElement("div");
    individualIndicator.classList.add("indi")
    individualIndicator.classList.add("carousel-indicator");
    indicator.appendChild(individualIndicator)
    if(index === i){
      individualIndicator.classList.add("active")
    }
   
  })
  
carosuelGallery(i)



previousBtn.addEventListener("click",()=>{
  if(i>0){  
    i--;  
   
    carosuelGallery(i);
    const getIndicators = document.querySelectorAll(".indi");
    getIndicators.forEach((indi,index)=>{
      if(index === i) indi.classList.add("active")
        else indi.classList.remove("active")
    })
  }
  else {
    i = images.length-1 + i
    carosuelGallery(i)
    const getIndicators = document.querySelectorAll(".indi");
    getIndicators.forEach((indi,index)=>{
      if(index === i) indi.classList.add("active")
        else indi.classList.remove("active")
    })
  }
})

nextBtn.addEventListener("click",()=>{
  if(i < images.length - 1){ 
    i++; 
    carosuelGallery(i);
    const getIndicators = document.querySelectorAll(".indi");
    getIndicators.forEach((indi,index)=>{
      if(index === i) indi.classList.add("active")
        else indi.classList.remove("active")
    })
    // carouselTrack.style.transform = `translateX(-${(i - 1) * 100}%)`;

  }
  else {   
    i = images.length-1 - i  
    carosuelGallery(i)
    const getIndicators = document.querySelectorAll(".indi");
    getIndicators.forEach((indi,index)=>{
      if(index === i) indi.classList.add("active")
        else indi.classList.remove("active")
    })
  }
})

let interval;

function callTimer(time){
  clearInterval(interval)
  interval = setInterval(()=>{
    if(time > 0)
    {
      timer.innerText= `Next slide in ${time}s`
      time--;
    }
    else 
    {
      clearInterval(interval)
      timer.innerText= ``
   
     if(i<images.length-1){
      nextBtn.click()
    
     
     }
     else {
      previousBtn.click()
     
     }
     callTimer(5)
    
    }
  },1000)
} 
slide.addEventListener("click",()=>{
  if(slide.innerText === "Start Auto Play"){
    slide.innerText = "Stop Auto Play"
    callTimer(5)
  }
  else {
     slide.innerText = "Start Auto Play"
     clearInterval(interval)
      timer.innerText= ''
  }

  
 
  
})






