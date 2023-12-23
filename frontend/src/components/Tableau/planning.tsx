/**
 * Composant : Planning
 * 
 * Ce composant React représente un planning affichant les horaires pour chaque jour de la semaine.
 * 
 * Styles :
 * - Table : Une table stylisée avec une largeur maximale de 100%, des coins arrondis, une bordure blanche de 3px,
 *           et un débordement caché pour une navigation horizontale. Les cellules ont une bordure de 1px solide avec
 *           un fond blanc.
 * - Th : Une cellule d'en-tête (th) stylisée avec une bordure de 1px solide, un alignement au centre, une couleur verte,
 *        une police en gras et un espace de remplissage de 1rem.
 * - Td : Une cellule de données (td) stylisée avec une bordure de 1px solide, un espace de remplissage de 0.5rem,
 *        un alignement au centre, une hauteur de 4rem et une couleur blanche.
 * 
 * Données :
 * - joursSemaine : Un tableau contenant les jours de la semaine.
 * 
 * Composant principal :
 * - Planning : Affiche une table avec les jours de la semaine en tant qu'en-tête et les horaires du matin et de
 *              l'après-midi en tant que données.
 * 
 */


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
