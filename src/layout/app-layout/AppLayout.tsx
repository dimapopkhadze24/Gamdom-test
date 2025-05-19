import HeaderComponent from "@/components/header-components/HeaderComponent";
import { Outlet } from "@tanstack/react-router";
import { Flex } from "@/ui/flex";
import { Suspense } from "react";
import { BouncingLoader } from "@/ui";

const AppLayout = () => {
  return (
    <Flex flex="1" gap={32}>
      <Suspense fallback={<BouncingLoader height={88} />}>
        <HeaderComponent />
      </Suspense>
      <Outlet />
    </Flex>
  );
};

export default AppLayout;
