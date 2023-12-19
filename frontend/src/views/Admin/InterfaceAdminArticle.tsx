import React, { useState } from 'react';
import {
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Switch,
} from '@chakra-ui/react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const FormControl = styled.label`
  display: block;
  margin-bottom: 10px;

  input,
  textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;



const InterfaceAdminArticle: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWriteManual, setIsWriteManual] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSwitchChange = () => {
    setIsWriteManual(!isWriteManual);
  };

  const dataArticle = [
    {
      id: 0,
      titre: "Nouveau permis de conduire : Tout savoir !",
      source: "x.com",
      date: "10/10/2023",
    },
    {
      id: 1,
      titre: "Permis de conduire dès 17 ans : beaucoup d’auto école pas convaincues",
      source: "facebook.com",
      date: "12/10/2023",
    },
  ];

  return (
    <PageContainer>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>Article So'permis</TableCaption>
        <Thead>
          <Tr>
            <Th>Titre</Th>
            <Th>Source</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataArticle.map((article, index) => (
            <Tr key={index}>
              <Td>{article.titre}</Td>
              <Td>{article.source}</Td>
              <Td>{article.date}</Td>
              <Td>
                <Button colorScheme="teal" variant="ghost" textTransform="uppercase" size="sm">
                  Modif
                </Button>
                <Button colorScheme="teal" variant="ghost" textTransform="uppercase" size="sm">
                  Suppr
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Button colorScheme="teal" mt={4} onClick={openModal}>
        Ajouter un nouvelle article
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter un forfait</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Formulaire à remplir */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Ajoutez ici la logique pour soumettre le formulaire
                // Assurez-vous de fermer la modal après la soumission
                closeModal();
              }}
            >
              <FormControl>
                <FormLabel>titre :</FormLabel>
                <input type="text" id="titre" name="titre" required />
              </FormControl>

              <FormControl>
                <FormLabel>Source :</FormLabel>
				        ecrit par So'Permis <Switch onChange={handleSwitchChange}/>
                {!isWriteManual && <input type="text" id="source" name="source" required />}
              </FormControl>

              <FormControl>
                <FormLabel>Description :</FormLabel>
                <textarea id="description" name="description" required />
              </FormControl>

              <Button type="submit" colorScheme="teal" mr={3}>
                Ajouter
              </Button>
              <Button colorScheme="teal" onClick={closeModal}>
                Annuler
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </PageContainer>
  );
};

export default InterfaceAdminArticle;
