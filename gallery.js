(() => {
  "use strict";

  const main = document.getElementById("cs-gallery-main");
  const thumbs = document.getElementById("cs-gallery-thumbs");
  const prev = document.getElementById("cs-gallery-prev");
  const next = document.getElementById("cs-gallery-next");
  const counter = document.getElementById("cs-gallery-counter");
  if (!main || !thumbs || !prev || !next) return;

  const images = [
    { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1800&q=85", alt: "BMW i5 front three-quarter view" },
    { src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1800&q=85", alt: "Luxury sedan exterior" },
    { src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1800&q=85", alt: "Performance car side view" },
    { src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=85", alt: "Modern performance car" },
    { src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1800&q=85", alt: "Premium car rear view" },
    { src: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=85", alt: "Sports car detail" }
  ];

  let index = 0;

  images.forEach((item, i) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.className = "cs-gallery-thumb" + (i === 0 ? " is-active" : "");
    img.setAttribute("role", "listitem");
    img.addEventListener("click", () => show(i));
    thumbs.appendChild(img);
  });

  function show(i) {
    index = (i + images.length) % images.length;
    main.style.opacity = "0.35";
    const nextImage = new Image();
    nextImage.onload = () => {
      main.src = nextImage.src;
      main.alt = images[index].alt;
      main.style.opacity = "1";
    };
    nextImage.src = images[index].src;

    [...thumbs.children].forEach((el, n) => el.classList.toggle("is-active", n === index));
    counter.textContent = `${index + 1} / ${images.length}`;
    thumbs.children[index]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));

//  let timer = window.setInterval(() => show(index + 1), 6000);

//  [prev, next, thumbs].forEach(el => {
//    el.addEventListener("mouseenter", () => window.clearInterval(timer));
//    el.addEventListener("mouseleave", () => timer = window.setInterval(() => show(index + 1), 6000));
//  });


})();
