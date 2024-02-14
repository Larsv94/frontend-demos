import { keyframes, css } from "styled-components";

export const ToListAnimation = keyframes`
  0% {
    translate: 0 0;
  }
  33% {
    translate: 0 calc(var(--pos) * (var(--list-height) + var(--gap)));
    height: var(--grid-height);
  }
  60% {
    height: var(--list-height);
    width: var(--grid-width);
    left: var(--left-offset);
  }
  100% {
    translate: 0 calc(var(--pos) * (var(--list-height) + var(--gap)));
    height: var(--list-height);
    width: var(--list-width);
    left: 0;
  }
`;

export const ToGridAnimation = keyframes`
  0%,20% {
    height: var(--list-height);
    translate: 0 calc(var(--pos) * (var(--list-height) + var(--gap)));

    width: var(--list-width);
    left: 0;
  }
  60% {
    translate: 0 calc(var(--pos) * (var(--list-height) + var(--gap)));
    width: var(--grid-width);
    left: var(--left-offset);
    height: var(--list-height);
  }
  100% {
    translate: 0 0 ;
    height: var(--grid-height);
  }
`;

const ChildAnimation = (inverse = false) => keyframes`
  0%{
    opacity:1;
    translate:0 0;
  }
  16%,
  82%{
    opacity:0;
    translate:0 ${inverse ? "-50%" : "100%"};
  }
  83%{
    opacity:0;
    translate:0 ${inverse ? "100%" : "-50%"};
  }
  100%{
    opacity:1;
    translate:0 0;
  }
`;

export const ChildAnimations = css`
  .list & {
    animation: ${ChildAnimation(true)} 1.8s ease-in-out forwards;
  }
  .grid & {
    animation: ${ChildAnimation()} 1.8s ease-in-out forwards;
  }
`;
