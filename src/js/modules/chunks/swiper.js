import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const slidersArr = document.querySelectorAll(".swiper");
const paginationArr = document.querySelectorAll(".swiper-pagination");

slidersArr.forEach((slider, index) => {
   let sliderLength = slider.children[0].children.length;
   let result = sliderLength > 1 ? [index] : false;

   const swiper = new Swiper(slider, {
      grabCursor: true,
      loop: result,
      speed: 500,
      spaceBetween: 15,
      slidesPerView: 1,
      autoHeight: true,

      pagination: {
         el: paginationArr[index],
         clickable: true,
      },
   });
});
