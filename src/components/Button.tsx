import type { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive";
//this is a reusable button component that can be used throughout the app. 
// It takes in children and any other props that a button element can take. 
// It also has some default styles and disabled styles.

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  //custom prop that we can use to apply different styles to the button based on the variant value. 
  // It is optional and defaults to "primary".
  className?: string;
  //allows us to pass in additional class names to the button component, 
  // which will be merged with the default styles using the twMerge function.
} & ComponentProps<"button">;

// ...props is a spread operator that allows us to pass in any other props that a button element can take, such as onClick, disabled, etc.
export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        getVariantStyles(variant),
        "transition-colors rounded px-2 py-1 disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
    >
      {children}
    </button>
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-violet-500 hover:bg-violet-400 text-white";

    case "secondary":
      return "bg-zinc-700 hover:bg-zinc-600 text-zinc-300";

    case "ghost-destructive":
      return "text-red-500 hover:text-red-200 hover:bg-red-500/10";

    default:
      throw new Error(`Invalid variant: ${variant}`);
  }
}
