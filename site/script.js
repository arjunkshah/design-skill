const navShell = document.querySelector(".nav-shell");
const reveals = document.querySelectorAll("[data-reveal]");
const parallaxStage = document.querySelector("[data-parallax]");

reveals.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 55, 360)}ms`;
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

reveals.forEach((node) => revealObserver.observe(node));

const syncHeader = () => {
  if (!navShell) return;
  navShell.classList.toggle("scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (parallaxStage && window.matchMedia("(min-width: 821px)").matches) {
  const layers = parallaxStage.querySelectorAll(".paper-stack, .stage-note");

  parallaxStage.addEventListener("pointermove", (event) => {
    const rect = parallaxStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer, index) => {
      const depth = (index + 1) * 10;
      layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0) rotate(${index % 2 === 0 ? -3 : 4}deg)`;
    });
  });

  parallaxStage.addEventListener("pointerleave", () => {
    const resets = [
      "rotate(6deg)",
      "rotate(-4deg)",
      "rotate(7deg)",
      "rotate(-5deg)",
    ];

    layers.forEach((layer, index) => {
      layer.style.transform = resets[index] || "none";
    });
  });
}
