import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormLabel,
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


const InterfaceAdminPage: React.FunctionComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};


	const dataPermisB = [
		{
			id: 0,
			nom: "Forfait B",
			prix: 890,
			description: "20 leçon de conduite (sans code)"
		},
		{
			id: 1,
			nom: "Forfait B Complet",
			prix: 990,
			description: "Code + 20 leçons de conduite"

		}
	]

	const dataPermisBExpress = [
		{
			id: 0,
			nom: "Forfait B",
			prix: 890,
			description: "20 leçon de conduite (sans code)"
		},
		{
			id: 1,
			nom: "Forfait B Complet",
			prix: 990,
			description: "Code + 20 leçons de conduite"

		}
	]

	const dataConduiteAccompagnee = [
		{
			id: 0,
			nom: "Forfait B",
			prix: 890,
			description: "20 leçon de conduite (sans code)"
		},
		{
			id: 1,
			nom: "Forfait B Complet",
			prix: 990,
			description: "Code + 20 leçons de conduite"

		}
	]

	const dataCodeDeLaRoute = [
		{
			id: 0,
			nom: "Forfait B",
			prix: 890,
			description: "20 leçon de conduite (sans code)"
		},
		{
			id: 1,
			nom: "Forfait B Complet",
			prix: 990,
			description: "Code + 20 leçons de conduite"

		}
	]

	return (
		<PageContainer>
			<Tabs variant='soft-rounded' colorScheme='green' align='center'>
				<TabList>
					<Tab>Permis B</Tab>
					<Tab>Permis B Express</Tab>
					<Tab>Conduite accompagnée</Tab>
					<Tab>Code de la route</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Button onClick={openModal}>Ajouter</Button>
						<TableContainer>
							<Table variant='striped' colorScheme='gray'>
								<TableCaption>Forfait Permis B</TableCaption>
								<Thead alignContent={'center'} backgroundColor={"black"}>
									<Tr>
										<Th>Nom</Th>
										<Th>Prix</Th>
										<Th>Description</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{dataPermisB.map((permisB, index) => (
										<Tr>
											<Td>{permisB.nom}</Td>
											<Td isNumeric>{permisB.prix}</Td>
											<Td>{permisB.description}</Td>
											<Td>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Modif
												</Button>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Suppr
												</Button>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</TabPanel>
					<TabPanel>
						<Button onClick={openModal}>Ajouter</Button>
						<TableContainer>
							<Table variant='striped' colorScheme='gray'>
								<TableCaption>Forfait Permis B Express</TableCaption>
								<Thead alignContent={'center'} backgroundColor={"black"}>
									<Tr>
										<Th>Nom</Th>
										<Th>Prix</Th>
										<Th>Description</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{dataPermisBExpress.map((permisBExpress, index) => (
										<Tr>
											<Td>{permisBExpress.nom}</Td>
											<Td isNumeric>{permisBExpress.prix}</Td>
											<Td>{permisBExpress.description}</Td>
											<Td>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Modif
												</Button>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Suppr
												</Button>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</TabPanel>
					<TabPanel>
						<Button onClick={openModal}>Ajouter</Button>
						<TableContainer>
							<Table variant='striped' colorScheme='gray'>
								<TableCaption>Forfait Conduite Accompagnée</TableCaption>
								<Thead alignContent={'center'} backgroundColor={"black"}>
									<Tr>
										<Th>Nom</Th>
										<Th>Prix</Th>
										<Th>Description</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{dataConduiteAccompagnee.map((conduiteAccompagee, index) => (
										<Tr>
											<Td>{conduiteAccompagee.nom}</Td>
											<Td isNumeric>{conduiteAccompagee.prix}</Td>
											<Td>{conduiteAccompagee.description}</Td>
											<Td>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Modif
												</Button>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Suppr
												</Button>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</TabPanel>
					<TabPanel>
						<Button onClick={openModal}>Ajouter</Button>
						<TableContainer>
							<Table variant='striped' colorScheme='gray'>
								<TableCaption>Code de la route</TableCaption>
								<Thead alignContent={'center'} backgroundColor={"black"}>
									<Tr>
										<Th>Nom</Th>
										<Th>Prix</Th>
										<Th>Description</Th>
										<Th>Actions</Th>
									</Tr>
								</Thead>
								<Tbody>
									{dataCodeDeLaRoute.map((codeDeLaRoute, index) => (
										<Tr>
											<Td>{codeDeLaRoute.nom}</Td>
											<Td isNumeric>{codeDeLaRoute.prix}</Td>
											<Td>{codeDeLaRoute.description}</Td>
											<Td>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Modif
												</Button>
												<Button colorScheme='teal' variant='ghost' textTransform={"uppercase"} size={'sm'}>
													Suppr
												</Button>
											</Td>
										</Tr>
									))}
								</Tbody>
							</Table>
						</TableContainer>
					</TabPanel>
				</TabPanels>
			</Tabs>

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
							<FormControl >
								<FormLabel>Nom :</FormLabel>
								<input type="text" id="nom" name="nom" required />
							</FormControl>

							<FormControl >
								<FormLabel>Prix :</FormLabel>
								<input type="number" id="prix" name="prix" required />
							</FormControl>

							<FormControl >
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
}

export default InterfaceAdminPage;
