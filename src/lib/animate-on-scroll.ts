/**
 * Initializes scroll-triggered animations for all elements
 * with the specified CSS selector. Uses IntersectionObserver
 * to add the `is-visible` class when elements enter the viewport.
 *
 * @param selector - CSS selector for elements to observe (default: '.animate-on-scroll')
 */
export function initAnimateOnScroll(selector = ".animate-on-scroll"): void {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

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
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}
