import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  max-width: 300px;
`;

const Button = styled.button`
  padding: 10px;
  width: 80%;
  max-width: 300px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    image: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar dados para a API
  };

  return (
    <SignUpContainer>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input type="text" name="name" placeholder="Nome" onChange={handleChange} />
        <Input type="text" name="image" placeholder="Foto (URL)" onChange={handleChange} />
        <Input type="password" name="password" placeholder="Senha" onChange={handleChange} />
        <Button type="submit">Cadastrar</Button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
