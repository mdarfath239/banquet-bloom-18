import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/venues")({
  component: VenuesLayout,
});

function VenuesLayout() {
  useMatches();
  return <Outlet />;
}
