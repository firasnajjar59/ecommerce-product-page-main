import { caruselaMobile, imgsLinks } from "./components/mobilecarusela.component.js";
import * as counter from "./components/counter.component.js";
import * as func from "./function.js";
addEventListener("load", () => { func.checkScreenSizeAndDisply(); });
let hamburgerBtnOpen = document.getElementById("hamburgerBtnOpen");
if (hamburgerBtnOpen) {
    hamburgerBtnOpen.addEventListener('click', () => {
        func.toggleMenu('hamburgerBtnOpen');
    });
}
let hamburgerBtnClose = document.getElementById("hamburgerBtnClose");
if (hamburgerBtnClose) {
    hamburgerBtnClose.addEventListener('click', () => {
        func.toggleMenu('hamburgerBtnClose');
    });
}
let overlay = document.getElementById("overlay");
if (overlay) {
    overlay.addEventListener('click', () => {
        func.toggleMenu('overlay');
    });
}
counter.counter("counterVar");
let counterMinusBtn = document.getElementById("counterMinusBtn");
if (counterMinusBtn) {
    counterMinusBtn.addEventListener("click", () => {
        counter.toggleCount("countdown");
    });
}
let counterPlusBtn = document.getElementById("counterPlusBtn");
if (counterPlusBtn) {
    counterPlusBtn.addEventListener("click", () => {
        counter.toggleCount("countup");
    });
}
caruselaMobile("carouselBody", "navigationBigCarousel", imgsLinks);
let cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        func.toggleCart();
    });
}
addEventListener('resize', () => {
    func.checkScreenSizeAndDisply();
});
let addToCartBtn = document.getElementById("addToCartBtn");
if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
        func.addToCart();
    });
}
