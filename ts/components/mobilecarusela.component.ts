// pictures arr
export let imgsLinks: string[] = [
  "./assets/images/image-product-1.jpg",
  "./assets/images/image-product-2.jpg",
  "./assets/images/image-product-3.jpg",
  "./assets/images/image-product-4.jpg",
];
// commponent carusel and all his functions
export const caruselaMobile: Function = (
  id: string,
  id2: string,
  picArr: string[]
  ) => {
    let active: number = 0;
  const displayCarousel=():void=>{
    // catch the div where will display the carousel
  let caruselaLocation = document.getElementById(id);
  let navigationBigCarousel = document.getElementById(id2);
// null check
  if (caruselaLocation && navigationBigCarousel) {
    // build the buttons to navigate the carousel
    caruselaLocation.innerHTML = `
        <div id="previousPicture" class="previous">
            <img src="./assets/images/icon-previous.svg" alt="" />
          </div>
          <div id="nextPicture" class="next">
            <img src="./assets/images/icon-next.svg" alt="" />
          </div>
        `;
    // loop for build the carousel 
    for (let [i, pic] of picArr.entries()){
      caruselaLocation.innerHTML += `
        <div id="pic${i}" class="img-wrapper hidden">
        <img src="${pic}" alt="" />
      </div>
        `;}
      // build the thumbnail imgs section
      navigationBigCarousel.innerHTML = `
        <img id="img-nav-carousel-1" src="./assets/images/image-product-1-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-2" src="./assets/images/image-product-2-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-3" src="./assets/images/image-product-3-thumbnail.jpg" alt="">
        <img id="img-nav-carousel-4" src="./assets/images/image-product-4-thumbnail.jpg" alt="">
      `
      // add active class to active thumbnail imgs
      document.getElementById(`img-nav-carousel-${(active+1)+""}`)?.classList.add("active")
  }
  // display the active img
  let caruselaPicActive = document.getElementById(`pic${active + ""}`);
  if (caruselaPicActive) { //null check
    caruselaPicActive.classList.remove("hidden");
  }
  // loop to add addeventlisener for thumbnail imgs
  for(let i=0;i<picArr.length;i++){ 
    document.getElementById(`img-nav-carousel-${(i+1)+""}`)?.addEventListener("click",()=>{
      togglePicNav(i);
    })
  }
// ********************* previous button *********************************
let previousBtn=document.getElementById('previousPicture');
if(previousBtn){
    previousBtn.addEventListener('click',():void=>{
        togglePic('previousPicture')
    })
    
}
// ****************** next button ******************************
let nextBtn=document.getElementById('nextPicture');
if(nextBtn){
    nextBtn.addEventListener('click',():void=>{
        togglePic('nextPicture')
    })
}
  }
  // call the function
  displayCarousel();
  // function for arrow to change img display
  const togglePic:Function = (id: string): void => {
    let arrLength: number = picArr.length;
    switch (id) {
      case "nextPicture":
        active + 1 < arrLength ? active++ :active = 0;
        displayCarousel();
        break;
      case "previousPicture":
          
        active - 1 >= 0?active--:active = arrLength - 1;
        displayCarousel()
        
        break;
    }
  };
  // function for change img display with thumbnail imgs
  const togglePicNav: Function = (number:number) => {
    active=number;
    displayCarousel();
    
  };
};




