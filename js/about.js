/* =========================================================
   about.js — about.html only
   Reading progress bar + a live "current" badge on the
   work-history item that is still ongoing.
   ========================================================= */

function initReadingProgress(){
  const bar = document.createElement("div");
  bar.className = "reading-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function markCurrentRole(){
  document.querySelectorAll(".history-item").forEach((item) => {
    const period = item.querySelector(".tag");
    if (!period) return;
    const text = period.textContent.toLowerCase();
    if (text.includes("present") || text.includes("heden")){
      item.classList.add("is-current");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initReadingProgress();
  markCurrentRole();
});
