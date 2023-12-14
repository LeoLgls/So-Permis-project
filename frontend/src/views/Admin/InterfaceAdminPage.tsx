import React, { useState, FormEvent } from 'react';
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
} from '@chakra-ui/react'
import styled from 'styled-components';


const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const InterfaceAdminPage: React.FunctionComponent = () => {

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
		</PageContainer>


	);
}

export default InterfaceAdminPage;
