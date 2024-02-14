"use client";

import React from "react";
import { Item, ItemData } from "./item";
import styled, { CSSProperties } from "styled-components";
import { CiBoxList } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";

export type GridListProps = {
  items: ItemData[];
};

export function GridList({ items }: GridListProps) {
  const [display, setDisplay] = React.useState<"list" | "grid" | "initial">(
    "initial"
  );
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const animationStart = (newDisplay: "list" | "grid") => {
    const illegalInitialTransition =
      display === "initial" && newDisplay === "grid";
    if (display === newDisplay || buttonDisabled || illegalInitialTransition)
      return;
    setButtonDisabled(true);
    setDisplay(newDisplay);
  };
  const animationEnd = () => setButtonDisabled(false);

  var rowCount = Math.ceil(items.length / 3);
  return (
    <>
      <ButtonBar>
        <IconButton onClick={() => animationStart("list")}>
          <CiBoxList size={32} />
        </IconButton>
        <IconButton onClick={() => animationStart("grid")}>
          <CiGrid41 size={32} />
        </IconButton>
      </ButtonBar>

      <GridListWrapper
        className={display}
        style={{ "--row-count": rowCount } as CSSProperties}
      >
        {items.map((itemProps, index) => (
          <Item
            key={index}
            {...itemProps}
            index={index}
            onAnimationEnd={animationEnd}
          />
        ))}
      </GridListWrapper>
    </>
  );
}

const GridListWrapper = styled.div`
  --parent-width: 1200px;
  --gap: 1rem;

  --grid-width: calc((var(--parent-width) - (var(--gap) * 2)) / 3);
  --grid-height: calc(var(--grid-width) * 0.8);

  --list-width: var(--parent-width);
  --list-height: calc((var(--grid-height) - (var(--gap) * 2)) / 3);

  width: var(--parent-width);
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--gap);
  grid-template-rows: repeat(var(--row-count), var(--grid-height));
  margin-block-end: 500px;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  text-align: inherit;
  font: inherit;
  border-radius: 0;
  appearance: none;
`;

const ButtonBar = styled.div`
  --gap: 1rem;

  display: flex;
  flex-direction: row-reverse;

  gap: var(--gap);
  padding: var(--gap);
  &.selected {
    background-color: #181b38;
  }
`;
