import { createRootRoute } from "@tanstack/react-router";
import AppLayout from "../layout/app-layout/AppLayout";

export const Route = createRootRoute({
  component: AppLayout,
});
