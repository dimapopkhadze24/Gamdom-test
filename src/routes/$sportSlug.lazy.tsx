import SportsComponent from "@/components/sports-components/SportsComponent";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/$sportSlug")({
  component: SportsComponent,
});
