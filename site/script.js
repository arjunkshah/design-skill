const navShell = document.querySelector(".nav-shell");
const revealNodes = document.querySelectorAll("[data-reveal]");
const storySteps = document.querySelectorAll("[data-story-step]");
const storyCards = document.querySelectorAll("[data-story-card]");

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
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
    threshold: 0.16,
    rootMargin: "0px 0px -10% 0px",
  }
);

revealNodes.forEach((node) => revealObserver.observe(node));

if (storySteps.length && storyCards.length) {
  const setActiveStory = (id) => {
    storyCards.forEach((card) => {
      card.classList.toggle("is-active", card.dataset.storyCard === id);
    });
  };

  const storyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStory(entry.target.dataset.storyStep);
        }
      });
    },
    {
      threshold: 0.55,
    }
  );

  storySteps.forEach((step) => storyObserver.observe(step));
}

const syncHeader = () => {
  if (!navShell) return;
  navShell.classList.toggle("scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
