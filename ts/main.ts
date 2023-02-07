import {caruselaMobile,imgsLinks} from "./components/mobilecarusela.component.js";
import * as counter from "./components/counter.component.js"
import * as func from "./function.js";
//**************** function to check Screen Size And Disply *******************
addEventListener("load",()=>{func.checkScreenSizeAndDisply()})
// ******************* menu ******************************
// open button
let hamburgerBtnOpen=document.getElementById("hamburgerBtnOpen");
if(hamburgerBtnOpen){
    hamburgerBtnOpen.addEventListener('click',():void=>{
        func.toggleMenu('hamburgerBtnOpen');
    })
}
// close button
let hamburgerBtnClose=document.getElementById("hamburgerBtnClose");
if(hamburgerBtnClose){
    hamburgerBtnClose.addEventListener('click',():void=>{
        func.toggleMenu('hamburgerBtnClose');
    })
}

// close overlay button
let overlay=document.getElementById("overlay");
if(overlay){
    overlay.addEventListener('click',():void=>{
        func.toggleMenu('overlay');
    })
}
//****************** carusela display ***************************
counter.counter("counterVar");
let counterMinusBtn=document.getElementById("counterMinusBtn");
if(counterMinusBtn){
    counterMinusBtn.addEventListener("click",()=>{
        counter.toggleCount("countdown");
    })
}
let counterPlusBtn=document.getElementById("counterPlusBtn");
if(counterPlusBtn){
    counterPlusBtn.addEventListener("click",()=>{
        counter.toggleCount("countup");
    })
}
//****************** carusela display ***************************
caruselaMobile("carouselBody","navigationBigCarousel",imgsLinks); 


// ********************* cart btn *********************************
let cartBtn=document.getElementById('cartBtn');
if(cartBtn){
    cartBtn.addEventListener('click',():void=>{
        func.toggleCart();
    })

}
// *********************resize screen*************
addEventListener('resize',()=>{
    func.checkScreenSizeAndDisply()
})
// ********************** add to card *********************
let addToCartBtn=document.getElementById("addToCartBtn");
if(addToCartBtn){
    addToCartBtn.addEventListener("click",():void=>{
       func.addToCart(); 
    })
}