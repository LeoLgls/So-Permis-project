import styled from 'styled-components';

const PageContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 150px 20px 20px;
    font-family: 'Arial', sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableCaption = styled.caption`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const Thead = styled.thead`
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 10px;
`;

const Button = styled.button`
  background-color: #008080;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
`;


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
};

export default InterfaceAdminArticle;
