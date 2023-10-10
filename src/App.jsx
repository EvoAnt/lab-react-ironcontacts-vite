import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const randomContact = () => {
    const actualContacts = contactsData.filter(
      (contact) => !contacts.includes(contact)
    );

    if (actualContacts.length === 0) return;

    const randomContact =
      actualContacts[Math.floor(Math.random() * actualContacts.length)];
    setContacts((prevContacts) => [...prevContacts, randomContact]);
  };

  function sortPopularity() {
    let sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  }

  function sortName() {
    let sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <button onClick={randomContact}>Add Random Contact</button>

      <button onClick={sortPopularity}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>

      <div className="title-container">
        <h2 className="title">Picture</h2>
        <h2 className="title">Name</h2>
        <h2 className="title">Popularity</h2>
        <h2 className="title">Won Oscar</h2>
        <h2 className="title">Won Emmy</h2>
        <h2 className="title">Action</h2>
      </div>

      {contacts.map((contact) => (
        <div className="title-container2 ">
          <img src={contact.pictureUrl} alt={contact.name} className="image" />
          <h1 className="text"> {contact.name} </h1>
          <h1 className="text"> {contact.popularity.toFixed(2)} </h1>
          <h1 id="oscar">{contact.wonOscar && <span>🏆</span>}</h1>
          <h1 id="emmy">{contact.wonEmmy && <span>🏆</span>}</h1>
          <button id="btn2" onClick={() => deleteContact(contact.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;