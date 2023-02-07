import { counterVar } from "./components/counter.component.js";
export const toggleMenu = (id) => {
    let overlay = document.querySelector(".overlay");
    let menu = document.querySelector(".menu");
    let cart = document.getElementById("cart");
    if (overlay && menu && cart) {
        switch (id) {
            case "hamburgerBtnOpen":
                overlay.classList.remove("hidden");
                menu.classList.remove("hidden");
                cart.classList.add("hidden");
                break;
            case "hamburgerBtnClose":
                overlay.classList.add("hidden");
                menu.classList.add("hidden");
                break;
            case "overlay":
                overlay.classList.add("hidden");
                menu.classList.add("hidden");
                break;
        }
    }
};
export const toggleCart = () => {
    let cart = document.getElementById("cart");
    if (cart) {
        cart.classList.toggle("hidden");
    }
};
export const checkScreenSizeAndDisply = () => {
    let menu = document.querySelector(".menu");
    let overlay = document.querySelector(".overlay");
    let navigationBigCarousel = document.querySelector(".navigation-big-carousel");
    if (window.innerWidth > 800) {
        if (menu && overlay && navigationBigCarousel) {
            overlay.classList.add("hidden");
            menu.classList.remove("hidden");
            navigationBigCarousel.classList.remove("hidden");
        }
    }
    else {
        if (menu && overlay && navigationBigCarousel) {
            overlay.classList.add("hidden");
            menu.classList.add("hidden");
            navigationBigCarousel.classList.add("hidden");
        }
    }
};
export const addToCart = () => {
    let productCart = document.querySelector(".product-cart");
    if (counterVar && productCart) {
        productCart.innerHTML = `
    <div>
      <img src="./assets/images/image-product-1-thumbnail.jpg" alt="">
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <p>$125 x ${counterVar} <span>$${125 * counterVar}</span></p>
      </div>
      <img id="deleteBtn" src="./assets/images/icon-delete.svg" alt="">
    </div>
      <button>checkout</button>
    `;
        let cart = document.getElementById("cart");
        if (cart) {
            cart.classList.remove("hidden");
        }
        return (() => {
            let deleteBtn = document.getElementById("deleteBtn");
            if (deleteBtn) {
                deleteBtn.addEventListener("click", () => {
                    let productCart = document.querySelector(".product-cart");
                    if (productCart) {
                        productCart.innerHTML = `
        <p class="emptyAlert">Your cart is empty</p>
        `;
                    }
                });
            }
        })();
    }
};
