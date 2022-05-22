import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.filled ? "#0966bb" : "#fffbfb")};
  border-radius: 6px;
  border: ${(props) => (props.filled ? "none" : "1px solid #aaa1a1")};
  border-radius: 6px;
  padding: 10px 30px;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.filled ? "white" : "black")};
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: -4px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;
