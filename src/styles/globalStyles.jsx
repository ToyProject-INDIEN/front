import styled, { css } from "styled-components";
import { smLayout } from "./homeStyles";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};
  ${(props) =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
  ${(props) =>
    props.flexWrap &&
    css`
      flex-wrap: ${props.flexWrap};
    `}
  ${(props) =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `};
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `};
`;

export const Grid = styled.div`
  ${(props) =>
    props.container &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};
  ${(props) =>
    props.flexWrap &&
    css`
      flex-wrap: ${props.flexWrap};
    `};

  ${(props) =>
    props.xs &&
    css`
      flex-grow: 0;
      max-width: ${(100 / 12) * props.xs}%;
      flex-basis: ${(100 / 12) * props.xs}%;
    `}
  ${(props) =>
    props.sm &&
    css`
      ${smLayout} {
        flex-grow: 0;
        max-width: ${(100 / 12) * props.sm}%;
        flex-basis: ${(100 / 12) * props.sm}%;
      }
    `}
`;
