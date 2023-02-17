import React, { useState } from 'react'
import styled from 'styled-components'

const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
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
