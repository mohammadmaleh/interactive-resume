import React, { ReactElement } from "react";
import styled from "styled-components";
import { pages } from "../Routes";
import MenuIcon from "../components/hoc/MenuIcon/MenuIcon";
import { ChevronRight, ChevronLeft } from "@styled-icons/boxicons-regular";
import { useHistory, useLocation } from "react-router-dom";
interface Props {}
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
  padding: 40px 0;
  align-items: center;
`;
const NavigationMenu = styled(Menu)`
  height: 160px;
  margin-top: 20px;
`;
const MainMenu = ({}: Props): ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const swipePage = (direction: string) => {
    const currentLocation = location.pathname;
    const pagesCount = pages.length - 1;
    const currentPageIndex = pages.findIndex(
      (page) => page.link === currentLocation
    );
    let nextPage = "/";
    if (currentPageIndex === -1) history.push("/");
    if (direction === "next") {
      if (currentPageIndex === pagesCount) nextPage = pages[0].link;
      else nextPage = pages[currentPageIndex + 1].link;
    } else if (direction === "prev") {
      if (currentPageIndex === 0) nextPage = pages[pagesCount].link;
      else nextPage = pages[currentPageIndex - 1].link;
    }
    history.push(nextPage);
  };
  const renderIcons = () =>
    pages.map((page) => {
      return (
        <MenuIcon
          key={page.id}
          link={page.link}
          Icon={page.icon}
          name={page.name}
        />
      );
    });

  return (
    <MenuContainer>
      <Menu>{renderIcons()}</Menu>
      <NavigationMenu>
        <MenuIcon
          Icon={ChevronRight}
          handleOnClick={() => {
            swipePage("next");
          }}
          name={"Next"}
        />
        <MenuIcon
          Icon={ChevronLeft}
          handleOnClick={() => {
            swipePage("prev");
          }}
          name={"Prev"}
        />
      </NavigationMenu>
    </MenuContainer>
  );
};
export default MainMenu;
