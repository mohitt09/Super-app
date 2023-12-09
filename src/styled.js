import styled, { css } from "styled-components";

export const ColorButton = styled.button`
  ${({ $bgColor }) => css`
    background-color: ${$bgColor};
  `}
  border-radius: 1rem;
  border: 0;
  padding: 0.5rem 1rem;
  text-align: center;
  transition: 0.4s;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    ${({ $bgColor }) => css`
      box-shadow: 7px 5px 56px -10px ${$bgColor};
    `}
  }

  &:active {
    transform: scale(0.97);
    ${({ $bgColor }) => css`
      box-shadow: 7px 5px 56px -10px ${$bgColor};
    `}
  }
`;

export const Span = styled.span`
  font-size: 14px;
  ${({ $color }) => css`
    color: ${$color};
  `}
`;

export const HoverSpan = styled.span`
  ${({ $color }) => css`
    color: ${$color};
  `}
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = styled.h1`
  ${({ $color, $fontSize }) => css`
    color: ${$color};
    font-size: ${$fontSize};
  `}
  font-family: 'Single Day', cursive;
`;

export const Tab = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;

  cursor: pointer;
  ${({ $bgColor, $borderColor }) => css`
    background-color: ${$bgColor};
    box-shadow: 0 0 0 5px ${$borderColor};
  `}
`;

export const Chip = styled.div`
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  ${({ $bgColor }) => css`
    background-color: ${$bgColor};
  `}
  & p {
    margin: 0.5rem;
  }
`;
