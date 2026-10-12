"use client";

import {
  Children,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

type CarouselProps = {
  label: string;
  children: ReactNode;
  controls?: "bottom" | "side";
  tone?: "light" | "dark";
  className?: string;
  trackClassName?: string;
  slideClassName?: string;
};

export function Carousel({
  label,
  children,
  controls = "bottom",
  tone = "light",
  className = "",
  trackClassName = "",
  slideClassName = "",
}: CarouselProps) {
  const slides = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const baseId = useId();

  const stepSize = useCallback(() => {
    const track = trackRef.current;
    const slide = track?.querySelector<HTMLElement>("[data-slide]");
    if (!track || !slide) return track?.clientWidth ?? 1;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return slide.offsetWidth + gap;
  }, []);

  const stopsFor = useCallback(
    (maxScroll: number) => {
      const step = stepSize();
      const stops = [0];
      if (maxScroll <= 2 || step <= 0) return stops;

      let offset = 0;
      while (maxScroll - offset > 24) {
        const next = Math.min(offset + step, maxScroll);
        if (next <= offset) break;
        stops.push(next);
        offset = next;
      }

      return stops;
    },
    [stepSize],
  );

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const stops = stopsFor(track.scrollWidth - track.clientWidth);
    let index = 0;
    stops.forEach((stop, stopIndex) => {
      if (Math.abs(track.scrollLeft - stop) < Math.abs(track.scrollLeft - stops[index])) {
        index = stopIndex;
      }
    });
    setPageCount(stops.length);
    setActive(index);
  }, [stopsFor]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => setReducedMotion(media.matches);
    onMotion();
    media.addEventListener("change", onMotion);
    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(track);
    track.addEventListener("scroll", sync, { passive: true });

    return () => {
      media.removeEventListener("change", onMotion);
      observer.disconnect();
      track.removeEventListener("scroll", sync);
    };
  }, [sync, slides.length]);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const stops = stopsFor(maxScroll);
      const next = Math.min(stops.length - 1, Math.max(0, index));
      track.scrollTo({
        left: stops[next] ?? 0,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion, stopsFor],
  );

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };
    track.setPointerCapture(event.pointerId);
    track.classList.add("is-dragging");
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!drag.current.active || !track) return;
    const delta = event.clientX - drag.current.startX;
    if (Math.abs(delta) > 6) drag.current.moved = true;
    track.scrollLeft = drag.current.scrollLeft - delta;
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    drag.current.active = false;
    track?.classList.remove("is-dragging");
    if (track?.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  }

  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!drag.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    drag.current.moved = false;
  }

  const dotStyle =
    tone === "dark"
      ? { on: "bg-black", off: "border border-black bg-transparent opacity-40" }
      : { on: "bg-white", off: "border border-white bg-transparent opacity-50" };
  const arrowStyle =
    tone === "dark"
      ? "border-black/30 text-black hover:bg-black/5"
      : "border-white/70 text-white hover:bg-white/10";

  const controlsNode = (
    <div className="flex w-full items-center justify-between gap-6 pr-5 sm:pr-8 lg:pr-16">
      <div className="flex items-center gap-1.5" role="tablist" aria-label={`Páginas de ${label}`}>
        {Array.from({ length: pageCount }, (_, index) => {
          const selected = index === active;
          return (
            <button
              key={`${baseId}-dot-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-slide-${index}`}
              aria-label={`Ir para o item ${index + 1} de ${pageCount}`}
              className={`size-3.5 rounded-[4px] ${selected ? dotStyle.on : dotStyle.off}`}
              onClick={() => goTo(index)}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={`inline-flex size-9 items-center justify-center rounded-full border text-lg leading-none disabled:opacity-40 ${arrowStyle}`}
          aria-label="Anterior"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          <span aria-hidden>‹</span>
        </button>
        <button
          type="button"
          className={`inline-flex size-9 items-center justify-center rounded-full border text-lg leading-none disabled:opacity-40 ${arrowStyle}`}
          aria-label="Próximo"
          disabled={active >= pageCount - 1}
          onClick={() => goTo(active + 1)}
        >
          <span aria-hidden>›</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className={className}>
      <div
        className={
          controls === "side"
            ? "flex flex-col gap-4 lg:flex-row lg:items-center"
            : "flex flex-col gap-6"
        }
      >
        <div
          ref={trackRef}
          className={`carousel-track no-scrollbar flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto ${trackClassName}`}
          tabIndex={0}
          role="region"
          aria-roledescription="carrossel"
          aria-label={label}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          {slides.map((slide, index) => (
            <div
              key={`${baseId}-slide-${index}`}
              id={`${baseId}-slide-${index}`}
              data-slide
              className={`shrink-0 snap-start ${slideClassName}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
        {controlsNode}
      </div>
      <p className="sr-only" aria-live="polite">
        Item {active + 1} de {pageCount} em {label}
      </p>
    </div>
  );
}
