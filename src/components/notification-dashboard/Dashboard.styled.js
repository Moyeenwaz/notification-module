import styled from "styled-components";
import { Link } from "react-router-dom";

export const BtnContainer = styled.div`
  width: 90%;
  margin: 30px auto 50px;
  display: flex;
  justify-content: flex-end;
`;

export const A = styled(Link)`
  text-decoration: none;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: #61a60f;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Inter";
  font-style: normal;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: white;
  transition: all 0.2s;

  &:hover {
    transform: scale(0.9);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  }

  img {
    margin-right: 5px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
`;
export const Search = styled.input`
  width: 200px;
  padding: 10px 15px;
  height: 30px;
  background: #f8f8f8;
  border: 1px solid #c0b8b8;
  border-radius: 5px;
  outline: none;
  text-align: left;
  font-size: inherit;
  color: inherit;
  font-family: inherit;

  ::placeholder {
    margin-left: 10px;
    font-family: "Inter";
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #050505;
    opacity: 0.5;
  }
`;
export const Sort = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
`;

export const TabbedContainer = styled.div`
  background: #f8f8f8;
  border: 1px solid #c0b8b8;
  border-radius: 5px;
  width: 90%;
  position: relative;
  margin: 70px auto 0;
  min-height: ${({ notEmpty }) => (notEmpty ? "1000px" : "330px")};
`;
export const TabHeader = styled.ul`
  background: #ffffff;
  border: 1px solid #c0b8b8;
  border-radius: 5px 5px 0 0;
  height: 71px;
  margin: 0;
  display: flex;
  list-style: none;
  align-items: center;
`;

export const Tabs = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(5, 5, 5, 0.96);
  opacity: 0.5;
  cursor: pointer;
  margin-right: 150px;
`;

export const NotificationDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
`;

export const NotificationDetails = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const Entries = styled.div`
  width: 100%;
`;

export const Empty = styled.p`
  position: absolute;
  width: 93px;
  height: 29px;
  left: 570px;
  top: 218px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #050505;
  opacity: 0.5;
`;
