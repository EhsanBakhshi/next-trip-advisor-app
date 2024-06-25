import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const buttonVariants = cva("bold-16 whitespace-nowrap", {
  variants: {
    variant: {
      dark: "bg-green-90 px-8 py-4 text-white transition-all hover:bg-black",
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(
          "flexCenter gap-3 rounded-full border",
          buttonVariants({ variant, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
