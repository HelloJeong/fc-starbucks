import _ from "lodash";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { Power1 } from "gsap/all";
import ScrollMagic from "scrollmagic";

(function () {
  gsap.registerPlugin(ScrollToPlugin);

  const badgeEl = document.querySelector("header .badges");
  const toTopEl = document.querySelector("#to-top");
  if (badgeEl instanceof HTMLDivElement && toTopEl instanceof HTMLDivElement) {
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        // console.log(window.scrollY);
        if (window.scrollY > 500) {
          gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: "none",
          });
          gsap.to("#to-top", 0.2, {
            x: 0,
          });
        } else {
          gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: "block",
          });
          gsap.to("#to-top", 0.2, {
            x: 100,
          });
        }
      }, 300)
    );
    toTopEl.addEventListener("click", () => {
      gsap.to(window, 0.7, {
        scrollTo: 0,
      });
    });
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

  new Swiper(".awards .swiper-container", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,

    navigation: {
      prevEl: ".awards .swiper-prev",
      nextEl: ".awards .swiper-next",
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
  const random = (min: number, max: number): number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  const floatingObject = (selector: string, delay: number, y: number) => {
    // y : y???, yoyo: ????????? ?????????
    gsap.to(selector, random(1.5, 2.5), {
      y,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    });
  };
  floatingObject(".floating1", 1, 15);
  floatingObject(".floating2", 0.5, 15);
  floatingObject(".floating3", 1.5, 20);

  const spyEls = document.querySelectorAll("section.scroll-spy");
  spyEls.forEach((triggerElement) => {
    new ScrollMagic.Scene({
      triggerElement, // ????????? ????????? ????????? ??????
      triggerHook: 0.8, // viewport ??????:0, ??????:1. ????????? 0.8 ????????? ????????? ?????????
    })
      .setClassToggle(triggerElement, "show") // ?????? ??????????????? 'show' ????????? ????????????
      .addTo(new ScrollMagic.Controller());
  });
})();
