import styled from "styled-components";

export const FooterContainer = styled.div`
  border: none;
  border-top: 2px solid #dcd8d8;
  padding-top: 15px;
  padding-bottom: 25px;
  display: flex;
  justify-content: space-around;
  margin-top: 500px;
`;
export const FooterText = styled.p`
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #050505;
  opacity: 0.5;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
export const FooterIconLeft = styled.img`
  transform: rotate(360deg);
  cursor: pointer;
`;
export const FooterIconRight = styled.img`
  transform: rotate(180deg);
  cursor: pointer;
`;
