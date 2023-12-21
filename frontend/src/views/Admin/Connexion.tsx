import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../utils/hooks/AuthContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 4px;
`;

const Form = styled.form`
  margin-top: 8px;
`;

const FormControl = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #008080;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface FormState {
  identifier: string;
  password: string;
}

function Connection() {
  const [formState, setFormState] = useState<FormState>({
    identifier: '',
    password: '',
  });

  const { login } = useAuth(); // Utilisez le hook useAuth

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Authentification réussie
        const responseData = await response.json();
        console.log('Utilisateur connecté:', responseData);

        // Stockez le jeton d'authentification dans le contexte d'authentification
        login(responseData.token);
      } else {
        // Gestion des erreurs d'authentification
        console.error('Erreur lors de l\'authentification');
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Connexion</Heading>
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Identifiant</FormLabel>
            <Input
              required
              type="text"
              placeholder="Entrez votre identifiant"
              value={formState.identifier}
              onChange={(e) => setFormState({ ...formState, identifier: e.target.value })}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              required
              type="password"
              placeholder="Entrez votre mot de passe"
              value={formState.password}
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
          </FormControl>
          <Button type="submit">Se connecter</Button>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Connection;
