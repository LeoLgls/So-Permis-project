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
      <Table>
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
                <Button>Modif</Button>
                <Button>Suppr</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

    </PageContainer>
  );
}

export default InterfaceAdminArticle;
