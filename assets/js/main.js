(function () {
  "use strict";

  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function applySystemTheme(event) {
    document.documentElement.toggleAttribute("data-theme", event.matches);
  }

  function reserveFooterSpace() {
    var footer = document.querySelector(".page__footer");
    if (footer) {
      document.body.style.marginBottom = footer.offsetHeight + "px";
    }
  }

  function initializeAuthorLinks() {
    var button = document.querySelector(".author__urls-wrapper button");
    var links = document.querySelector(".author__urls");
    if (!button || !links) return;

    button.addEventListener("click", function () {
      var opening = window.getComputedStyle(links).display === "none";
      links.style.display = opening ? "block" : "none";
      button.classList.toggle("open", opening);
      button.setAttribute("aria-expanded", String(opening));
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 925) {
        links.style.removeProperty("display");
        button.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      }
    });
  }

  applySystemTheme(systemTheme);
  systemTheme.addEventListener("change", applySystemTheme);

  document.addEventListener("DOMContentLoaded", function () {
    initializeAuthorLinks();
    reserveFooterSpace();
  });
  window.addEventListener("resize", reserveFooterSpace);
}());
