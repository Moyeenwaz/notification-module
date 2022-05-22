import React from "react";
import { Header } from "../Header";
import {
  BtnContainer,
  AddButton,
  Search,
  SearchContainer,
  Sort,
  TabbedContainer,
  TabHeader,
  Tabs,
  NotificationDetailsContainer,
  NotificationDetails,
  Entries,
  Empty,
  A,
} from "./Dashboard.styled";
import { Entry } from "./Entry";

export const Dashboard = () => {
  return (
    <>
      <Header>Notification Dashboard</Header>
      <BtnContainer>
        <A to="/update-notice">
          <AddButton>
            <img src="images/plus.svg" alt="" />
            Add Notification
          </AddButton>
        </A>
      </BtnContainer>

      <SearchContainer>
        <Search type="text" placeholder="Search" />
        <Sort>
          Sort by: <img src="images/dropdown.svg" alt="" />
        </Sort>
      </SearchContainer>
      <TabbedContainer>
        <TabHeader>
          <Tabs>Pending</Tabs>
          <Tabs>Active</Tabs>
          <Tabs>Draft</Tabs>
          <Tabs>Expired</Tabs>
        </TabHeader>
        <NotificationDetailsContainer>
          <NotificationDetails>ID</NotificationDetails>
          <NotificationDetails>Title</NotificationDetails>
          <NotificationDetails>Date</NotificationDetails>
          <NotificationDetails>Action</NotificationDetails>
        </NotificationDetailsContainer>
        <Entries>
          <Entry />
        </Entries>
        <Empty>No data</Empty>
        {/* Empty should only be displayed when there is no entry */}
      </TabbedContainer>
    </>
  );
};
