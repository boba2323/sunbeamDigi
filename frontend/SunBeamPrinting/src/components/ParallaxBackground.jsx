import { useEffect, useRef } from "react";

/**
 * Site-wide parallax background with optional image.
 * Uses transform-based, GPU-accelerated layers for smooth scroll.
 */
export default function ParallaxBackground({
  imageUrl,
  intensity = 0.3,
  noise = true,
}) {
  const layerRef = useRef(null);

  useEffect(() => {
    let rafId = 0;
    const baseIntensity = Math.max(0, Math.min(1, intensity));

    const onScroll = () => {
      if (!layerRef.current) return;
      const y = window.scrollY || window.pageYOffset || 0;
      const translate = Math.round(y * baseIntensity);
      // Use will-change + translateZ(0) to hint GPU
      layerRef.current.style.transform = `translate3d(0, ${-translate}px, 0)`;
    };

    const onScrollRaf = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollRaf);
    };
  }, [intensity]);

  return (
    <div aria-hidden className="parallax-root">
      {/* Image/gradient layer */}
      <div
        ref={layerRef}
        className="parallax-layer parallax-image-layer"
        style={{
          backgroundImage: imageUrl
            ? `linear-gradient(var(--parallax-overlay), var(--parallax-overlay)), url(${imageUrl})`
            : undefined,
        }}
      />
      {/* Gradient fallback if no image */}
      {!imageUrl && <div className="parallax-layer parallax-gradient" />}
      {/* Optional noise texture */}
      {noise && <div className="parallax-layer parallax-noise" />}
    </div>
  );
}


