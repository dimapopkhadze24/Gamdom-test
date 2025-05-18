import { getIconComponent } from "@/utils";

const HeaderSportIconRenderer = ({ iconName }: { iconName: string }) => {
  const Icon = getIconComponent(iconName);
  return Icon ? <Icon width={32} height={32} /> : null;
};

export default HeaderSportIconRenderer;
