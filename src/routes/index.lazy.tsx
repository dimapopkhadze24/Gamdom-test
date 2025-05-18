import DashboardComponent from "@/components/dashboard-components/DashboardComponent";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: DashboardComponent,
});
