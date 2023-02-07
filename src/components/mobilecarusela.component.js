export let imgsLinks = [
    "./assets/images/image-product-1.jpg",
    "./assets/images/image-product-2.jpg",
    "./assets/images/image-product-3.jpg",
    "./assets/images/image-product-4.jpg",
];
export const caruselaMobile = (id, id2, picArr) => {
    let active = 0;
    const displayCarousel = () => {
        var _a, _b;
        let caruselaLocation = document.getElementById(id);
        let navigationBigCarousel = document.getElementById(id2);
        if (caruselaLocation && navigationBigCarousel) {
            caruselaLocation.innerHTML = `
        <div id="previousPicture" class="previous">
            <img src="./assets/images/icon-previous.svg" alt="" />
          </div>
          <div id="nextPicture" class="next">
            <img src="./assets/images/icon-next.svg" alt="" />
          </div>
        `;
            for (let [i, pic] of picArr.entries()) {
                caruselaLocation.innerHTML += `
        <div id="pic${i}" class="img-wrapper hidden">
        <img src="${pic}" alt="" />
      </div>
        `;
            }
            navigationBigCarousel.innerHTML = `
        <img id="img-nav-carousel-1" src="./assets/images/image-product-1-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-2" src="./assets/images/image-product-2-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-3" src="./assets/images/image-product-3-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-4" src="./assets/images/image-product-4-thumbnail.jpg" alt="">
      `;
            (_a = document.getElementById(`img-nav-carousel-${(active + 1) + ""}`)) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        }
        let caruselaPicActive = document.getElementById(`pic${active + ""}`);
        if (caruselaPicActive) {
            caruselaPicActive.classList.remove("hidden");
        }
        for (let i = 0; i < picArr.length; i++) {
            (_b = document.getElementById(`img-nav-carousel-${(i + 1) + ""}`)) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
                togglePicNav(i);
            });
        }
        let previousBtn = document.getElementById('previousPicture');
        if (previousBtn) {
            previousBtn.addEventListener('click', () => {
                togglePic('previousPicture');
            });
        }
        let nextBtn = document.getElementById('nextPicture');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                togglePic('nextPicture');
            });
        }
    };
    displayCarousel();
    const togglePic = (id) => {
        let arrLength = picArr.length;
        switch (id) {
            case "nextPicture":
                active + 1 < arrLength ? active++ : active = 0;
                displayCarousel();
                break;
            case "previousPicture":
                active - 1 >= 0 ? active-- : active = arrLength - 1;
                displayCarousel();
                break;
        }
    };
    const togglePicNav = (number) => {
        active = number;
        displayCarousel();
    };
};
