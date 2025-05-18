import styled, { CSSProperties } from "styled-components";
import { ReactNode } from "react";

type GridTemplateColumns = string;
type GridTemplateRows = string;
type GridGap = string | number;
type GridAutoFlow = "row" | "column" | "dense" | "row dense" | "column dense";

interface GridProps {
  children: ReactNode;
  columns?: GridTemplateColumns;
  rows?: GridTemplateRows;
  gap?: GridGap;
  autoFlow?: GridAutoFlow;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = "1fr" }) => columns};
  grid-template-rows: ${({ rows = "auto" }) => rows};
  gap: ${({ gap }) => `${gap}px`};
  grid-auto-flow: ${({ autoFlow = "row" }) => autoFlow};
  height: ${({ height = "auto" }) => height};
`;
