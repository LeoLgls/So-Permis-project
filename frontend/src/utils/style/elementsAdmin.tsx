import styled from "styled-components";
import {Link} from "react-router-dom";

export const PageContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 150px 20px 20px;
    font-family: 'Arial', sans-serif;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableCaption = styled.caption`
  font-size: 1.2em;
  margin-bottom: 10px;
    display: flex;
`;

export const Thead = styled.thead`
  background-color: #f2f2f2;
`;

export const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding: 10px;
`;

export const Button = styled(Link)`
  background-color: #008080;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
  text-decoration: none;
`;