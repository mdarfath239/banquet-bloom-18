import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Users, MapPin, UtensilsCrossed, BedDouble, Check } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { venues } from "@/lib/site-data";

export const Route = createFileRoute("/venues/$slug")({
  loader: ({ params }) => {
    const venue = venues.find((v) => v.slug === params.slug);
    if (!venue) throw notFound();
    return { venue };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.venue;
    const title = v ? `${v.name}, ${v.city} — Banquet & Buffets` : "Venue — Banquet & Buffets";
    const description = v
      ? `${v.type} in ${v.area}, ${v.city}. ${v.capacity}, from ${v.veg} per plate. Rated ${v.rating} by ${v.reviews} families.`
      : "Venue details on Banquet & Buffets.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: VenueDetail,
});

const amenities = [
  "Air-conditioned hall",
  "Valet parking",
  "In-house decor team",
  "Bridal changing room",
  "Live counters allowed",
  "DJ & sound permitted",
  "Power backup",
  "Baraat entry space",
];

function VenueDetail() {
  const { venue } = Route.useLoaderData();
  const similar = venues.filter((v) => v.slug !== venue.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <main className="pt-20">
        <div className="relative">
          <img
            src={venue.image}
            alt={`${venue.name}, ${venue.type} in ${venue.city}`}
            width={1000}
            height={750}
            className="h-[52vh] w-full object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-5 pb-10 sm:px-8">
              <p className="eyebrow text-gold">{venue.type}</p>
              <h1 className="mt-3 text-4xl text-primary-foreground sm:text-6xl">{venue.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="size-4" />
                {venue.area}, {venue.city}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex flex-wrap gap-8 border-b border-border pb-8">
              <div>
                <p className="eyebrow">Rating</p>
                <p className="mt-2 flex items-center gap-2 font-display text-3xl">
                  <Star className="size-5 fill-gold text-gold" />
                  {venue.rating}
                  <span className="text-base text-muted-foreground">({venue.reviews})</span>
                </p>
              </div>
              <div>
                <p className="eyebrow">Capacity</p>
                <p className="mt-2 flex items-center gap-2 font-display text-3xl">
                  <Users className="size-5 text-primary" />
                  {venue.capacity}
                </p>
              </div>
              <div>
                <p className="eyebrow">Stay</p>
                <p className="mt-2 flex items-center gap-2 font-display text-3xl">
                  <BedDouble className="size-5 text-primary" />
                  {venue.rooms}
                </p>
              </div>
            </div>

            <section className="py-8">
              <h2 className="text-3xl">About this space</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{venue.about}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {venue.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="border-t border-border py-8">
              <h2 className="text-3xl">Menu &amp; pricing</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="surface-card p-6">
                  <UtensilsCrossed className="size-5 text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">Vegetarian, per plate</p>
                  <p className="font-display text-4xl">{venue.veg}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    9 starters · 5 mains · live chaat &amp; dessert counter
                  </p>
                </div>
                <div className="surface-card p-6">
                  <UtensilsCrossed className="size-5 text-primary" />
                  <p className="mt-3 text-sm text-muted-foreground">Non-vegetarian, per plate</p>
                  <p className="font-display text-4xl">{venue.nonVeg}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    12 starters · 7 mains · grill &amp; biryani counter
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-border py-8">
              <h2 className="text-3xl">Amenities</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="size-4 text-primary" />
                    {a}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit lg:sticky lg:top-28">
            <div className="surface-card p-6">
              <p className="text-sm text-muted-foreground">Starting at</p>
              <p className="font-display text-4xl">{venue.veg}</p>
              <p className="text-xs text-muted-foreground">per plate, veg · taxes extra</p>

              <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  placeholder="Your name"
                  className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                />
                <input
                  placeholder="Phone number"
                  className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                  />
                  <input
                    type="number"
                    placeholder="Guests"
                    className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm outline-none focus:border-ring"
                  />
                </div>
                <button className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Check availability
                </button>
                <button className="w-full rounded-lg border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                  Request a site visit
                </button>
              </form>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                No booking fee. A venue manager responds within 4 working hours.
              </p>
            </div>
          </aside>
        </div>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <h2 className="text-3xl">Similar spaces</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {similar.map((v) => (
                <Link
                  key={v.slug}
                  to="/venues/$slug"
                  params={{ slug: v.slug }}
                  className="lift surface-card group overflow-hidden"
                >
                  <img
                    src={v.image}
                    alt={`${v.name}, ${v.type} in ${v.city}`}
                    loading="lazy"
                    width={1000}
                    height={750}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <h3 className="text-xl">{v.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {v.area}, {v.city}
                    </p>
                    <p className="mt-3 text-sm font-semibold">{v.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
