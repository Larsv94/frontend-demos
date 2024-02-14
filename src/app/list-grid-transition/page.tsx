import React from "react";
import { GenerateFakeItem } from "./lib/fakes";
import { ColoredBar, Main, Header } from "./page.styled";
import { GridList } from "./components/grid-list";

const ItemCount = 36;

export default function ListToGridTransition() {
  const items = Array.from({ length: ItemCount }).map(() => GenerateFakeItem());

  return (
    <Main>
      <ColoredBar />
      <Header>
        <h1>List-grid transition</h1>
        <p>
          Animation done completely with css keyframes, based on{" "}
          <a
            href="https://www.reddit.com/r/Frontend/comments/14zh7bp/unique_transition_between_grid_and_list_views/"
            rel="nofollow"
          >
            Unique Transition Between Grid and List Views
          </a>
        </p>
      </Header>
      <GridList items={items} />
    </Main>
  );
}
