import HeaderComponent from "@/components/header-components/HeaderComponent";
import { Outlet } from "@tanstack/react-router";
import { Flex } from "@/ui/flex";

const AppLayout = () => {
  return (
    <Flex flex="1" gap={32}>
      <HeaderComponent />
      <Outlet />
    </Flex>
  );
};

export default AppLayout;
