import _ from "lodash";
import gsap from "gsap";

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
        console.log(window.scrollY);
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
})();
