import { InputHTMLAttributes, forwardRef } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
