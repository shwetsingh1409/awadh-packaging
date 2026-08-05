import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteImages } from "@/lib/gallery";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-14",
  md: "h-20",
  lg: "h-24",
};

export function Logo({
  className,
  size = "md",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Awadh Packaging"
      className={cn(
        "flex items-center shrink-0",
        className
      )}
    >
      <Image
        src={siteImages.logo}
        alt="Awadh Packaging"
        width={500}
        height={500}
        priority
        draggable={false}
        className={cn(
          "w-auto object-contain transition-transform duration-300 hover:scale-105",
          sizes[size]
        )}
      />
    </Link>
  );
}