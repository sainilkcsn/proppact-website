"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { Logo } from "@/components/ui/Logo";
import {
  BUY_PROPERTY_LINKS,
  INSIGHTS_LINKS,
  SERVICES_NAV_LINKS,
  type NavItem,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type AccordionKey = "buy" | "services" | "insights" | null;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [accordion, setAccordion] = useState<AccordionKey>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setAccordion(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setAccordion(null);
  };

  const toggleAccordion = (key: AccordionKey) => {
    setAccordion((current) => (current === key ? null : key));
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border/70 bg-background/95 shadow-[0_1px_0_rgba(26,26,26,0.04),0_8px_24px_rgba(0,60,0,0.04)]"
          : "border-border/40 bg-background"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-container items-center justify-between gap-3 px-4 sm:px-6 lg:px-8",
          "h-[70px] min-[900px]:h-[80px]",
          scrolled && "min-[900px]:h-[76px]"
        )}
      >
        <Logo priority responsive className="py-1" />

        <nav
          className="hidden items-center gap-3.5 min-[900px]:flex xl:gap-4"
          aria-label="Primary"
        >
          <NavLink href="/">Home</NavLink>
          <NavDropdown label="Buy Property" items={BUY_PROPERTY_LINKS} />
          <NavLink href="/sell-your-property">Sell Property</NavLink>
          <NavDropdown label="Services" items={SERVICES_NAV_LINKS} />
          <NavLink href="/about-us">About Us</NavLink>
          <NavDropdown label="Insights" items={INSIGHTS_LINKS} />
          <NavLink href="/contact-us">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden h-11 items-center justify-center whitespace-nowrap rounded-md bg-primary px-5 text-[14px] font-medium text-primary-foreground transition-colors duration-200 hover:bg-accent min-[900px]:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-primary min-[900px]:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            className="min-[900px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              type="button"
              className="fixed inset-0 top-[70px] z-40 bg-primary/35"
              aria-label="Close menu overlay"
              onClick={closeMobile}
            />
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -6, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full z-50 max-h-[calc(100svh-76px)] overflow-y-auto border-b border-border bg-background shadow-soft"
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
                <p className="text-sm font-semibold text-primary">Menu</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary"
                  aria-label="Close menu"
                  onClick={closeMobile}
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="flex flex-col px-4 py-3 sm:px-6">
                <MobileLink href="/" onClick={closeMobile}>
                  Home
                </MobileLink>

                <MobileAccordion
                  label="Buy Property"
                  open={accordion === "buy"}
                  onToggle={() => toggleAccordion("buy")}
                  items={BUY_PROPERTY_LINKS}
                  onNavigate={closeMobile}
                />

                <MobileLink href="/sell-your-property" onClick={closeMobile}>
                  Sell Property
                </MobileLink>

                <MobileAccordion
                  label="Services"
                  open={accordion === "services"}
                  onToggle={() => toggleAccordion("services")}
                  items={SERVICES_NAV_LINKS}
                  onNavigate={closeMobile}
                />

                <MobileLink href="/about-us" onClick={closeMobile}>
                  About Us
                </MobileLink>

                <MobileAccordion
                  label="Insights"
                  open={accordion === "insights"}
                  onToggle={() => toggleAccordion("insights")}
                  items={INSIGHTS_LINKS}
                  onNavigate={closeMobile}
                />

                <MobileLink href="/contact-us" onClick={closeMobile}>
                  Contact
                </MobileLink>

                <Link
                  href="/contact-us"
                  onClick={closeMobile}
                  className="mt-3 mb-2 inline-flex h-12 items-center justify-center rounded-md bg-primary text-[14px] font-medium text-primary-foreground transition-colors hover:bg-accent"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap rounded-md px-1 py-2 text-[14px] font-medium text-foreground/85 transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-md px-1 py-3 text-base font-medium text-foreground hover:text-primary"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  items,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  items: NavItem[];
  onNavigate: () => void;
}) {
  const panelId = useId();

  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-foreground"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-primary transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-3 pl-3">
              {items.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={onNavigate}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
