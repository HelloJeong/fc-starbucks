"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var gsap_1 = __importDefault(require("gsap"));
var ScrollToPlugin_1 = __importDefault(require("gsap/ScrollToPlugin"));
var bundle_1 = __importDefault(require("swiper/bundle"));
require("swiper/swiper-bundle.css");
var all_1 = require("gsap/all");
var scrollmagic_1 = __importDefault(require("scrollmagic"));
(function () {
    gsap_1.default.registerPlugin(ScrollToPlugin_1.default);
    var searchEl = document.querySelector(".search");
    if (searchEl instanceof HTMLDivElement) {
        var searchInputEl_1 = searchEl.querySelector("input");
        if (searchInputEl_1 instanceof HTMLInputElement) {
            searchEl.addEventListener("click", function () {
                searchInputEl_1.focus();
            });
            searchInputEl_1.addEventListener("focus", function () {
                searchEl.classList.add("focused");
                searchInputEl_1.setAttribute("placeholder", "통합검색");
            });
            searchInputEl_1.addEventListener("blur", function () {
                searchEl.classList.remove("focused");
                searchInputEl_1.setAttribute("placeholder", "");
            });
        }
    }
    var badgeEl = document.querySelector("header .badges");
    var toTopEl = document.querySelector("#to-top");
    if (badgeEl instanceof HTMLDivElement && toTopEl instanceof HTMLDivElement) {
        window.addEventListener("scroll", lodash_1.default.throttle(function () {
            // console.log(window.scrollY);
            if (window.scrollY > 500) {
                gsap_1.default.to(badgeEl, 0.6, {
                    opacity: 0,
                    display: "none",
                });
                gsap_1.default.to("#to-top", 0.2, {
                    x: 0,
                });
            }
            else {
                gsap_1.default.to(badgeEl, 0.6, {
                    opacity: 1,
                    display: "block",
                });
                gsap_1.default.to("#to-top", 0.2, {
                    x: 100,
                });
            }
        }, 300));
        toTopEl.addEventListener("click", function () {
            gsap_1.default.to(window, 0.7, {
                scrollTo: 0,
            });
        });
    }
    var fadeEls = document.querySelectorAll(".fade-in");
    fadeEls.forEach(function (fadeEl, idx) {
        gsap_1.default.to(fadeEl, 1, {
            delay: (idx + 1) * 0.7,
            opacity: 1,
        });
    });
    new bundle_1.default(".notice-line .swiper-container", {
        direction: "vertical",
        autoplay: true,
        loop: true,
    });
    new bundle_1.default(".promotion .swiper-container", {
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
    new bundle_1.default(".awards .swiper-container", {
        autoplay: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 5,
        navigation: {
            prevEl: ".awards .swiper-prev",
            nextEl: ".awards .swiper-next",
        },
    });
    var promotionEl = document.querySelector(".promotion");
    var promotionToggleBtn = document.querySelector(".toggle-promotion");
    var isHidePromotion = false;
    if (promotionEl instanceof HTMLDivElement && promotionToggleBtn instanceof HTMLDivElement) {
        promotionToggleBtn.addEventListener("click", function () {
            isHidePromotion = !isHidePromotion;
            if (isHidePromotion) {
                promotionEl.classList.add("hide");
            }
            else {
                promotionEl.classList.remove("hide");
            }
        });
    }
    var random = function (min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
    };
    var floatingObject = function (selector, delay, y) {
        // y : y축, yoyo: 끝나면 역재생
        gsap_1.default.to(selector, random(1.5, 2.5), {
            y: y,
            repeat: -1,
            yoyo: true,
            ease: all_1.Power1.easeInOut,
            delay: random(0, delay),
        });
    };
    floatingObject(".floating1", 1, 15);
    floatingObject(".floating2", 0.5, 15);
    floatingObject(".floating3", 1.5, 20);
    var spyEls = document.querySelectorAll("section.scroll-spy");
    spyEls.forEach(function (triggerElement) {
        new scrollmagic_1.default.Scene({
            triggerElement: triggerElement,
            triggerHook: 0.8, // viewport 상단:0, 하단:1. 요소가 0.8 위치에 걸리면 트리거
        })
            .setClassToggle(triggerElement, "show") // 훅을 지나게되면 'show' 클래스 추가해줌
            .addTo(new scrollmagic_1.default.Controller());
    });
    var thisYear = document.querySelector(".this-year");
    if (thisYear instanceof HTMLSpanElement) {
        thisYear.textContent = new Date().getFullYear().toString();
    }
})();
