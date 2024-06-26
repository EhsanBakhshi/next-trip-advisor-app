import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const buttonVariants = cva("bold-16 whitespace-nowrap", {
  variants: {
    variant: {
      dark: "bg-green-90 px-8 py-4 text-white transition-all hover:bg-black",
      darkOutline: "border-gray-20 bg-green-90 px-8 py-5 text-white",
      green: "border-green-50 bg-green-50 px-8 py-5 text-white",
      darkGreen:
        "bg-green-90 px-8 py-4 text-white transition-all hover:bg-black",
      darkGreenOutline: "border-gray-20 bg-green-90 px-8 py-5 text-white",
      white: "border-white bg-white px-8 py-3 text-green-50",
      whiteText: "border-white bg-white px-8 py-3 text-gray-90",
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
