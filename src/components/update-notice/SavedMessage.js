import React from "react";
import {
  SavedMessageContainer,
  Main,
  SavedMessageText,
} from "./SavedMessage.Styled";

export const SavedMessage = () => {
  return (
    <SavedMessageContainer>
      <Main>
        <SavedMessageText>Notice Updated</SavedMessageText>
      </Main>
    </SavedMessageContainer>
  );
};
