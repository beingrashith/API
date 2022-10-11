import './App.css';
import React, { useEffect, useState } from 'react';
import api from "../src/api/contact";
import Header from './components/Header';
import AddContacts from './components/AddContacts';
import ContactList from './components/ContactList';
const { v4: uuidv4 } = require('uuid')



function App() {
 //  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const reteriveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuidv4(), ...contact,
    };
    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data])
  };


  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    //  const reteriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(reteriveContacts) setContacts(reteriveContacts)
    const getAllContacts = async () => {
      const allContacts = await reteriveContacts();
      if (allContacts) setContacts(allContacts)
    }
    getAllContacts()
  }, []);

  //useEffect(() => {
  //  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  // }, [contacts])

  return (
    <div className="App">
      <Header />
      <AddContacts addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
