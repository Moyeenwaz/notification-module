import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterIcons,
  FooterIconLeft,
  FooterIconRight,
} from "./Footer.Styled";

export const Footer = ({ totalNum, currNum }) => {
  return (
    <FooterContainer>
      <FooterText>
        Showing {currNum === 0 ? "0" : 1} to {currNum} of {totalNum} entries
      </FooterText>
      <FooterIcons>
        <FooterIconLeft src="images/footer-icon.svg" alt="" />
        <FooterIconRight src="images/footer-icon.svg" alt="" />
      </FooterIcons>
    </FooterContainer>
  );
};
