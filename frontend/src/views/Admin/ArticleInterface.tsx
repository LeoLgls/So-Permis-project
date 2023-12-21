import { Link } from "react-router-dom";
import { articleList } from "../../services/service.tsx";
import {Button, PageContainer, Table, TableCaption, Tbody, Td, Th, Thead, Tr} from "../../utils/style/elementsAdmin.tsx";
import colors from "../../utils/style/colors.tsx";
import styled from "styled-components";

const ButtonAdd = styled(Link)`
	background-color: ${colors.vert};
	color: ${colors.txtBlanc};
	text-decoration: none;
	border-radius: 5px;
	width: fit-content;
	height: fit-content;
	padding: 1rem;
`

const ButtonAddContainer = styled.div`
  padding-top: 5%;
`


const maxSize = articleList.length;

function InterfaceAdminArticle() {

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
          {articleList.map(({titre, source, date}, index) => (
            <Tr key={index}>
              <Td>{titre}</Td>
              <Td>{source}</Td>
              <Td>{date.toLocaleDateString()}</Td>
              <Td>
                <Button to={`/admin/article/modifier-article/${index}`}>Modif</Button>
                <Button to={'/admin'}>Suppr</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <ButtonAddContainer>
        <ButtonAdd to={`/admin/article/modifier-article/${maxSize}`}>Ajouter</ButtonAdd>
      </ButtonAddContainer>

    </PageContainer>
  );
}

export default InterfaceAdminArticle;
