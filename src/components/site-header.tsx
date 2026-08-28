import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, MapPin, Heart, X } from "lucide-react";

const nav = [
  { label: "Venues", to: "/venues" },
  { label: "Vendors", to: "/venues", hash: "vendors" },
  { label: "Real Weddings", to: "/", hash: "stories" },
  { label: "How it works", to: "/", hash: "how" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const light = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2">
          <span
            className={`font-display text-2xl leading-none tracking-tight ${
              light ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Banquet
          </span>
          <span className="font-display text-2xl leading-none text-gold">&amp; Buffets</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                light ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <button
            className={`hidden items-center gap-1.5 text-sm font-medium sm:flex ${
              light ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <MapPin className="size-4" />
            Mumbai
          </button>
          <button
            aria-label="Shortlist"
            className={`hidden size-9 items-center justify-center rounded-full border sm:flex ${
              light
                ? "border-primary-foreground/40 text-primary-foreground"
                : "border-border text-foreground"
            }`}
          >
            <Heart className="size-4" />
          </button>
          <button className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:block">
            List your venue
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${light ? "text-primary-foreground" : "text-foreground"}`}
          >
            {open ? <Menu className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex items-center justify-between pb-2">
            <span className="eyebrow">Menu</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="size-5 text-muted-foreground" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              List your venue
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
