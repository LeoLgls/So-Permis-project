import styled from 'styled-components';
import Tabs from '../../components/Tabs/tab.tsx';
import { Button, PageContainer, Table, TableCaption, Td, Th, Thead, Tr } from '../../utils/style/elementsAdmin.tsx';
import { ForfaitItem } from "../../utils/models/models.tsx";
import { tabs } from "../../services/service.tsx";
import React from 'react';
import {Link} from "react-router-dom";
import colors from "../../utils/style/colors.tsx";

const TableContainer = styled.div`
	margin-top: 20px;
	padding-bottom: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ForfaitsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`

const ButtonAdd = styled(Link)`
	background-color: ${colors.vert};
	color: ${colors.txtBlanc};
	text-decoration: none;
	border-radius: 5px;
	width: fit-content;
	height: fit-content;
	padding: 1rem;
`

export function generateTableData(data: { caption: string; items: ForfaitItem[] }) {

	//Remplacer par la génération d'un nouvel ID
	const maxSize = data.items.length +1

	return (
		<React.StrictMode>
			<ForfaitsContainer>
				<TableContainer>
					<TableCaption>{data.caption}</TableCaption>
					<Table>
						<Thead>
							<Tr>
								<Th>Nom</Th>
								<Th>Prix</Th>
								<Th>Description</Th>
								<Th>Actions</Th>
							</Tr>
						</Thead>
						<tbody>
						{data.items.map(({ id, nom, prix, description }) => (
							<Tr key={id}>
								<Td>{nom}</Td>
								<Td>{prix}</Td>
								<Td>{description}</Td>
								<Td>
									<Button to={`/admin/forfait/modifier-forfait/${id}`}>Modif</Button>
									<Button to={`/admin/forfait/supprimer-forfait/${id}`}>Suppr</Button>
								</Td>
							</Tr>
						))}
						</tbody>
					</Table>
				</TableContainer>
				<ButtonAdd to={`/admin/forfait/modifier-forfait/${maxSize}`}>Ajouter</ButtonAdd>
			</ForfaitsContainer>
		</React.StrictMode>


	);
}

function InterfaceAdminPage() {
	return (
		<PageContainer>
			<Tabs tabs={tabs} />
		</PageContainer>
	);
}

export default InterfaceAdminPage;
