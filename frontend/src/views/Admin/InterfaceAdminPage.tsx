// InterfaceAdminPage.tsx
import styled from 'styled-components';
import Tabs from '../../components/Tabs/tab'; // Assure-toi que le chemin est correct

const PageContainer = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	padding: 150px 20px 20px;
	font-family: 'Arial', sans-serif;
`;

const Button = styled.button`
  background-color: #319795;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableCaption = styled.caption`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Thead = styled.thead`
  background-color: black;
  color: white;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Th = styled.th`
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
`;

const dataPermisB = [
	{
		id: 0,
		nom: 'Forfait B',
		prix: 890,
		description: '20 leçon de conduite (sans code)',
	},
	{
		id: 1,
		nom: 'Forfait B Complet',
		prix: 990,
		description: 'Code + 20 leçons de conduite',
	},
];

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

function InterfaceAdminPage() {


  const tabs = [
    {
      label: 'Forfait Permis B',
      content: (
        <TableContainer>
          <Button>Ajouter</Button>
					<Table>
            <TableCaption>Forfait Permis B</TableCaption>
            <Thead>
              <Tr>
                <Th>Nom</Th>
                <Th>Prix</Th>
                <Th>Description</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <tbody>
              {dataPermisB.map((permisB, index) => (
                <Tr key={index}>
                  <Td>{permisB.nom}</Td>
                  <Td>{permisB.prix}</Td>
                  <Td>{permisB.description}</Td>
                  <Td>
                    <Button onClick={() => console.log('Modif')}>Modif</Button>
                    <Button onClick={() => console.log('Suppr')}>Suppr</Button>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      ),
    },
	{
		label: 'Forfait Permis B express',
		content :(
			<TableContainer>
				<Button>Ajouter</Button>
			<Table>
				<TableCaption>Forfait Permis B espress</TableCaption>
				<Thead>
				<Tr>
					<Th>Nom</Th>
					<Th>Prix</Th>
					<Th>Description</Th>
					<Th>Actions</Th>
				</Tr>
				</Thead>
				<tbody>
				{dataPermisBExpress.map((permisBExpress, index) => (
					<Tr key={index}>
					<Td>{permisBExpress.nom}</Td>
					<Td>{permisBExpress.prix}</Td>
					<Td>{permisBExpress.description}</Td>
					<Td>
						<Button onClick={() => console.log('Modif')}>Modif</Button>
						<Button onClick={() => console.log('Suppr')}>Suppr</Button>
					</Td>
					</Tr>
				))}
				</tbody>
			</Table>
			</TableContainer>

		),

	}
  ];

  return (
    <PageContainer>
      <Tabs tabs={tabs} />
    </PageContainer>
  );
}

export default InterfaceAdminPage;
