import React, { useState } from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import { collection, addDoc } from "firebase/firestore";

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email) {
      alert('Por favor ingrese un nombre y un email');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "users"), { name, email });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setName('');
    setEmail('');
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <Input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button type="submit">Agregar</Button>
    </form>
  );
}

const Input = styled.input`
padding: 10px;
border: 2px solid #ddd;
border-radius: 3px;
margin-bottom: 10px;
width: 100%;
margin-bottom: 10px;
transition: .2s ease all;
outline: none;
text-align: center;

&:focus {
  border-color: #333;
  box-shadow: 0 0 5px #333;
}
`

const Button = styled.button`
  padding: 10px;
  border: 2px solid #333;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100%;
  margin-bottom: 10px;
  transition: .3s ease all;
  outline: none;
  background: #333;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    background: #fff;
    color: #333;
  }
`

export default Form;
