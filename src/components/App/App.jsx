import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import contactsArr from "../json/contactsArr.json";

import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [contactListItems, setContactListItems] = useState(() => {
    const loadData = JSON.parse(
      window.localStorage.getItem("contactListItems")
    );

    if (loadData?.length) {
      return loadData;
    }

    return contactsArr;
  });

  function handleAddContact(newContact) {
    setContactListItems((prev) => [...prev, newContact]);
    console.log(contactListItems);
  }

  function handleDeleteContact(contactId) {
    setContactListItems((prev) => prev.filter((item) => item.id !== contactId));
  }

  const filteredArr = contactListItems.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  useEffect(() => {
    window.localStorage.setItem(
      "contactListItems",
      JSON.stringify(contactListItems)
    );
  });

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox filterValue={filter} setFilterValue={setFilter} />
      <ContactList
        contactListItems={filteredArr}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
