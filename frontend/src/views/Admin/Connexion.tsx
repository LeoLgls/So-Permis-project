
import React, { useState, FormEvent } from 'react';
import { ChakraProvider, CSSReset, Box, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';

interface FormState {
  identifier: string;
  password: string;
}

const Connection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    identifier: '',
    password: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Identifiant:', formState.identifier, 'Password:', formState.password);
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box width="400px" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
          <Heading textAlign={'center'} mb={4}>Connexion</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Identifiant</FormLabel>
              <Input
                type="text"
                placeholder="Entrez votre identifiant"
                value={formState.identifier}
                onChange={(e) => setFormState({ ...formState, identifier: e.target.value })}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Mot de passe</FormLabel>
              <Input
                type="password"
                placeholder="Entrez votre mot de passe"
                value={formState.password}
                onChange={(e) => setFormState({ ...formState, password: e.target.value })}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Se connecter
            </Button>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Connection;
