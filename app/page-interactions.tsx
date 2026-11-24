"use client";

import { useEffect, type ReactNode } from "react";

export default function PageInteractions({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  useEffect(() => {
    const root = document.getElementById("page-content");
    if (!root) return;

    const formsToPrevent = root.querySelectorAll<HTMLFormElement>(
      "form:not([data-mailto-form])",
    );

    const preventFormSubmit = (event: SubmitEvent) => event.preventDefault();
    formsToPrevent.forEach((form) =>
      form.addEventListener("submit", preventFormSubmit),
    );

    const revealTargets = root.querySelectorAll<HTMLElement>(
      ":scope > section:not(:first-of-type) > .max-w-7xl, :scope > footer > .max-w-7xl",
    );
    revealTargets.forEach((target) => target.classList.add("scroll-reveal"));

    let framePending = false;
    const revealVisibleTargets = () => {
      revealTargets.forEach((target) => {
        const bounds = target.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.9 && bounds.bottom > 0) {
          target.classList.add("is-visible");
        }
      });
      framePending = false;
    };
    const scheduleReveal = () => {
      if (framePending) return;
      framePending = true;
      window.requestAnimationFrame(revealVisibleTargets);
    };
    revealVisibleTargets();
    window.addEventListener("scroll", scheduleReveal, { passive: true });
    window.addEventListener("resize", scheduleReveal);

    const counters = root.querySelectorAll<HTMLElement>(".counter-number");
    let countersStarted = false;
    const startCounting = () => {
      if (countersStarted) return;
      countersStarted = true;
      counters.forEach((counter) => {
        const target = Number.parseInt(counter.dataset.target ?? "", 10);
        const startTime = performance.now();
        const updateCount = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / 1800, 1);
          counter.textContent = String(
            progress < 1
              ? Math.floor((1 - Math.pow(1 - progress, 3)) * target)
              : target,
          );
          if (progress < 1) window.requestAnimationFrame(updateCount);
        };
        window.requestAnimationFrame(updateCount);
      });
    };

    const counterObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries, observer) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                startCounting();
                observer.disconnect();
              }
            },
            { threshold: 0.15 },
          )
        : null;
    const counterSection = counters[0]?.closest("section");
    if (counterSection && counterObserver) {
      counterObserver.observe(counterSection);
    } else {
      startCounting();
    }

    return () => {
      formsToPrevent.forEach((form) =>
        form.removeEventListener("submit", preventFormSubmit),
      );
      window.removeEventListener("scroll", scheduleReveal);
      window.removeEventListener("resize", scheduleReveal);
      counterObserver?.disconnect();
    };
  }, []);

  return children;
}
