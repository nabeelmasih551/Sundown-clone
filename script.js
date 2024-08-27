const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
}); 
// var data_image=document.querySelector(".element1").getAttribute("data-image");
var fixed_image=document.querySelector(".fixed-image");
var elem=document.querySelectorAll(".element");
elem.forEach(function(e){
    console.log(e);
   e.addEventListener("mouseenter",function(){
    fixed_image.style.display="block";
    var image=e.getAttribute("data-image");
    fixed_image.style.backgroundImage=`url("${image}")`;

    
   
   })
   e.addEventListener("mouseleave",function(){
    fixed_image.style.display="none";
   })
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 7,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var nav=document.querySelector("nav");
var menu=document.querySelector(".menu");
var bar=document.querySelector(".bar");
var image=document.querySelector("nav_image_container");
var count=0;
menu.addEventListener("click", function(){
    if(count==0){
        bar.style.top="0";
        count=1;
    }
    else{
        count=1;
        bar.style.top="-100%";
        count=0;
    }  
})
// elem.forEach(function())
var heading1=document.querySelector("#design");
var heading2=document.querySelector("#project");
var heading3=document.querySelector("#exe");
var page4_image_src=document.querySelector(".page4_image").getAttribute("src");

heading2.addEventListener("click",function(){
    heading1.style.color="#dad7d7"
    heading1.style.borderLeft="0.3vw solid #dad7d7";
    heading3.style.color="#dad7d7"
    heading3.style.borderLeft="0.3vw solid #dad7d7";


    
    heading2.style.color="white";
    heading2.style.borderLeft="0.3vw solid rgb(238, 5, 5)";

    var img=heading2.getAttribute("data-image");
    var page4_image=document.querySelector(".page4_image");
     var size=page4_image.style.backgroundImage=`url(${img}`;
     size.style.height="100%"; 
     size.style.width="100%";
     size.style.borderRadius="3vw";


    
    
    })
    heading3.addEventListener("click",function(){
        heading1.style.color="#dad7d7"
        heading1.style.borderLeft="0.3vw solid #dad7d7";
        heading2.style.color="#dad7d7"
        heading2.style.borderLeft="0.3vw solid #dad7d7";
        
        heading3.style.color="white";
        heading3.style.borderLeft="0.3vw solid rgb(238, 5, 5)";


        var img=heading3.getAttribute("data-image");
    var page4_image=document.querySelector(".page4_image");
     var size=page4_image.style.backgroundImage=`url(${img}`;
     size.style.height="100%"; 
     size.style.width="100%";
     size.style.borderRadius="3vw";
        })
        heading1.addEventListener("click",function(){
            heading2.style.color="#dad7d7"
            heading2.style.borderLeft="0.3vw solid #dad7d7";
            heading3.style.color="#dad7d7"
            heading3.style.borderLeft="0.3vw solid #dad7d7";
            
            heading1.style.color="white";
            heading1.style.borderLeft="0.3vw solid rgb(238, 5, 5)";
            var img=heading1.getAttribute("data-image");
            var page4_image=document.querySelector(".page4_image");
             var size=page4_image.style.backgroundImage=`url(${img}`;
             size.style.height="100%"; 
             size.style.width="100%";
             size.style.borderRadius="3vw";

            })
function defualtImage(){
    var img=heading1.getAttribute("data-image");
    var page4_image=document.querySelector(".page4_image");
     var size=page4_image.style.backgroundImage=`url(${img}`;
     size.style.height="100%"; 
     size.style.width="100%";
     size.style.borderRadius="3vw";
     
}
defualtImage();