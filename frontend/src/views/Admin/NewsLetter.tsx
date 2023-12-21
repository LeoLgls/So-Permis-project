import { useState } from 'react';
import axios from 'axios';
import { newsletterList } from '../../services/service.tsx';
import styled from 'styled-components';
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
import { redirect } from 'react-router-dom';


const TableContainer = styled.div`
  margin-top: 20px;
`;

const RadioGroup = styled.div`
  margin-top: 20px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Radio = styled.input.attrs({ type: 'radio' })`
  margin-right: 10px;
`;

const dataMail = newsletterList;

const handleDelete = (id: string) => {
  axios.get(`http://localhost:3333/admin/newsletter/delete/${id}`)

  window.location.reload();
};

function NewsLetter() {
  const [value, setValue] = useState<string>('1');

  return (
    <PageContainer>
      <TableCaption>Mail NewsLetter</TableCaption>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th colSpan={2} >
                Nom
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataMail.map((newsletter, index) => (
              <Tr key={newsletter.id.toString()}>
                <Td >{newsletter.email}</Td>
                <Td >
                  <Button to={"/admin/newsletter"} onClick={() => handleDelete(newsletter.id.toString())}>Suppr</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <RadioGroup>
        <Stack>
          <Radio
            value="1"
            checked={value === '1'}
            onChange={() => setValue('1')}
          />
          Tout
          <Radio
            value="2"
            checked={value === '2'}
            onChange={() => setValue('2')}
          />
          Uniquement reseaux sociaux
          <Radio
            value="3"
            checked={value === '3'}
            onChange={() => setValue('3')}
          />
          Uniquement Article
        </Stack>
      </RadioGroup>
    </PageContainer>
  );
};

export default NewsLetter;
