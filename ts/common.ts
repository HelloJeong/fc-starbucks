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

const thisYear = document.querySelector(".this-year");
if (thisYear instanceof HTMLSpanElement) {
  thisYear.textContent = new Date().getFullYear().toString();
}
