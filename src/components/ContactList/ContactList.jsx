import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contactListItems, handleDeleteContact }) => {
  return (
    <ul className={s.list}>
      <Contact
        contactListItems={contactListItems}
        handleDeleteContact={handleDeleteContact}
      />
    </ul>
  );
};

export default ContactList;
