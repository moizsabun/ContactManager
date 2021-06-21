import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItems from "./ContactItems";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if ((contacts.lenght = 0)) {
    return <h4>Please add Contact from Left Add Contact Button</h4>;
  }

  return (
    <>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItems key={contact._id} contact={contact}></ContactItems>
          ))
        : contacts.map((contact) => (
            <ContactItems key={contact._id} contact={contact}></ContactItems>
          ))}
    </>
  );
};

export default Contact;
