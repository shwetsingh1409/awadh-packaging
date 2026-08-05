"use client";

import dynamic from "next/dynamic";
import type { GalleryItem } from "@/lib/gallery";

const GalleryGridInner = dynamic(
  () =>
    import("@/components/gallery/gallery-grid").then((m) => m.GalleryGrid),
  {
    ssr: false,
    loading: () => (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse bg-grey-100" />
        ))}
      </div>
    ),
  }
);

export function GalleryGridClient({ items }: { items: GalleryItem[] }) {
  return <GalleryGridInner items={items} />;
}
