import React, { ReactElement } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home, User } from "@styled-icons/boxicons-regular";
import { Work } from "@styled-icons/material";
import { Blog } from "@styled-icons/fa-solid/Blog";
import { Contact } from "@styled-icons/boxicons-solid/Contact";
import { white, lightBlack } from "./constants/colors";
const pagesStyle = {
  color: white,
  backgroundColor: lightBlack,
  width: "100%",
  height: "100%",
};
const HomePage = ({}: Object): ReactElement => (
  <div style={pagesStyle}>home</div>
);
const AboutMePage = ({}: Object): ReactElement => (
  <div style={pagesStyle}>About Me</div>
);
const ExperiencePage = ({}: Object): ReactElement => (
  <div style={pagesStyle}>Experience</div>
);
const ContactPage = ({}: Object): ReactElement => (
  <div style={pagesStyle}>Contact</div>
);
const BlogPage = ({}: Object): ReactElement => (
  <div style={pagesStyle}>Blog</div>
);

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
  const renderPages = () =>
    pages.map((page) => (
      <Route exact key={page.id} path={page.link}>
        {page.component}
      </Route>
    ));
  return (
    <Switch>
      {renderPages()}
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}
