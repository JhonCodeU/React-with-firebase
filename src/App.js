import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <Container>
      <Title>Lista de Contactos</Title>
      <Form />
      <ContactList />
    </Container>
  );
}

const Container = styled.div`
  margin: 40px;
  width: 90%;
  max-width: 400px;
  background: #fff;
  padding: 40px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`

export default App;