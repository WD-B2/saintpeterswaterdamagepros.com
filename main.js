(function () {
  "use strict";
  var burger = document.getElementById("burger");
  var drawer = document.getElementById("drawer");
  var closeBtn = document.getElementById("drawer-close");
  if (!burger || !drawer) return;
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open && closeBtn) closeBtn.focus(); else burger.focus();
  }
  burger.addEventListener("click", function () { setOpen(true); });
  if (closeBtn) closeBtn.addEventListener("click", function () { setOpen(false); });
  drawer.addEventListener("click", function (e) { if (e.target === drawer) setOpen(false); });
  drawer.addEventListener("click", function (e) { if (e.target.tagName === "A") { drawer.classList.remove("open"); document.documentElement.style.overflow = ""; } });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) setOpen(false); });
  window.addEventListener("resize", function () { if (window.innerWidth > 768 && drawer.classList.contains("open")) setOpen(false); });
})();
