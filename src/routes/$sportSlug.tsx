import SportsComponent from "@/components/sports-components/SportsComponent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$sportSlug")({
  component: SportsComponent,
});
