(() => {
  "use strict";
  const track = document.getElementById("cs-similar-track");
  if (!track) return;

  document.querySelectorAll(".cs-similar-control").forEach(button => {
    button.addEventListener("click", () => {
      const amount = Math.min(track.clientWidth * 0.85, 420);
      track.scrollBy({
        left: button.dataset.direction === "right" ? amount : -amount,
        behavior: "smooth"
      });
    });
  });
})();
