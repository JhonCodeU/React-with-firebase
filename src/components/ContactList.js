import React, { useState } from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import Contact from './Contact'

const ContactList = () => {

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Juan', email: 'juan@gmail.com' },
    { id: 2, name: 'Pedro', email: 'pedro@gmail.com' },
    { id: 3, name: 'Maria', email: 'sonar@gmail.com' },
  ]);

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