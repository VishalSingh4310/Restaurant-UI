let carouselImg=document.querySelectorAll(".carousel-item img");
let leftli=document.querySelectorAll(" .top-head-menu li");
let leftTop=document.querySelectorAll(".top-a");
let rightHead=document.querySelectorAll(".carousel-caption h5");
let rightPara=document.querySelectorAll(".carousel-caption p");
let Right = document.querySelector(".right");

// $(document).ready(function() {
  
//     var scrollLink = $('.scroll');
    
//     scrollLink.click((e)=>{
//     e.preventDefault();
//         console.log("clicked")
//         $('body,html').animate({
//             scrollTop:$(this.hash).offset().top
            
//         },800,()=>{
//             window.location.hash = hash;
//         })
//     })
    
// })

var t1= new TimelineMax();


t1
.fromTo(carouselImg,1.5,{x:"100%",opacity:1},{x:"0%",opacity:1,ease:Power1.easeInOut})
.fromTo(rightHead,1,{y:-20,opacity:0},{y:0,opacity:1,ease:Power1.easeInOut})
.fromTo(rightPara,0.7,{y:-20,opacity:0},{y:0,opacity:1,ease:Power1.easeInOut},"-=0.5")
.fromTo(leftTop,1,{height:"0vh",opacity:0},{height:"82vh",opacity:1,ease: Power1.easeInOut})
.staggerFromTo(leftli, 0.5, {y:15,opacity:0}, {y:0,opacity:1,ease:Power1.easeInOut},0.3)
.to(carouselImg,4,{scale:0.8,ease:Power1.easeInOut});
        
function scrollAppear(){
    var menuBox=document.querySelector(".menu-top");
    var position=menuBox.getBoundingClientRect().top;
    var screenPos=window.innerHeight;

    if(position < screenPos){

        var t2= new TimelineMax();
        t2.fromTo(menuBox,1,{y:20,opacity:0},{y:0,opacity:1})
        
    }
}
// Right.addEventListener('scroll',scrollAppear);
    Right.addEventListener("scroll", scrollAppear);