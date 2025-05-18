import styled from "styled-components";
import { ReactNode } from "react";

type TypographyColor = "light500" | "brandMain" | "light700";
type TypographyVariant = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TypographyI {
  children: ReactNode;
  color?: TypographyColor;
  hover?: TypographyColor;
  variant?: TypographyVariant;
  className?: string;
}

const getColor = (color?: TypographyColor) => {
  switch (color) {
    case "light500":
      return "var(--primary-light-color-500)";
    case "brandMain":
      return "var(--primary-brand-color-main)";
    case "light700":
      return "var(--primary-light-color-700)";
    default:
      return "var(--primary-light-color-500)";
  }
};

export const Typography = styled.span.attrs<TypographyI>(
  ({ variant = "span" }) => ({
    as: variant,
  })
)<TypographyI>`
  color: ${({ color }) => getColor(color)};
  transition: color 0.2s ease-in-out;

  ${({ hover }) =>
    hover &&
    `
    &:hover {
      color: ${getColor(hover)};
    }
  `}
`;
