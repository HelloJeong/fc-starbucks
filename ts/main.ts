import _ from "lodash";
import gsap from "gsap";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

(function () {
  const searchEl = document.querySelector(".search");
  if (searchEl instanceof HTMLDivElement) {
    const searchInputEl = searchEl.querySelector("input");
    if (searchInputEl instanceof HTMLInputElement) {
      searchEl.addEventListener("click", () => {
        searchInputEl.focus();
      });

      searchInputEl.addEventListener("focus", () => {
        searchEl.classList.add("focused");
        searchInputEl.setAttribute("placeholder", "통합검색");
      });

      searchInputEl.addEventListener("blur", () => {
        searchEl.classList.remove("focused");
        searchInputEl.setAttribute("placeholder", "");
      });
    }
  }

  const badgeEl = document.querySelector("header .badges");
  if (badgeEl instanceof HTMLDivElement) {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        // console.log(window.scrollY);
        if (window.scrollY > 500) {
          gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none",
          });
        } else {
          gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block",
          });
        }
      }, 300)
    );
  }

  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((fadeEl, idx) => {
    gsap.to(fadeEl, 1, {
      delay: (idx + 1) * 0.7,
      opacity: 1,
    });
  });

  new Swiper(".notice-line .swiper-container", {
    direction: "vertical",
    autoplay: true,
    loop: true,
  });

  new Swiper(".promotion .swiper-container", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".promotion .swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".promotion .swiper-prev",
      nextEl: ".promotion .swiper-next",
    },
  });

  const promotionEl = document.querySelector(".promotion");
  const promotionToggleBtn = document.querySelector(".toggle-promotion");
  let isHidePromotion = false;

  if (promotionEl instanceof HTMLDivElement && promotionToggleBtn instanceof HTMLDivElement) {
    promotionToggleBtn.addEventListener("click", () => {
      isHidePromotion = !isHidePromotion;
      if (isHidePromotion) {
        promotionEl.classList.add("hide");
      } else {
        promotionEl.classList.remove("hide");
      }
    });
  }
})();
