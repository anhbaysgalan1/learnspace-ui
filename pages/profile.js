import React from "react";
import Head from "next/head";
import styled from "styled-components";

import AuthenticatedLayout from "../core/components/AuthenticatedLayout";
import ProfileInfoPanel from "../core/components/ProfileInfoPanel";
import ClassroomsList from "../core/components/ClassroomsList";
import NavigationBar from "../core/components/NavigationBar";
import ActivityPanel from "../core/components/ActivityPanel";
import { PrimaryButton } from "../core/components/Button";
import Container from "../core/components/Container";
import Panel from "../core/components/Panel";
import withData from "../core/withData";
import {
  ProfileInfoContainer,
  ProfileInfoDetails,
  UserFullName,
  UserInfoItem,
  Seperator
} from "../core/components/ProfilePage";

const ProfilePage = () => [
  <Head>
    <title>tiravat thaisubvorakul | LEARNSPACE</title>
  </Head>,
  <AuthenticatedLayout>
    <NavigationBar isLoggedIn={true} />
    <Container>
      <Panel left width="40">
        <ProfileInfoPanel>
          <ProfileInfoContainer>
            <ProfileInfoDetails>
              <UserFullName>Tony Stark</UserFullName>
              <Seperator />
              <UserInfoItem>ชื่อผู้ใช้ : IRONMAN2007</UserInfoItem>
              <UserInfoItem>อีเมลล์ : ironman@marvel.com</UserInfoItem>
              <UserInfoItem>ที่อยู่ : กรุงเทพฯ</UserInfoItem>
              <UserInfoItem>อาชีพ : วิศวะกร</UserInfoItem>
            </ProfileInfoDetails>
            <PrimaryButton>ส่งข้อความ</PrimaryButton>
          </ProfileInfoContainer>
        </ProfileInfoPanel>
      </Panel>
      <Panel right width="60">
        <ClassroomsList height="700px" />
      </Panel>
      <ActivityPanel />
    </Container>
  </AuthenticatedLayout>
];

export default withData(ProfilePage);
