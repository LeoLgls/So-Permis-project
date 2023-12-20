import {
  Button,
  PageContainer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "../../utils/style/elementsAdmin.tsx";


function InterfaceAdminArticle() {

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
      <TableCaption>Article So'permis</TableCaption>
      <Table>
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
                <Button to={'/admin'}>Modif</Button>
                <Button to={'/admin'}>Suppr</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

    </PageContainer>
  );
}

export default InterfaceAdminArticle;
