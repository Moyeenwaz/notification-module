import styled from "styled-components";

export const EntryContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  /* height: 99px; */
  padding: 10px 0;
  background: #ffffff;
  border: 1px solid #c0b8b8;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
`;
export const Icon = styled.img`
  cursor: pointer;
  margin-right: 5px;
`;

export const EntryText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;
