import React, { useState } from "react";
import {
  ContactsComponent,
  ContactPanel,
  Container,
  Contact,
  SocialMedia,
} from "./styles";
import { FiYoutube } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [contacts, setContact] = useState(false);

  const showContacts = () => {
    setContact(!contacts);
  };

  return (
    <Container>
      <SocialMedia
        onClick={() => window.open("https://wa.me/+5592992599150", "_blank")}
      >
        <FaWhatsapp />
      </SocialMedia>
      <SocialMedia
        onClick={() =>
          window.open(
            "https://www.facebook.com/colegiodomboscolestemanaus",
            "_blank"
          )
        }
      >
        <FiFacebook />
      </SocialMedia>
      <SocialMedia
        onClick={() =>
          window.open(
            "https://www.instagram.com/colegiodomboscoleste/",
            "_blank"
          )
        }
      >
        <FiInstagram />
      </SocialMedia>
      <SocialMedia
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UCb5m5OvVCytJJ_SuQayWhEA",
            "_blank"
          )
        }
      >
        <FiYoutube />
      </SocialMedia>
      <Contact onClick={showContacts}>
        + contatos
        {contacts ? (
          <ContactPanel>
            <ContactsComponent>(92) 99259-9150</ContactsComponent>
            <ContactsComponent>(92) 3131-4100</ContactsComponent>
          </ContactPanel>
        ) : null}
      </Contact>
    </Container>
  );
};

export { Header };
