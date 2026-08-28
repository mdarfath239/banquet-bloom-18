import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Search, ChevronDown } from "lucide-react";
import { cities, paxRanges, slots, occasions } from "@/lib/site-data";

const vendorTypes = [
  "Caterer",
  "Decorator",
  "Photography",
  "Makeup Artist",
  "DJ",
  "Mehendi",
  "Dhol / Band",
  "Wedding Planner",
];

function Field({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="group relative flex min-w-0 flex-1 flex-col gap-1 px-5 py-3 text-left">
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none truncate bg-transparent pr-5 text-sm font-medium text-foreground outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute bottom-4 right-3 size-4 text-muted-foreground" />
    </label>
  );
}

export function SearchPanel() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"venues" | "vendors">("venues");
  const [city, setCity] = useState(cities[0]!);
  const [pax, setPax] = useState(paxRanges[1]!);
  const [slot, setSlot] = useState(slots[0]!);
  const [occasion, setOccasion] = useState(occasions[0]!);
  const [vendor, setVendor] = useState(vendorTypes[0]!);
  const [date, setDate] = useState("");

  return (
    <div className="w-full max-w-5xl">
      <div className="flex gap-1">
        {(["venues", "vendors"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-t-xl px-6 py-2.5 text-sm font-semibold capitalize transition-colors ${
              tab === t
                ? "bg-card text-foreground"
                : "bg-card/25 text-primary-foreground backdrop-blur hover:bg-card/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="rounded-b-2xl rounded-tr-2xl border border-border bg-card p-2 shadow-[var(--shadow-lift)]">
        <div className="flex flex-col divide-y divide-border md:flex-row md:items-stretch md:divide-x md:divide-y-0">
          <Field label="City" options={cities} value={city} onChange={setCity} />
          {tab === "venues" ? (
            <>
              <Field label="Guests" options={paxRanges} value={pax} onChange={setPax} />
              <Field label="Occasion" options={occasions} value={occasion} onChange={setOccasion} />
              <Field label="Slot" options={slots} value={slot} onChange={setSlot} />
            </>
          ) : (
            <>
              <Field label="Vendor type" options={vendorTypes} value={vendor} onChange={setVendor} />
              <label className="flex min-w-0 flex-1 flex-col gap-1 px-5 py-3 text-left">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Event date
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-foreground outline-none"
                />
              </label>
            </>
          )}

          <div className="p-2 md:self-center">
            <button
              onClick={() => navigate({ to: "/venues" })}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Search className="size-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
