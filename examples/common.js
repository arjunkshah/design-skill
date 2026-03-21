const revealGroups = [
  ".hero-copy > *",
  ".hero-meta article",
  ".market-strip span",
  ".section-head > *",
  ".card",
  ".plan",
  ".quote-card",
  ".timeline article",
  ".panel",
  ".shot",
  ".table-card",
  ".spec-card",
  ".quote-block > *",
  ".footer-cta > *",
  ".gallery article"
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px"
  }
);

revealGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((node, index) => {
    node.classList.add("reveal");
    node.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
    observer.observe(node);
  });
});

document.querySelectorAll(".stage").forEach((stage) => {
  const layers = stage.querySelectorAll(".frame");
  if (!layers.length) {
    return;
  }

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    layers.forEach((layer, index) => {
      const depth = (index + 1) * 10;
      layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  });

  stage.addEventListener("pointerleave", () => {
    layers.forEach((layer) => {
      layer.style.transform = "";
    });
  });
});
