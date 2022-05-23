import React from 'react';
import { EntryContainer, IconContainer, EntryText, Icon } from './Entry.Styled';

export const Entry = ({ id, title, date }) => {
  return (
    <EntryContainer>
      <EntryText>{`${id}.`}</EntryText>
      <EntryText>{title}</EntryText>
      <EntryText>{date}</EntryText>
      <IconContainer>
        <Icon src='images/edit.svg' alt='' />
        <Icon src='images/delete.svg' alt='' />
      </IconContainer>
    </EntryContainer>
  );
};
