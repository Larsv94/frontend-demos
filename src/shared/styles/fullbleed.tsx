import { css } from "styled-components";

export const FullbleedLayout = (width: number) => css`
  display: grid;
  grid-template-columns:
    1fr
    min(${width}px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }
`;

export const FullbleedItem = css`
  width: 100%;
  grid-column: 1 / -1;
`;
