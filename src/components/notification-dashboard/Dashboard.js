import React from 'react';
import { Header } from '../Header';
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
  A
} from './Dashboard.styled';
import { Entry } from './Entry';

export const Dashboard = () => {
  const dashboardData = [
    {
      id: 1,
      title: 'Maintenance Notice',
      date: '15 May 2022'
    },
    {
      id: 2,
      title: 'New course Notice',
      date: '17 May 2022'
    },
    {
      id: 3,
      title: 'Discount Offer Notice',
      date: '19 May 2022'
    }
  ];

  return (
    <>
      <Header>Notification Dashboard</Header>
      <BtnContainer>
        <A to='/update-notice'>
          <AddButton>
            <img src='images/plus.svg' alt='' />
            Add Notification
          </AddButton>
        </A>
      </BtnContainer>

      <SearchContainer>
        <Search type='text' placeholder='Search' />
        <Sort>
          Sort by: <img src='images/dropdown.svg' alt='' />
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
          {dashboardData.map(data => (
            <Entry
              key={data.id}
              id={data.id}
              title={data.title}
              date={data.date}
            />
          ))}
        </Entries>
        {!dashboardData.length && <Empty>No data</Empty>}
      </TabbedContainer>
    </>
  );
};
