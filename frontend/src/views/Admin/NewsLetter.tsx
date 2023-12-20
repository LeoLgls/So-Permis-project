import { useState } from 'react';
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

const dataMail = [
  'testuser1@example.com',
  'example.test2@mail.com',
  'temp.email.3@mailbox.net',
  'user4.test@mailprovider.org',
  'testing.email5@example.org',
  'temporary.user@mailservice.com',
  'testmail6@example.net',
  'example.test7@temporarymail.org',
  'user8.testmail@mailprovider.net',
  'temp.test.email9@example.com',
];

function NewsLetter() {
  const [value, setValue] = useState<string>('1');

  return (
    <PageContainer>
      <TableCaption>Mail NewsLetter</TableCaption>
      <TableContainer>
        <Table>
          <Thead  >
            <Tr>
              <Th colSpan={2} >
                Nom
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataMail.map((mail, index) => (
              <Tr key={index}>
                <Td >{mail}</Td>
                <Td >
                  <Button to={"/"}>Suppr</Button>
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
