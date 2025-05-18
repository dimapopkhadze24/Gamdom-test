import styled, { CSSProperties } from "styled-components";
import { ReactNode } from "react";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

interface FlexProps {
  children: ReactNode;
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  gap?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  flex?: string | number;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "column" }) => direction};
  justify-content: ${({ justify = "flex-start" }) => justify};
  align-items: ${({ align = "stretch" }) => align};
  gap: ${({ gap }) => `${gap}px`};
  flex: ${({ flex }) => flex};
  height: ${({ height = "auto" }) => height};
`;
