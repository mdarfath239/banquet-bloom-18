import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ShieldCheck, IndianRupee, CalendarCheck, ArrowRight, Users } from "lucide-react";

import heroImage from "@/assets/hero-banquet.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SearchPanel } from "@/components/search-panel";
import { categories, venues, stories, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banquet & Buffets — Book Banquet Halls, Lawns & Wedding Vendors" },
      {
        name: "description",
        content:
          "Compare banquet halls, lawns and wedding vendors across India with real availability, verified reviews and transparent per-plate pricing.",
      },
      { property: "og:title", content: "Banquet & Buffets — India's Banquet Booking Platform" },
      {
        property: "og:description",
        content:
          "Search venues by guest count, date and budget. Book caterers, decorators and photographers from one dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const promises = [
  { icon: IndianRupee, title: "Per-plate clarity", body: "Veg and non-veg rates published upfront. No broker markup, no surprise service charges." },
  { icon: CalendarCheck, title: "Live date availability", body: "Every calendar syncs with the venue's own bookings, so a green date is a real date." },
  { icon: ShieldCheck, title: "Verified by visit", body: "Our city teams walk each hall before it goes live — capacity, parking and kitchen included." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative min-h-[92vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Banquet hall set for an Indian wedding reception with floral centrepieces and chandeliers"
            width={1920}
            height={1200}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="hero-scrim absolute inset-0" />

          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8">
            <p className="eyebrow text-gold">Since 2014 · 12 cities</p>
            <h1 className="mt-4 max-w-3xl text-balance text-5xl leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl">
              The hall, the buffet and every vendor — settled in one evening.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              Search 2,000+ verified banquet halls and lawns by guest count, date and per-plate
              budget. Hold your date online before someone else does.
            </p>

            <div className="mt-10">
              <SearchPanel />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
              <span>2,060 venues listed</span>
              <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
              <span>18,400 events hosted</span>
              <span className="hidden h-1 w-1 rounded-full bg-gold sm:block" />
              <span>4.7 average venue rating</span>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section id="vendors" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Browse by category</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Start where your planning starts</h2>
            </div>
            <Link
              to="/venues"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              See all categories
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/venues"
                className="lift group relative overflow-hidden rounded-2xl"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="hero-scrim absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl text-primary-foreground">{cat.name}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/75">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured venues */}
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Handpicked this month</p>
            <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
              Halls our city teams would book themselves
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {venues.slice(0, 6).map((v) => (
                <Link
                  key={v.slug}
                  to="/venues/$slug"
                  params={{ slug: v.slug }}
                  className="lift surface-card group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={v.image}
                      alt={`${v.name}, ${v.type} in ${v.city}`}
                      loading="lazy"
                      width={1000}
                      height={750}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
                      {v.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl leading-tight">{v.name}</h3>
                      <span className="flex shrink-0 items-center gap-1 rounded-md bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
                        <Star className="size-3 fill-current" />
                        {v.rating}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {v.area}, {v.city}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="size-4" />
                        {v.capacity}
                      </span>
                      <span className="font-semibold text-foreground">{v.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Promise */}
        <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Why families choose us</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">
                Booking a hall should feel less like a negotiation.
              </h2>
              <div className="gold-rule mt-6" />
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {promises.map((p) => (
                <div key={p.title} className="surface-card p-6">
                  <p.icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real weddings */}
        <section id="stories" className="scroll-mt-24 bg-ink py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow text-gold">Real weddings</p>
            <h2 className="mt-3 max-w-2xl text-4xl text-cream sm:text-5xl">
              Celebrations that started with a search bar
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {stories.map((s) => (
                <figure key={s.couple} className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={s.image}
                    alt={`${s.couple} — ${s.place}`}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="h-[26rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="hero-scrim absolute inset-0" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-2xl text-primary-foreground">{s.couple}</p>
                    <p className="mt-1 text-sm text-primary-foreground/70">{s.place}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="eyebrow">Reviews</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Word from the families</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="surface-card flex flex-col p-7">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 font-display text-xl leading-snug text-foreground">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Vendor CTA */}
        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
          <div className="overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center sm:px-16">
            <p className="eyebrow text-primary-foreground/70">For venue owners</p>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl text-primary-foreground sm:text-5xl">
              Fill your off-season dates with enquiries that convert.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              Publish your calendar, menus and per-plate rates. We send you families who already
              know your capacity and budget fit.
            </p>
            <button className="mt-8 rounded-full bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]">
              List your venue
            </button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
