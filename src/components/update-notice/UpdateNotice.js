import React, { useState } from "react";
import { Header } from "../Header";
import {
  GeneralContainer,
  Input,
  InputContainer,
  Label,
  Title,
  TitleContainer,
  InputSmall,
  DurationContainer,
  CheckboxContainer,
  Checkbox,
  ButtonContainer,
} from "./UpdateNotice.styled.";
import { A } from "../notification-dashboard/Dashboard.styled";
import { Button } from "./Button.styled";
import { Wysiwyg } from "../Wysiwyg";
//Using a dropdown library
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SavedMessage } from "./SavedMessage";

//Dropdown Options
const updateType = [
  { value: "maintenance", label: "Maintenance Notice" },
  { value: "promo", label: "Promo Notice" },
  { value: "new-course-offer", label: "New Course Offer" },
];
const updateSeverity = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];
const updateFeaturesAffected = [
  { value: "signup", label: "Sign Up Page" },
  { value: "payment", label: "Payment Page" },
  { value: "lorem", label: "lorem" },
  { value: "lorem", label: "lorem" },
  { value: "lorem", label: "lorem" },
  { value: "lorem", label: "lorem" },
];

export const UpdateNotice = () => {
  const [isMaintenanceNotice, setIsMaintenanceNotice] = useState(false);
  const [isSeveritySelected, setIsSeveritySelected] = useState(false);
  const [saved, setSaved] = useState(false);

  const setSelectedOption = (selectedOption) => {};

  const setSelectedCategory = (selectedCategory) => {
    if (selectedCategory.value === "maintenance") setIsMaintenanceNotice(true);
    else setIsMaintenanceNotice(false);
  };

  const setSelectedSeverity = () => {
    setIsSeveritySelected(true);
  };

  const handleSave = () => {
    setSaved(true);
  };

  return (
    <>
      <Header>Update Notice</Header>
      {saved && <SavedMessage />}
      <GeneralContainer>
        <InputContainer>
          <Label>Category</Label>
          <Select
            components={makeAnimated()}
            onChange={setSelectedCategory}
            options={updateType}
            autoFocus
            placeholder="Select an Update Type"
          />
        </InputContainer>

        <InputContainer>
          <Label>Notification Title</Label>
          <Input type="text" placeholder="Title.." />
        </InputContainer>

        {isMaintenanceNotice && (
          <InputContainer>
            <Label>Severity</Label>
            <Select
              components={makeAnimated()}
              onChange={setSelectedSeverity}
              options={updateSeverity}
              placeholder="Select an Update Type"
            />
          </InputContainer>
        )}

        {isSeveritySelected && (
          <InputContainer>
            <Label>Select Affected Features</Label>
            <Select
              components={makeAnimated()}
              onChange={setSelectedOption}
              options={updateFeaturesAffected}
              placeholder="Select Affected Features"
              isSearchable
              isMulti
            />
          </InputContainer>
        )}

        <TitleContainer>
          <Title>Duration</Title>
          <DurationContainer>
            <InputContainer>
              <Label>Date</Label>
              <InputSmall type="date" />
            </InputContainer>
            <InputContainer>
              <Label>Time</Label>
              <InputSmall type="time" />
            </InputContainer>
          </DurationContainer>
        </TitleContainer>
        <TitleContainer>
          <Title>Message</Title>
          <Label>Strip</Label>
          <Wysiwyg />

          <CheckboxContainer>
            <Checkbox type="checkbox" />
            <Label>Show Strip</Label>
          </CheckboxContainer>

          <Label>Modal</Label>
          <Wysiwyg />

          <CheckboxContainer>
            <Checkbox type="checkbox" />
            <Label>Show Modal</Label>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" />
            <Label>Send notice as email</Label>
          </CheckboxContainer>
        </TitleContainer>
        <ButtonContainer>
          <A to="/">
            <Button>Cancel</Button>
          </A>
          <Button filled={true} onClick={handleSave}>
            Save
          </Button>
        </ButtonContainer>
      </GeneralContainer>
    </>
  );
};
