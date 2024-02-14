"use client";

import { FullbleedLayout, FullbleedItem } from "@/shared/styles/fullbleed";
import styled from "styled-components";

export const Main = styled.main`
  ${FullbleedLayout(1200)}
  background-color: #161830;
`;

export const ColoredBar = styled.div`
  height: 5rem;
  background-color: #3e4055;
  ${FullbleedItem}
`;

export const Header = styled.header`
  ${FullbleedItem}
  ${FullbleedLayout(1200)}

  padding: 2rem;
`;
