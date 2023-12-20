import React from 'react';
import styled from 'styled-components';
import Tabs from '../../components/Tabs/tab';
import { Button, PageContainer, Table, TableCaption, Td, Th, Thead, Tr } from '../../utils/style/elementsAdmin.tsx';

const TableContainer = styled.div`
	margin-top: 20px;
`;

interface ForfaitItem {
	id: number;
	nom: string;
	prix: number;
	description: string;
}

interface Tab {
	label: string;
	content: React.ReactNode;
}

type Data = {
	permisB: ForfaitItem[];
	permisBExpress: ForfaitItem[];
};

function generateTableData(data: { caption: string; items: ForfaitItem[] }) {
	return (
		<TableContainer>
			<Button>Ajouter</Button>
			<Table>
				<TableCaption>{data.caption}</TableCaption>
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
							<Button onClick={() => console.log('Modif')}>Modif</Button>
							<Button onClick={() => console.log('Suppr')}>Suppr</Button>
						</Td>
					</Tr>
				))}
				</tbody>
			</Table>
		</TableContainer>
	);
}

function InterfaceAdminPage() {
	const donnees: Data = {
		permisB: [
			{ id: 0, nom: 'Forfait B', prix: 890, description: '20 leçon de conduite (sans code)' },
			{ id: 1, nom: 'Forfait B Complet', prix: 990, description: 'Code + 20 leçons de conduite' },
		],
		permisBExpress: [
			{ id: 0, nom: 'Forfait B Express', prix: 890, description: '20 leçon de conduite' },
			{ id: 1, nom: 'Forfait B Express EXPRESS', prix: 10, description: '2H SUR GTA' },
		],
	};

	const tabs: Tab[] = [
		{ label: 'Forfait Permis B', content: generateTableData({ caption: 'Forfait Permis B', items: donnees.permisB }) },
		{
			label: 'Forfait Permis B express',
			content: generateTableData({ caption: 'Forfait Permis B express', items: donnees.permisBExpress }),
		},
	];

	return (
		<PageContainer>
			<Tabs tabs={tabs} />
		</PageContainer>
	);
}

export default InterfaceAdminPage;
