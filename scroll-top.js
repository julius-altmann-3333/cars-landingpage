(() => {
  "use strict";
  const button = document.getElementById("cs-scroll-top");
  if (!button) return;

  const update = () => button.classList.toggle("is-visible", window.scrollY > 500);
  window.addEventListener("scroll", update, { passive: true });
  update();

  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
