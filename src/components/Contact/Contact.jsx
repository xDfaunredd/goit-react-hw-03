import s from "./Contact.module.css";
import { CgProfile } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contactListItems, handleDeleteContact }) => {
  return (
    <>
      {contactListItems.length === 0
        ? "There are no contacts"
        : contactListItems.map(({ id, number, name }) => (
            <li key={id} className={s.item}>
              <span>
                <p className={s.text}>
                  <CgProfile />{" "}
                  {name.length > 15 ? name.slice(0, 15) + "..." : name}
                </p>
                <p className={s.text}>
                  <FaPhoneAlt />
                  <a href={`tel:${number}`}> {number}</a>
                </p>
              </span>
              <button
                className={s.button}
                onClick={() => handleDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
    </>
  );
};

export default Contact;
