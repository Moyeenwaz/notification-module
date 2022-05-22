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
import { Button } from "./Button.styled";
import { Wysiwyg } from "../Wysiwyg";
//Using a dropdown library
import Select from "react-select";
import makeAnimated from "react-select/animated";

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
  // I meant to implement a functionality here but i failed. I left the code and commented it out
  const [selectedOption, setSelectedOption] = useState({});
  // const checkSelectedOption = () => selectedOption.value === "maintenance";

  return (
    <>
      <Header>Update Notice</Header>
      <GeneralContainer>
        <InputContainer>
          <Label>Category</Label>
          <Select
            components={makeAnimated()}
            onChange={setSelectedOption}
            options={updateType}
            autoFocus
            placeholder="Select an Update Type"
          />
        </InputContainer>
        <InputContainer>
          <Label>Title</Label>
          <Input type="text" placeholder="Title.." />
        </InputContainer>
        {/* {selectedOption.value === "maintenance" && (
        )} */}
        <InputContainer>
          {" "}
          <Label>Severity</Label>
          <Select
            components={makeAnimated()}
            onChange={setSelectedOption}
            options={updateSeverity}
            placeholder="Select an Update Type"
          />
        </InputContainer>

        <InputContainer>
          {" "}
          <Label>Features Affected</Label>
          <Select
            components={makeAnimated()}
            onChange={setSelectedOption}
            options={updateFeaturesAffected}
            placeholder="Select Affected Features"
            isSearchable
            isMulti
          />
        </InputContainer>
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
          <Button>Cancel</Button>
          <Button filled={true}>Save</Button>
        </ButtonContainer>
      </GeneralContainer>
    </>
  );
};
