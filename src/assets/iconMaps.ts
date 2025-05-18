import {
  BaseballIcon,
  BasketballIcon,
  SoccerIcon,
  TennisIcon,
} from "./icons/sports-icons";

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Soccer: SoccerIcon,
  Basketball: BasketballIcon,
  Baseball: BaseballIcon,
  Tennis: TennisIcon,
};

export default iconMap;
