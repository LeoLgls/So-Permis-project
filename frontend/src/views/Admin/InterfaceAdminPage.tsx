import styled from 'styled-components';
import Tabs from '../../components/Tabs/tab';
import { Button, PageContainer, Table, TableCaption, Td, Th, Thead, Tr } from '../../utils/style/elementsAdmin.tsx';
import { ForfaitItem } from "../../utils/models/models.tsx";
import { tabs } from "../../services/service.tsx";

const TableContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export function generateTableData(data: { caption: string; items: ForfaitItem[] }) {
	return (
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
							<Button to={`/admin/interfaceArticle/modifier-forfait/${id}`}>Modif</Button>
							<Button to={`/admin/interfaceArticle/supprimer-forfait/${id}`}>Suppr</Button>
						</Td>
					</Tr>
				))}
				</tbody>
			</Table>
		</TableContainer>
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
