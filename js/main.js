// starting nav section 
let navIcon = document.querySelector("  .home .container .content i");

let nav = document.querySelector("nav");
let navUl = document.querySelector("nav ul");
let ulIcon = document.querySelector("nav ul i");
let header = document.querySelector("header.navHeader");
// icon section 
let icons = document.querySelectorAll(" .home>i");
let Iwant = document.querySelector(".home .landing .slider");
let homeSection = document.querySelector(".home .landing");
icons.forEach((e)=>{
     e.addEventListener("mouseover" , ()=>{
          e.style.display = "block";
     })
})
Iwant.addEventListener("mouseover" , ()=>{
     icons.forEach((e)=>{
          e.style.display = "block";
     })
})
Iwant.addEventListener("mouseout" , ()=>{
     icons.forEach((e)=>{
          e.style.display = "none";
     })
})
// *******************************

// **********************************************************************
navIcon.addEventListener("click" , ()=>{
    document.body.prepend(nav);
    nav.style.cssText = "display:block; position:fixed; background-color:white; top:0; left:0; height:100vh;width:100%;transition:0.5s;  z-index: 1000; ";
    navUl.style.cssText = " height:100% !important; justify-content: space-evenly; align-items:center;"
    document.querySelectorAll(" nav ul li a").forEach((e)=>{
        e.style.cssText = "color:var(--black);"
   })
    setTimeout(function(){
    nav.style.opacity = "1"
   },10)
     let mylinks = document.querySelectorAll(" body > nav ul li a");
     mylinks.forEach((e)=>{
     e.addEventListener("click" , ()=>{
          console.log("from js");
          nav.style.opacity = "0";
          setTimeout(()=>{
         document.querySelector("header .container .content").appendChild(nav);
         nav.style.cssText = "display:none; position:static; background-color:transparent;height:auto;width:auto;transition:0.5s ";
         navUl.style.cssText = " height:auto !important; justify-content: space-between; align-items:center;flex-direction: row;"
     
         },500)
     })
})
})

ulIcon.addEventListener("click" , ()=>{
    nav.style.opacity = "0";
     setTimeout(()=>{
    document.querySelector("header .container .content").appendChild(nav);
    nav.style.cssText = "display:none; position:static; background-color:transparent;height:auto;width:auto;transition:0.5s ";
    navUl.style.cssText = " height:auto !important; justify-content: space-between; align-items:center;flex-direction: row;"

    },500)
})
window.addEventListener("scroll",()=>{
 if (window.scrollY >= 1){
    navIcon.style.color = "white";
    header.style.cssText = "background-color:var(--darkBlue); position:fixed; width:100%; left:0; top:0; "
    document.querySelectorAll(" nav ul li a").forEach((e)=>{
         e.style.cssText = "color:white;"
    })
    document.querySelectorAll(" body > nav ul li a").forEach((e)=>{
         e.style.cssText = "color:var(--black);"
    })
    document.querySelector(".home header .container .content figure img").src = "imgs/logoWhite.png";
 } else if (window.scrollY <1){

    navIcon.style.color = "var(--whiteBlue)";

    header.style.cssText = "background-color:white; position:static; "
    document.querySelectorAll("nav ul li a").forEach((e)=>{
         e.style.cssText = "color:var(--black);"
    })
    document.querySelector(".home header .container .content figure img").src = "imgs/logo.png";

 }
})
// starting slider sectionc
let leftIcon = document.querySelector(".home > i:first-child");
let rightIcon = document.querySelector(".home >i:last-of-type");
let slides = document.querySelector(".home .landing .slider .content .slides");
    let direction = -1;
    leftIcon.addEventListener("click" , function(){
         if (direction===-1){
              direction = 1;
              slides.appendChild(slides.firstElementChild);
          }
          slides.style.transform = "translateX(50%)";
          document.querySelector(".home .landing .slider .content").style.cssText = " justify-content: flex-end;"
})
rightIcon.addEventListener("click" , function(){
clickRight();
})

transition();
function clickRight(){
     
     if (direction === 1){
          direction=-1;
          slides.prepend(slides.lastElementChild);
     }
     slides.style.transform = "translateX(-50%)";
     document.querySelector(".home .landing .slider .content").style.cssText = " justify-content: flex-start;"
}
function transition(){
     slides.addEventListener("transitionend" , ()=>{
          if (direction === -1){
               slides.appendChild(slides.firstElementChild);
          }else if (direction ===1){
               slides.prepend(slides.lastElementChild);
     
          }
          slides.style.transition = "none";
          slides.style.transform = "translateX(0px)";
          setTimeout(()=>{
          slides.style.transition = "1s"
          },10)
     })
}
setInterval(()=>{
 rightIcon.click();

},3000)
// starting about section
const aboutSectionArticle = document.querySelector("section.about .container > article");
const aboutSectionFigure = document.querySelector("section.about .container > figure");
window.addEventListener("scroll" , ()=>{
     if (window.scrollY >= aboutSectionArticle.offsetTop-250){
          aboutSectionArticle.style.opacity ="1";
          aboutSectionFigure.style.opacity = "1";
     }
})
// starting services section **********************************
let contents = document.querySelectorAll(".services .container .box");
window.addEventListener("scroll" , ()=>{
     if (window.scrollY >=document.querySelector(".services").offsetTop -300){
        contents.forEach((e)=>{
          e.style.cssText= "transform: translateY(0px); opacity:1;";
        })
     }
})
// starting team section**************************
let teamContainer = document.querySelector(".team section.container");
let teamHeader = document.querySelector(".team header.special")
window.addEventListener("scroll" , ()=>{
     if (window.scrollY >= teamHeader.offsetTop -250){
          teamHeader.style.transform = "translateX(0px)"
          teamContainer.style.transform = "translateX(0px)";
     
     }
 
})
if (window.innerWidth <=767){
     teamHeader.firstElementChild.nextElementSibling.innerHTML = "Our Awesome CreativeTeam Member";
     
}
// starting features section
function featuresScroll(){
     controles.forEach((e)=>{
     e.addEventListener("click" , ()=>{
       controles.forEach((e)=>{
          e.classList.remove("active");
       })
       e.classList.add("active");
     })
     })

}
function bigScreen1(){
     controles[1].addEventListener("click" , ()=>{
          featuresItems.style.transform = "translateX(-50%)";
     })
     controles[0].addEventListener("click" , ()=>{
          featuresItems.style.transform = "translateX(0)";
     })
}
function smallScreen(value){
     let hamada;
     let turn =  0;
            if (value ==1){
               for (let i = 0 ; i< 8 ;i++){
                    controles[i].addEventListener("click" , ()=>{
                    
                         featuresItems.style.transform = `translateX(-${i*(12.5)}%)`;
                    })
               }
          
            }else if (value ==0){    
               featuresItems.style.transform = `translateX(0)`;
               controles.forEach((e)=>{
                 e.classList.remove("active");
               })
               controles[0].classList.add("active");
            }
}
let controles = document.querySelectorAll(" .features .controles div");
let featuresItems = document.querySelector(" .features .items");
let resizing = false;
window.addEventListener("load" , ()=>{
     if (window.innerWidth >=768){
        
          for (let i = 0 ; i<8 ; i++){
               controles[i].style.display = "none";
          }
          for (let i = 0 ; i<2 ; i++){
               controles[i].style.display = "block";
          }
          smallScreen(0);
          bigScreen1();
          big();
     } else if (window.innerWidth <768){
       
          for (let i = 0 ; i<8 ; i++){
               controles[i].style.display = "block";
          }
          smallScreen(1);
          small();
     }
   
})

window.addEventListener("resize" , ()=>{
resizing = true;
     if (window.innerWidth >=768){
         
          for (let i = 0 ; i<8 ; i++){
               controles[i].style.display = "none";
          }
          for (let i = 0 ; i<2 ; i++){
               controles[i].style.display = "block";
          }
          smallScreen(0);
          bigScreen1();
          big();
     }
     else if (window.innerWidth <768){
          for (let i = 0 ; i<8 ; i++){
               controles[i].style.display = "block";
          }
          smallScreen(1);
          small();
     }
     featuresItems.style.transform = `translateX(0)`;
     controles.forEach((e)=>{
       e.classList.remove("active");
     })
     controles[0].classList.add("active");
})
featuresScroll();

/* starting counter section */
let containerSpans = document.querySelectorAll(".testi .counter .container article span");
let testiSection = document.querySelector(".testi");
let come = 0;
window.addEventListener("scroll" , ()=>{
 if (window.scrollY >=testiSection.offsetTop -600){
     come++;
     console.log("hello")
     if (come ===1){
          counting(15,0,0);
          counting(1280,1,1260);
          counting(10,2,0);
          counting(992,3,970);
     }
 }
})
function counting(n , i ,number){
     let k = number;
  let counterHandel=  setInterval(()=>{
         if (i==0)
          containerSpans[i].innerHTML = `${k}K`;
         else if (i==1)
         containerSpans[i].innerHTML = `${k}+`;
         else if (i==2)
         containerSpans[i].innerHTML = `${k}K`;
         else if (i==3)
         containerSpans[i].innerHTML = `${k}+`;
          k++;
          if (k > n){
               clearInterval(counterHandel);
           }
      },100)
      
}
// starting blog section 
let blogSection = document.querySelector(".blog");
let blogContainer = document.querySelector(".blog header + .container");
let blogHeader = document.querySelector(".blog header");
window.addEventListener("scroll" , ()=>{
     if (window.scrollY >= blogSection.offsetTop-250){
          blogContainer.style.transform = "translateX(0)";
          blogHeader.style.transform = "translateX(0)";
     }

})
// stasrting last section
let LastControles = document.querySelectorAll(".section .controles div");
let LastSlider = document.querySelector(".section .slider .items");
LastControles.forEach((e)=>{
e.addEventListener("click" , ()=>{
     LastControles.forEach((e)=>{
      e.classList.remove("active");
     })
     e.classList.add("active");
})
})
 function big(){
          LastControles[0].addEventListener("click" , ()=>{
               LastSlider.style.transform = "translateX(0)"
          })
          LastControles[1].addEventListener("click" , ()=>{
               LastSlider.style.transform = "translateX(-24%)"
          })
     
 }
 function small(){
     for (let i = 0 ; i< 4 ; i++){
         LastControles[i].addEventListener("click" , ()=>{
          LastSlider.style.transform = `translateX(-${i*25}%)`
         })
     }
 }
window.addEventListener("load" , ()=>{
     let dates = document.querySelectorAll("span.date");
     let date = new Date();
     let year = date.getFullYear();
     dates.forEach((e)=>{
         e.innerHTML = year;
     })
   
})
// starting button js
let toTop = document.getElementById("toTop");
window.addEventListener("scroll" , ()=>{
     if (window.scrollY >=100){
          toTop.style.display = "block";
          setTimeout(()=>{
          toTop.style.opacity ="1";
          },600)
  
     }else{
          toTop.style.opacity ="0";
          setTimeout(()=>{
               toTop.style.display ="none";
               },500)

     }
})
toTop.addEventListener("click" , ()=>{
     window.scrollTo(0,0);
})





