import { CSSProperties } from "react";

import { ReactNode } from "react";

export type GridTemplateColumnsT = string;
export type GridTemplateRowsT = string;
export type GridGapT = string | number;
export type GridAutoFlowT =
  | "row"
  | "column"
  | "dense"
  | "row dense"
  | "column dense";

export interface GridI {
  children: ReactNode;
  columns?: GridTemplateColumnsT;
  rows?: GridTemplateRowsT;
  gap?: GridGapT;
  autoFlow?: GridAutoFlowT;
  className?: string;
  style?: CSSProperties;
}
