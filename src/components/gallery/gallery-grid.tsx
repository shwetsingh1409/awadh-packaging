"use client";

import { useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
  categories?: string[];
};

export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [filter, setFilter] = useState("All");
  const lightGallery = useRef<{ refresh: () => void } | null>(null);

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  useEffect(() => {
    lightGallery.current?.refresh();
  }, [filtered]);

  const cats = categories ?? [
    "All",
    ...Array.from(new Set(items.map((i) => i.category))),
  ];

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Gallery filters"
      >
        {cats.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 text-sm border transition-colors focus-ring rounded-sm",
              filter === cat
                ? "border-navy bg-navy text-white"
                : "border-grey-200 text-grey-600 hover:border-navy hover:text-navy"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <LightGallery
        speed={400}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        onInit={(detail) => {
          lightGallery.current = detail.instance;
        }}
      >
        {filtered.map((item) => (
          <a
            key={item.id}
            href={item.src}
            className="group relative block overflow-hidden bg-grey-100 aspect-[4/3] focus-ring"
            data-src={item.src}
            data-sub-html={`<h4>${item.title}</h4><p>${item.category}</p>`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumb}
              alt={item.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent opacity-95" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="label-bar flex items-center justify-between">
                <span>
                  <span className="text-gold mr-2">{item.category}</span>
                  {item.title}
                </span>
              </div>
            </div>
          </a>
        ))}
      </LightGallery>
    </div>
  );
}
