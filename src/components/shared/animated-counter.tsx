"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1600,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const displayValue = reduce ? (inView ? value : 0) : count;

  useEffect(() => {
    if (!inView || reduce) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <p className="font-display text-4xl md:text-5xl text-gold tabular-nums">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/70">
        {label}
      </p>
    </div>
  );
}
