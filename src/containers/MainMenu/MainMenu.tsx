import React, { ReactElement } from "react";
import styled from "styled-components";
import { pages } from "../../Routes";
import MenuIcon from "../../components/hoc/MenuIcon/MenuIcon";
import { ChevronRight, ChevronLeft } from "@styled-icons/boxicons-regular";
import { useHistory, useLocation } from "react-router-dom";
import { grey, silver } from "../../constants/colors";
import devices from "../../constants/breakpoints";
interface Props {}
const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  flex-direction: column;
  @media ${devices.mobileL} {
    width: 100%;
    height: 70px;
  }
`;

const Menu = styled.div`
  background: ${grey};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  align-items: center;
  @media ${devices.mobileL} {
    flex-direction: row;
    border-radius: 0;
  }
`;
const NavigationMenu = styled(Menu)`
  height: 150px;
  margin-top: 10px;
  padding: 15px 0;
  @media ${devices.mobileL} {
    display: none;
  }
`;
const ArrowRight = styled(ChevronRight)`
  height: 45px;
  width: 45px;
  * {
    color: ${silver}!important;
  }
`;
const ArrowLeft = styled(ChevronLeft)`
  height: 45px;
  width: 45px;
  * {
    color: ${silver}!important;
  }
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
          Icon={ArrowRight}
          handleOnClick={() => {
            swipePage("next");
          }}
          name={"Next"}
        />
        <MenuIcon
          Icon={ArrowLeft}
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
