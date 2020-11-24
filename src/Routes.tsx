import React, { ReactElement } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Home, User } from "@styled-icons/boxicons-regular";
import { Work } from "@styled-icons/material";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Contact } from "@styled-icons/boxicons-solid/Contact";
import { white, lightBlack } from "./constants/colors";
import { useTransition, animated } from "react-spring";
import * as easings from "d3-ease";
import styled from "styled-components";
import HomePage from "./containers/HomePage/HomePage";
import AboutMePage from "./containers/AboutMePage/AboutMePage";
import ExperiencePage from "./containers/ExperiencePage/ExperiencePage";
import ContactPage from "./containers/ContactPage/ContactPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";
interface Props {}

export const pages = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: Home,
    component: HomePage,
  },
  {
    id: 2,
    name: "About Me",
    link: "/about-me",
    icon: User,
    component: AboutMePage,
  },
  {
    id: 3,
    name: "Experience",
    link: "/experience",
    icon: Work,
    component: ExperiencePage,
  },
  {
    id: 4,
    name: "Projects",
    link: "/projects",
    icon: Javascript,
    component: ProjectsPage,
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    icon: Contact,
    component: ContactPage,
  },
];
export default function Routes({}: Props): ReactElement {
  const location = useLocation();
  const pageTransition = useTransition(location, location.pathname, {
    from: {
      display: "none",
      transform: "translate3d(-100%,0px,10000px)",
      opacity: 1,
    },
    enter: {
      display: "block",
      transform: "translate3d(0,0,10000px)",
      opacity: 1,
      boxShadow: "none",
    },
    leave: {
      display: "block",
      transform: "translate3d(100%,0,121121px)",
      opacity: 0,
      boxShadow: "none",
    },
    config: {
      easing: easings.easeCubic,
      mass: 10,
      tension: 600,
      friction: 170,
    },
  });
  const renderPages = () =>
    pages.map((page) => (
      <Route exact key={page.id} path={page.link} component={page.component} />
    ));
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "auto",
      }}
    >
      {pageTransition.map(({ item: location, props, key }) => (
        <animated.div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            ...props,
          }}
          key={key}
        >
          <Switch location={location}>
            {renderPages()}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </animated.div>
      ))}
    </div>
  );
}
