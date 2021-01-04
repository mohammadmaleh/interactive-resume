import React, { ReactElement } from "react";
import { PageContainer } from "../../components/UI/Layout/Layout";
import styled from "styled-components";
import { LocationPin } from "@styled-icons/entypo/LocationPin";
import { TelephoneFill } from "@styled-icons/bootstrap/TelephoneFill";
import { Mail } from "@styled-icons/entypo/Mail";
import {
  blue,
  grey,
  silver,
  white,
  darkBlack,
  lightBlack,
} from "../../constants/colors";
import WhatsappIcon from "../../assets/whatsapp-icon.png";
import img from "../../assets/profile-picture.png";
interface Props {}

const MapContainer = styled.div`
  width: 100%;
  height: 300px;

  text-align: center;
  border-radius: 10px;
  overflow: hidden;
`;
const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
const ContactContainer = styled.a.attrs({
  target: "_blank",
})`
  width: 175px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
  height: 150px;
  background-color: ${grey};
  border: 2px solid ${darkBlack};
  text-decoration: none;
  margin: 20px 0px;
  box-shadow: 0px 10px 12px 0px #000;
  transition: all 0.4s ease-in-out;

  svg,
  img {
    color: ${silver};
    width: 40px;
    transition: all 0.7s ease-in-out;
  }

  .contact-text {
    color: ${silver};
    font-size: 10px;
    font-weight: bold;
    transition: all 0.7s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px #000;
    svg {
      color: ${blue};
    }
    .contact-text {
      color: ${white};
    }
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export default function ContactPage({}: Props): ReactElement {
  const contactsData = [
    {
      id: 0,
      text: "Sariyer - Istanbul - Turkey",
      icon: <LocationPin />,
      link: "#",
    },

    {
      id: 1,

      text: "mohammad.maleh@gmail.com",
      icon: <Mail />,
      link: "mailto:mohammad.maleh@gmail.com",
    },

    {
      id: 2,

      text: "+90 507 099 0448",
      icon: <TelephoneFill />,
      link: "tel:+905070990448",
    },
    {
      id: 3,

      text: "Whatsapp",
      icon: <img src={WhatsappIcon} />,
      link: "https://wa.me/00905070990448",
    },
  ];

  const renderContacts = () =>
    contactsData.map((contact) => (
      <ContactContainer key={contact.id} href={contact.link}>
        {contact.icon}
        <p className="contact-text">{contact.text}</p>
      </ContactContainer>
    ));
  return (
    <PageContainer>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12018.293749082428!2d29.023779267591674!3d41.14383701902091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA4JzM3LjgiTiAyOcKwMDEnNTcuMSJF!5e0!3m2!1sen!2str!4v1606699326937!5m2!1sen!2str"
          width="100%"
          height="300"
          frameBorder="0"
          aria-hidden="false"
        ></iframe>
      </MapContainer>
      <ContactsContainer>{renderContacts()}</ContactsContainer>
    </PageContainer>
  );
}
