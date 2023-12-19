import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 150px
  font-family: 'Arial', sans-serif;
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
  background-color: #f2f2f2;
`;

const Th = styled.th`
  padding: 10px;
  text-align: center;
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
  cursor: pointer;
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

const NewsLetter: React.FC = () => {
  const [value, setValue] = useState<string>('1');

  return (
    <PageContainer>
      <TableContainer>
        <Table>
          <TableCaption>Mail NewsLetter</TableCaption>
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
                  <Button>Suppr</Button>
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
