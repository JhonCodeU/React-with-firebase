import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import Contact from './Contact'
import { collection, onSnapshot } from "firebase/firestore";

const ContactList = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const query = collection(db, "users");
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setContacts(docs);
    });

    return unsubscribe;
  }, []);

  return (
    contacts.length > 0 ?
      <ContainerContactList>
        {
          contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))
        }
      </ContainerContactList>
      :
      <p>No hay contactos</p>
  );
}

const ContainerContactList = styled.div`
 margin-top: 40px;
`;

export default ContactList;