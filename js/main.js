"use strict";
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
})();
