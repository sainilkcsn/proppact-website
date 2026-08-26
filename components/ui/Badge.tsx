import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "secondary" | "muted";
};

const variants = {
  default: "bg-primary/10 text-primary",
  accent: "bg-accent/15 text-accent",
  secondary: "bg-secondary/10 text-secondary",
  muted: "bg-muted text-muted-foreground",
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2.5 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
