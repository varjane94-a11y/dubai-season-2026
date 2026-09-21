/* Dubai season site — two behaviours, both tied to something the person does. */

(function () {
  "use strict";

  /* ---- 1. The nav appears once the hero has scrolled past ---- */
  var nav = document.getElementById("nav");
  var hero = document.querySelector(".hero");

  if (nav && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("show", !entries[0].isIntersecting);
    }, { rootMargin: "-80px 0px 0px 0px" }).observe(hero);
  }

  /* ---- 2. The audience tabs ---- */
  var tablist = document.querySelector('[role="tablist"]');
  if (!tablist) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (tab) {
    return document.getElementById(tab.getAttribute("aria-controls"));
  });

  function select(index, moveFocus) {
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      if (panels[i]) panels[i].hidden = !on;
    });
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { select(i, false); });
  });

  // Left and right arrows walk the tabs, Home and End jump to the ends.
  tablist.addEventListener("keydown", function (event) {
    var current = tabs.indexOf(document.activeElement);
    if (current === -1) return;

    var next = null;
    if (event.key === "ArrowRight") next = (current + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;

    if (next !== null) {
      event.preventDefault();
      select(next, true);
    }
  });
})();
