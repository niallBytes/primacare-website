import * as React from "react";

/** True only on devices with a real pointer and no reduced-motion preference. */
export function usePointerMotionEnabled() {
  const [enabled, setEnabled] = React.useState(false);
  React.useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);
  return enabled;
}

/**
 * Tracks the pointer once for the whole page and publishes smoothed values as
 * CSS custom properties on <html>:
 *   --pointer-x / --pointer-y : -1..1 normalised, eased
 *   --cursor-x  / --cursor-y  : px position of the ambient glow
 * Also renders the ambient light glow. No React re-renders on mousemove.
 */
export function CursorAmbience() {
  const enabled = usePointerMotionEnabled();

  React.useEffect(() => {
    const root = document.documentElement;
    if (!enabled) {
      root.style.setProperty("--pointer-x", "0");
      root.style.setProperty("--pointer-y", "0");
      root.style.setProperty("--cursor-opacity", "0");
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let targetPX = window.innerWidth / 2;
    let targetPY = window.innerHeight / 2;
    let curPX = targetPX;
    let curPY = targetPY;
    let raf = 0;
    let idle = 0;

    const onMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
      targetPX = e.clientX;
      targetPY = e.clientY;
      idle = 0;
      root.style.setProperty("--cursor-opacity", "1");
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      const e1 = 0.06;
      const e2 = 0.12;
      curX += (targetX - curX) * e1;
      curY += (targetY - curY) * e1;
      curPX += (targetPX - curPX) * e2;
      curPY += (targetPY - curPY) * e2;

      root.style.setProperty("--pointer-x", curX.toFixed(4));
      root.style.setProperty("--pointer-y", curY.toFixed(4));
      root.style.setProperty("--cursor-x", `${curPX.toFixed(1)}px`);
      root.style.setProperty("--cursor-y", `${curPY.toFixed(1)}px`);

      const settled =
        Math.abs(targetX - curX) < 0.0008 &&
        Math.abs(targetY - curY) < 0.0008 &&
        Math.abs(targetPX - curPX) < 0.4 &&
        Math.abs(targetPY - curPY) < 0.4;

      if (settled && ++idle > 4) {
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      root.style.setProperty("--pointer-x", "0");
      root.style.setProperty("--pointer-y", "0");
      root.style.setProperty("--cursor-opacity", "0");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="cursor-ambience">
      <div className="cursor-ambience__glow" />
    </div>
  );
}

/**
 * Wraps decorative layers so they drift with the pointer.
 * `depth` in px; negative depth moves opposite to the cursor (far layer).
 */
export function Parallax({
  depth = 18,
  depthY,
  className,
  children,
  style,
}: {
  depth?: number;
  depthY?: number;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const dy = depthY ?? depth;
  return (
    <div
      aria-hidden
      className={className}
      style={{
        transform:
          `translate3d(calc(var(--pointer-x, 0) * ${depth}px), calc(var(--pointer-y, 0) * ${dy}px), 0)`,
        transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Very subtle 3D tilt on desktop pointers only. */
export function TiltCard({
  children,
  className,
  max = 2.5,
  glare = true,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const enabled = usePointerMotionEnabled();
  const ref = React.useRef<HTMLDivElement>(null);
  const raf = React.useRef(0);
  const target = React.useRef({ x: 0, y: 0 });
  const cur = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const run = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cur.current.x += (target.current.x - cur.current.x) * 0.12;
    cur.current.y += (target.current.y - cur.current.y) * 0.12;
    el.style.setProperty("--tilt-x", `${(-cur.current.y * max).toFixed(3)}deg`);
    el.style.setProperty("--tilt-y", `${(cur.current.x * max).toFixed(3)}deg`);
    el.style.setProperty("--glare-x", `${(50 + cur.current.x * 40).toFixed(1)}%`);
    el.style.setProperty("--glare-y", `${(50 + cur.current.y * 40).toFixed(1)}%`);
    const settled =
      Math.abs(target.current.x - cur.current.x) < 0.001 &&
      Math.abs(target.current.y - cur.current.y) < 0.001;
    raf.current = settled ? 0 : requestAnimationFrame(run);
  }, [max]);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const r = e.currentTarget.getBoundingClientRect();
    target.current = {
      x: ((e.clientX - r.left) / r.width) * 2 - 1,
      y: ((e.clientY - r.top) / r.height) * 2 - 1,
    };
    if (!raf.current) raf.current = requestAnimationFrame(run);
  };

  const onLeave = () => {
    if (!enabled) return;
    target.current = { x: 0, y: 0 };
    if (!raf.current) raf.current = requestAnimationFrame(run);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={enabled ? `tilt-card ${className ?? ""}` : className}
      data-glare={glare ? "on" : undefined}
    >
      {children}
    </div>
  );
}
