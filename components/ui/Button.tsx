import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "onDark" | "onDarkOutline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-[#002a00] focus-visible:ring-primary",
  secondary:
    "bg-accent text-accent-foreground hover:bg-[#3f7526] focus-visible:ring-accent",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground focus-visible:ring-primary",
  ghost:
    "bg-transparent text-primary hover:bg-muted focus-visible:ring-primary",
  onDark:
    "bg-background text-primary hover:bg-white focus-visible:ring-background",
  onDarkOutline:
    "border border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary focus-visible:ring-primary-foreground",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm sm:text-base",
  lg: "min-h-12 px-7 py-3.5 text-base sm:text-lg",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        buttonClassName(variant, size, className),
        "disabled:pointer-events-none disabled:opacity-50"
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "className" | "children"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={buttonClassName(variant, size, className)}
      {...props}
    >
      {children}
    </Link>
  );
}
