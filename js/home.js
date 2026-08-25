/* =========================================================
   home.js — index.html only
   Staggered hero-doodle entrance + a light parallax wiggle
   ========================================================= */

function initHeroDoodleEntrance(){
  const doodles = document.querySelectorAll(".hero-portrait .doodle");
  doodles.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px) scale(0.94)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0) scale(1)";
    }, 300 + i * 180);
  });
}

function initHeroParallax(){
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wrap = document.querySelector(".hero-portrait");
  if (!wrap || prefersReduced) return;

  const doodles = wrap.querySelectorAll(".doodle");

  wrap.addEventListener("pointermove", (e) => {
    const rect = wrap.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    doodles.forEach((el, i) => {
      const depth = (i + 1) * 4;
      el.style.transform = `translate(${relX * depth}px, ${relY * depth}px)`;
    });
  });

  wrap.addEventListener("pointerleave", () => {
    doodles.forEach((el) => { el.style.transform = "translate(0,0)"; });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroDoodleEntrance();
  initHeroParallax();
});
