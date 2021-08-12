"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
var gsap_1 = __importDefault(require("gsap"));
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
            console.log(window.scrollY);
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
})();
var fadeEls = document.querySelectorAll(".fade-in");
fadeEls.forEach(function (fadeEl, idx) {
    gsap_1.default.to(fadeEl, 1, {
        delay: (idx + 1) * 0.7,
        opacity: 1,
    });
});
