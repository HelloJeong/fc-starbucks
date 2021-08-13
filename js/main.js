"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var gsap_1 = __importDefault(require("gsap"));
var bundle_1 = __importDefault(require("swiper/bundle"));
require("swiper/swiper-bundle.css");
var all_1 = require("gsap/all");
(function () {
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
    if (badgeEl instanceof HTMLDivElement) {
        window.addEventListener("scroll", lodash_1.default.throttle(function () {
            // console.log(window.scrollY);
            if (window.scrollY > 500) {
                gsap_1.default.to(badgeEl, 0.6, {
                    opacity: 0,
                    display: "none",
                });
            }
            else {
                gsap_1.default.to(badgeEl, 0.6, {
                    opacity: 1,
                    display: "block",
                });
            }
        }, 300));
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
})();
