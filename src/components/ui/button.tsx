import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white hover:bg-navy-soft",

        gold:
          "bg-gradient-to-r from-[#D4AF37] via-[#E6C158] to-[#F0C14B] text-[#06152D] shadow-lg hover:shadow-[0_12px_30px_rgba(212,175,55,0.35)] hover:-translate-y-0.5 active:translate-y-0",

        outline:
          "border border-navy/20 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-white",

        ghost:
          "text-navy hover:bg-grey-100",

        light:
          "border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-gold hover:text-gold",

        whatsapp:
          "bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.28)] hover:brightness-110",
      },

      size: {
        default:
          "h-11 px-6 text-sm",

        sm:
          "h-10 px-5 text-xs uppercase tracking-[0.12em]",

        lg:
          "h-12 px-8 text-sm uppercase tracking-[0.14em]",

        icon:
          "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };