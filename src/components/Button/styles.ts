import styled from "styled-components";
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => {
    return props.primary ? "#00A3C4" : "#005b99";
  }};
  width: ${(props) => {
    return props.fullWidth ? "100%" : "10rem";
  }};
  color: #ffffff;
  border: ${(props) =>
    props.primary ? "none" : "1px solid rgba(0, 0, 0, 0.16)"};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-size: ${(props) => {
    return props.size === "small"
      ? ".75rem"
      : props.size === "medium"
      ? "1rem"
      : props.size === "large"
      ? "1.5rem"
      : "auto";
  }};
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border-radius: 3rem;
`;
