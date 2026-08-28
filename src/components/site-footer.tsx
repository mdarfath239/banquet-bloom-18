import { Link } from "@tanstack/react-router";
import { cities } from "@/lib/site-data";

const columns = [
  {
    title: "Venues",
    links: ["Banquet halls", "Lawns & farmhouses", "5 star hotels", "Resorts", "Rooftops"],
  },
  {
    title: "Vendors",
    links: ["Caterers", "Decorators", "Photographers", "Makeup artists", "Dhol & band"],
  },
  {
    title: "Company",
    links: ["About us", "List your venue", "Careers", "Contact", "Privacy policy"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl">Banquet</span>
              <span className="font-display text-2xl text-gold">&amp; Buffets</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
              India's banquet-first booking platform. Real availability, transparent per-plate
              pricing, and one dashboard for every vendor on your list.
            </p>
            <div className="gold-rule mt-6" />
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wide text-cream">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/venues"
                      className="text-sm text-cream/65 transition-colors hover:text-gold"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/50">Cities we serve</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {cities.map((city) => (
              <Link
                key={city}
                to="/venues"
                className="text-sm text-cream/70 transition-colors hover:text-gold"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-cream/45">
          © {new Date().getFullYear()} Banquet &amp; Buffets. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
