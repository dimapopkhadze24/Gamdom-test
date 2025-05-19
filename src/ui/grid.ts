import styled from "styled-components";
import { GridI } from "@/types";

export const Grid = styled.div<GridI>`
  display: grid;
  grid-template-columns: ${({ columns = "1fr" }) => columns};
  grid-template-rows: ${({ rows = "auto" }) => rows};
  gap: ${({ gap }) => `${gap}px`};
  grid-auto-flow: ${({ autoFlow = "row" }) => autoFlow};
`;
