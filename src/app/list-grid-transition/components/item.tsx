import styled from "styled-components";
import {
  ChildAnimations,
  ToGridAnimation,
  ToListAnimation,
} from "./item.animations";

export type ItemProps = {
  title: string;
  description: string;
  tags: string[];
  index: number;
  onAnimationEnd?: () => void;
};

export type ItemData = Omit<ItemProps, "index" | "onAnimationEnd">;

export function Item({
  title,
  description,
  tags,
  index,
  onAnimationEnd,
}: ItemProps) {
  return (
    <ItemWrapper
      onAnimationEnd={onAnimationEnd}
      $row={1 + Math.floor(index / 3)}
      $pos={index % 3}
    >
      <TextWrapper>
        <h2>{title}</h2>
        <p className="description">{description}</p>
      </TextWrapper>
      <TagList>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </TagList>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div<{ $row: number; $pos: number }>`
  --row: ${(props) => props.$row};
  --pos: ${(props) => props.$pos};
  --left-offset: calc(var(--grid-width) * var(--pos) + var(--gap) * var(--pos));
  position: relative;
  grid-row: var(--row);
  grid-column: 1 / -1;
  width: var(--grid-width);
  height: var(--grid-height);
  left: var(--left-offset);

  background-color: #2d2f44;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 2rem;

  padding: 1rem;

  border-radius: 0.5rem;
  .list & {
    animation: ${ToListAnimation} 1.2s 0.3s ease-in-out forwards;
  }
  .grid & {
    animation: ${ToGridAnimation} 1.5s ease-in-out forwards;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    font-weight: 300;
    color: #e4e4e4;
    ${ChildAnimations}
  }
`;

const TagList = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0.2rem 0.5rem;

  align-items: start;
  justify-items: start;

  ${ChildAnimations}
  & > li {
    font-size: 0.7rem;
    padding: 5px 8px;
    background-color: #3e4055;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
