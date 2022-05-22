import React from "react";
import { EntryContainer, IconContainer, EntryText, Icon } from "./Entry.Styled";

export const Entry = () => {
  return (
    <EntryContainer>
      <EntryText>1.</EntryText>
      <EntryText>Maintenance Notice</EntryText>
      <EntryText>13 May 2022</EntryText>
      <IconContainer>
        <Icon src="images/edit.svg" alt="" />
        <Icon src="images/delete.svg" alt="" />
      </IconContainer>
    </EntryContainer>
  );
};
