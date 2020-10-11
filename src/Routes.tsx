import React, { ReactElement } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { Home, User } from "@styled-icons/boxicons-regular";
import { Work } from "@styled-icons/material";
import { Blog } from "@styled-icons/fa-solid/Blog";
import { Contact } from "@styled-icons/boxicons-solid/Contact";
import { white, lightBlack } from "./constants/colors";
import { useTransition, animated } from "react-spring";
import * as easings from "d3-ease";
import styled from "styled-components";

const Page = styled.div`
  color: ${white};
  background-color: ${lightBlack};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  position: absolute;
  box-shadow: 9px 10px 28px -6px rgba(0, 0, 0, 0.75);
`;
const HomePage = ({}: Object): ReactElement => <Page>home</Page>;
const AboutMePage = ({}: Object): ReactElement => <Page>About Me</Page>;
const ExperiencePage = ({}: Object): ReactElement => <Page>Experience</Page>;
const ContactPage = ({}: Object): ReactElement => <Page>Contact</Page>;
const BlogPage = ({}: Object): ReactElement => <Page>Blog</Page>;

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
    name: "Blog",
    link: "/blog",
    icon: Blog,
    component: BlogPage,
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
    icon: Contact,
    component: ContactPage,
  },
];
interface Props {}
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
      <Route exact key={page.id} path={page.link}>
        {page.component}
      </Route>
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
