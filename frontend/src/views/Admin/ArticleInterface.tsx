import { Link } from "react-router-dom";
import axios from 'axios';
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

const dataArticle = articleList;

const handleDelete = async(id: string) => {
  axios.get(`http://localhost:3333/admin/article/delete/${id}`)

  window.location.reload();
};

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
          {dataArticle.map((article, index) => (
            <Tr key={index}>
              <Td>{article.titre}</Td>
              <Td>{article.source}</Td>
              <Td>{new Date().toLocaleDateString()}</Td>
              <Td>
                <Button to={`/admin/article/modifier-article/${index}`}>Modif</Button>
                <Button to={'/admin/article'} onClick={() => handleDelete(article.id.toString())}>Suppr</Button>
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
