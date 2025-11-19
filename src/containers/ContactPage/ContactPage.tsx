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
      text: "Munich (central), Bavaria, Germany",
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

      text: "+49 155 60718240",
      icon: <TelephoneFill />,
      link: "tel:+4915560718240",
    },
    {
      id: 3,

      text: "Whatsapp",
      icon: <img src={WhatsappIcon} />,
      link: "https://wa.me/4915560718240",
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42523.90717275054!2d11.539532542517866!3d48.13743177498407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75f9a38c5fd9%3A0x10cb84a7db1987d!2sMunich%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
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
