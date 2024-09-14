import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactListItems, handleDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contactListItems.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
