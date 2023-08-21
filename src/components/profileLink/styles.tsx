import styled, { css } from "styled-components";

export const Aga3 = styled.h3<{ $big?: boolean }>`
  border: 2px solid #c561a5;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  background-color: #4e4b4b;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #7b7979;
  }
  ${(props) =>
    props.$big &&
    css`
      width: 125px;
      height: 125px;
      font-size: 44px;
      cursor: default;
      &:hover {
        background-color: #4e4b4b;
      }
    `}
`;

export const Image = styled.img<{ $big?: boolean }>`
  border: 2px solid #c561a5;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  cursor: pointer;
  ${(props) =>
    props.$big &&
    css`
      width: 125px;
      height: 125px;
    `}
`;
