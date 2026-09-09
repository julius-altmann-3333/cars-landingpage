(() => {
  "use strict";
  const menu = document.getElementById("cs-main-menu");
  if (!menu || typeof bootstrap === "undefined") return;

  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", () => {
      const instance = bootstrap.Collapse.getInstance(menu);
      if (instance && window.innerWidth < 992) instance.hide();
    });
  });
})();
