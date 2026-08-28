import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Users, SlidersHorizontal, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { venues, cities, occasions } from "@/lib/site-data";

export const Route = createFileRoute("/venues/")({
  head: () => ({
    meta: [
      { title: "Banquet Halls & Wedding Venues — Banquet & Buffets" },
      {
        name: "description",
        content:
          "Filter banquet halls, lawns, resorts and rooftops by city, guest count and per-plate budget. Verified capacity, live dates and real reviews.",
      },
      { property: "og:title", content: "Browse Wedding Venues — Banquet & Buffets" },
      {
        property: "og:description",
        content: "Verified banquet halls and lawns with transparent per-plate pricing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VenuesList,
});

const types = ["All types", "Banquet Hall", "5 Star Hotel", "Resort", "Rooftop", "Heritage Palace", "Convention Centre"];
const sorts = ["Recommended", "Price: low to high", "Rating", "Capacity"] as const;

function VenuesList() {
  const [city, setCity] = useState("All cities");
  const [type, setType] = useState(types[0]!);
  const [budget, setBudget] = useState(3000);
  const [guests, setGuests] = useState(0);
  const [sort, setSort] = useState<(typeof sorts)[number]>("Recommended");

  const results = useMemo(() => {
    const list = venues.filter(
      (v) =>
        (city === "All cities" || v.city === city) &&
        (type === "All types" || v.type === type) &&
        v.perPlate <= budget &&
        v.capacityMax >= guests,
    );
    const sorted = [...list];
    if (sort === "Price: low to high") sorted.sort((a, b) => a.perPlate - b.perPlate);
    if (sort === "Rating") sorted.sort((a, b) => b.rating - a.rating);
    if (sort === "Capacity") sorted.sort((a, b) => b.capacityMax - a.capacityMax);
    return sorted;
  }, [city, type, budget, guests, sort]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-8">
        <p className="eyebrow">Venues</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Find your hall</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          {results.length} verified {results.length === 1 ? "space" : "spaces"} matching your
          filters. Prices shown are veg per-plate rates.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="surface-card h-fit p-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="size-4 text-primary" />
              <h2 className="text-lg">Filters</h2>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                >
                  {["All cities", ...cities].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Venue type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                >
                  {types.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Max per plate
                  <span className="text-foreground">₹{budget}</span>
                </label>
                <input
                  type="range"
                  min={1000}
                  max={3000}
                  step={50}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary)]"
                />
              </div>

              <div>
                <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Min capacity
                  <span className="text-foreground">{guests || "Any"}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={1500}
                  step={50}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary)]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Occasion
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {occasions.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <span className="text-sm text-muted-foreground">Showing {results.length} results</span>
              <label className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as (typeof sorts)[number])}
                  className="rounded-lg border border-input bg-card px-3 py-2 text-sm outline-none focus:border-ring"
                >
                  {sorts.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 space-y-5">
              {results.map((v) => (
                <Link
                  key={v.slug}
                  to="/venues/$slug"
                  params={{ slug: v.slug }}
                  className="lift surface-card group grid overflow-hidden sm:grid-cols-[300px_1fr]"
                >
                  <img
                    src={v.image}
                    alt={`${v.name}, ${v.type} in ${v.city}`}
                    loading="lazy"
                    width={1000}
                    height={750}
                    className="h-56 w-full object-cover sm:h-full"
                  />
                  <div className="flex flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl leading-tight">{v.name}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" />
                          {v.area}, {v.city} · {v.type}
                        </p>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                        <Star className="size-3 fill-current" />
                        {v.rating} ({v.reviews})
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {v.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Users className="size-4" />
                        {v.capacity}
                      </span>
                      <div className="text-right">
                        <p className="font-display text-2xl leading-none text-foreground">
                          {v.veg}
                        </p>
                        <p className="text-xs text-muted-foreground">veg, per plate</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {results.length === 0 && (
                <div className="surface-card p-12 text-center">
                  <h3 className="text-2xl">No halls match those filters</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Try widening the budget or lowering the minimum capacity.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
