import { cn } from "@/src/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md font-medium transition",
          variant === "default" && "bg-blue-500 text-white hover:bg-blue-600",
          variant === "outline" && "border border-gray-300 text-gray-700 hover:bg-gray-100",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
