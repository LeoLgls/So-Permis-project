import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,

	Table,
	Thead,
	Tbody,

	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
	Grid,
	GridItem,

	Radio, 
	RadioGroup,
	Stack
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";


const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;


const dataMail = [
	"testuser1@example.com",
	"example.test2@mail.com",
	"temp.email.3@mailbox.net",
	"user4.test@mailprovider.org",
	"testing.email5@example.org",
	"temporary.user@mailservice.com",
	"testmail6@example.net",
	"example.test7@temporarymail.org",
	"user8.testmail@mailprovider.net",
	"temp.test.email9@example.com",
];

const NewsLetter: React.FunctionComponent = () => {

	const [value, setValue] = React.useState('1')

	return (
		<PageContainer>
			<TableContainer>
				<Table variant='striped' colorScheme={'gray'}>
					<TableCaption>Mail NewsLetter</TableCaption>
					<Thead alignContent={'center'} backgroundColor={"black"}>
						<Tr>
							<Th colSpan={2} textAlign={'center'}>Nom</Th>
						</Tr>
					</Thead>
					<Tbody>
						{dataMail.map((mail, index) => (
							<Tr>
								<Td textAlign={'center'}>{mail}</Td>
								<Td textAlign={'end'}><Button>Suppr</Button></Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<RadioGroup onChange={setValue} value={value}>
			<Stack direction='row'>
				<Radio value='1'>Tout</Radio>
				<Radio value='2'>Uniquement reseaux sociaux</Radio>
				<Radio value='3'>Uniquement Article</Radio>
			</Stack>
			</RadioGroup>
		</PageContainer>
	);

}

export default NewsLetter;