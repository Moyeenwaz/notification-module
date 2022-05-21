import React from "react";
import styled from "styled-components";

export const Header = ({ children }) => {
  return (
    <HeaderContaner>
      <HeaderText>{children}</HeaderText>
    </HeaderContaner>
  );
};

const HeaderContaner = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  color: #fff;
  background-color: #009fe3;
  height: 73px;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
`;
