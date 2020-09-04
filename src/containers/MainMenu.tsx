import React, { ReactElement } from "react";
import styled from "styled-components";
import { Home, User } from "@styled-icons/boxicons-regular";
import { School } from "@styled-icons/ionicons-outline";
import { Work } from "@styled-icons/material";
import { Blog } from "@styled-icons/fa-solid/Blog";
import { Contact } from "@styled-icons/boxicons-solid/Contact";
import { Download } from "@styled-icons/boxicons-regular/Download";
import { ChevronRight, ChevronLeft } from "@styled-icons/boxicons-regular";
import MenuIcon from "../components/hoc/MenuIcon/MenuIcon";
interface Props {}

const HomeIcon = MenuIcon(Home, "Home");
const UserIcon = MenuIcon(User, "User");
const SchoolIcon = MenuIcon(School, "School");
const WorkIcon = MenuIcon(Work, "Work");
const BlogIcon = MenuIcon(Blog, "Blog");
const ContactIcon = MenuIcon(Contact, "Contact");
const DownloadIcon = MenuIcon(Download, "Download");
const RightIcon = MenuIcon(ChevronRight);
const LeftIcon = MenuIcon(ChevronLeft);
const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
`;
const Menu = styled.div`
  height: 100%;
  background: linear-gradient(#444444, #444444);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  align-items: center;
`;
const NavigationMenu = styled(Menu)`
  height: 160px;
  margin-top: 20px;
`;
const MainMenu = ({}: Props): ReactElement => {
  return (
    <MenuContainer>
      <Menu>
        <HomeIcon />
        <UserIcon />
        <SchoolIcon />
        <WorkIcon />
        <BlogIcon />
        <ContactIcon />
        <DownloadIcon />
      </Menu>
      <NavigationMenu>
        <RightIcon />
        <LeftIcon />
      </NavigationMenu>
    </MenuContainer>
  );
};
export default MainMenu;
