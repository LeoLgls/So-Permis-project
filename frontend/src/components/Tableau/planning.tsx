import styled from 'styled-components';
import colors from "../../utils/style/colors.tsx";
import {horairesAprem} from "../../services/service.tsx";
import {horairesMatin} from "../../services/service.tsx";

// Styles
const Table = styled.table`
    max-width: 100%;
    border-radius: 25px;
    border: solid 3px white;
    border-spacing: 0;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap; 
    overflow-x: auto; 
`;

const Th = styled.th`
    border: 1px solid #ddd;
    text-align: center;
    color: ${colors.vert};
    font-weight: bolder;
    padding: 1rem;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 0.5rem;
    text-align: center;
    height: 4rem;
    color: white;
    
`;

// Données
const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];


// Composant principal
function Planning() {
  return (
    <Table>
      <thead>
      <tr>
        {joursSemaine.map((jour, index) => (
          <Th key={index}>{jour}</Th>
        ))}
      </tr>
      </thead>
      <tbody>
      <tr>
        {horairesMatin.map((horaire, index) => (
          <Td key={index}>{horaire}</Td>
        ))}
      </tr>
      <tr>
        {horairesAprem.map((horaire, index) => (
          <Td key={index}>{horaire}</Td>
        ))}
      </tr>
      </tbody>
    </Table>
  );
}

export default Planning;
