/**
 * Initializes lazy loading for iframes and videos.
 * Elements use `data-src` instead of `src`. The real URL
 * is swapped in only when the element approaches the viewport.
 *
 * Supports:
 * - iframe:  swaps `data-src` → `src` + removes the loader overlay
 * - video:   swaps `data-src` → `src` on the <source> or video element
 *
 * @param selector - CSS selector for lazy-loadable elements (default: '.lazy-load')
 */
export function initLazyLoad(selector = ".lazy-load"): void {
  if (typeof window === "undefined") return;

  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        if (el instanceof HTMLIFrameElement) {
          const src = el.getAttribute("data-src");
          if (src) {
            el.src = src;
            el.removeAttribute("data-src");
          }
        } else if (el instanceof HTMLVideoElement) {
          const src = el.getAttribute("data-src");
          if (src) {
            el.src = src;
            el.removeAttribute("data-src");
            el.load();
          }
          // Also handle nested <source> elements
          const source = el.querySelector("source[data-src]");
          if (source) {
            source.src = source.getAttribute("data-src") ?? "";
            source.removeAttribute("data-src");
            el.load();
          }
        }

        observer.unobserve(el);
      });
    },
    {
      threshold: 0,
      rootMargin: "200px 0px 200px 0px",
    }
  );

  elements.forEach((el) => observer.observe(el));
}
