import styled from "styled-components";

export const GeneralContainer = styled.div`
  min-height: 100vh;
  width: 80%;
  margin: 30px auto 0;
`;

export const InputContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const Label = styled.label`
  font-family: "Inter";
  font-style: normal;
  display: block;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 8px 20px;
  background: #f8f8f8;
  border: 1px solid #0a78da;
  border-radius: 5px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  text-align: left;
  font-size: inherit;
  color: inherit;
  font-family: inherit;

  ::placeholder {
    margin-left: 10px;
    font-family: "Inter";
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #050505;
    opacity: 0.5;
  }
`;

export const TitleContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
`;

export const InputSmall = styled(Input)`
  width: 50%;
`;

export const DurationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Checkbox = styled.input``;
export const ButtonContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;
