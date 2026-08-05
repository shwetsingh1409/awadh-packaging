"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { processSteps } from "@/lib/company";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const listRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !listRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-step]", {
        opacity: 0,
        x: -24,
        stagger: 0.08,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 75%",
        },
      });
    }, listRef);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={listRef} className="mt-14 relative">
      <div
        className="absolute left-[19px] top-2 bottom-2 w-px bg-grey-200 hidden md:block"
        aria-hidden
      />
      <ol className="space-y-6">
        {processSteps.map((step) => (
          <li
            key={step.step}
            data-step
            className="relative grid gap-4 md:grid-cols-[48px_1fr] md:gap-8"
          >
            <div className="flex md:justify-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold text-xs font-medium ring-4 ring-white">
                {step.step}
              </span>
            </div>
            <div className="border border-grey-200 bg-white p-6">
              <h3 className="font-display text-2xl text-navy">{step.title}</h3>
              <p className="mt-2 text-grey-600 leading-relaxed">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
