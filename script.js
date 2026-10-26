(function () {
  document.getElementById("yr").textContent = new Date().getFullYear();

  /* ---------- Category tabs ---------- */
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const cards = Array.from(document.querySelectorAll("#projectGrid .card"));

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const f = tab.dataset.filter;
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      cards.forEach((c) => {
        c.hidden = !(f === "all" || c.dataset.cat === f);
      });
    });
  });

  /* ---------- Gallery slider ---------- */
  const track = document.getElementById("track");
  const dotsWrap = document.getElementById("dots");
  const prev = document.querySelector(".arrow.prev");
  const next = document.querySelector(".arrow.next");
  const slides = Array.from(track.querySelectorAll(".slide"));

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Go to slide " + (i + 1));
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
  });

  function currentIndex() {
    const w = slides[0].offsetWidth + 16;
    return Math.round(track.scrollLeft / w);
  }

  function goTo(i) {
    const clamped = Math.max(0, Math.min(i, slides.length - 1));
    slides[clamped].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function updateDots() {
    const i = currentIndex();
    Array.from(dotsWrap.children).forEach((d, j) => d.classList.toggle("active", j === i));
  }

  prev.addEventListener("click", () => goTo(currentIndex() - 1));
  next.addEventListener("click", () => goTo(currentIndex() + 1));
  track.addEventListener("scroll", () => requestAnimationFrame(updateDots), { passive: true });
  updateDots();
})();
